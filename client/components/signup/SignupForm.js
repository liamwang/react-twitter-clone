import React from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.ifUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid = this.state.invalid;
        if (res.data.user) {
          errors[field] = `This ${field} is already taken`;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have signed up succesfully. Welcome!'
          })
          this.context.router.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false})
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join React Twitter</h1>

        <TextFieldGroup 
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          checkUserExists={this.checkUserExists}
          field="username"
          type="text"
        />
        <TextFieldGroup 
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          checkUserExists={this.checkUserExists}
          field="email"
          type="email"
        />
        <TextFieldGroup 
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />
        <TextFieldGroup 
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  ifUserExists: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignupForm;