import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, ifUserExists } from '../../actions/signupActions';
import SignupForm from './SignupForm';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, ifUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm 
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
            ifUserExists={ifUserExists}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  ifUserExists: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, ifUserExists })(SignupPage);