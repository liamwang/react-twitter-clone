import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createTweet } from '../../actions/tweetActions';
import validateInput from '../../../server/shared/validations/tweets';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      errors: {},
      isLoading: false
    }
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    } else {
      return isValid
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createTweet(this.state).then(
        (res) => this.setState({ tweet: '' }),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }
  

  render() {
    const { tweet, errors, isLoading } = this.state;

    return (
      <div className="col-md-8 col-md-offset-2">
        <form onSubmit={this.handleSubmit}>
          <h3>Create New Tweet</h3>

          <TextFieldGroup
            field="tweet"
            label="Tweet Text" 
            onChange={this.handleChange}
            value={tweet}
            type="text"
            name="tweet"
            error={errors.tweet}
          />

          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <hr />
      </div>
    );
  }
}

TweetForm.propTypes = {
  createTweet: PropTypes.func.isRequired
}

export default connect(null, { createTweet })(TweetForm);