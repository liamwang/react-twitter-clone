import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createTweet } from '../../actions/tweetActions';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTweet(this.state.title);
  }

  render() {
    const { title, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create New Tweet</h1>

        <TextFieldGroup
          field="title"
          label="Tweet Title" 
          onChange={this.handleChange}
          value={title}
          type="text"
          name="title"
          error={errors.title}
        />

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}

TweetForm.propTypes = {
  createTweet: PropTypes.func.isRequired
}

export default connect(null, { createTweet })(TweetForm);