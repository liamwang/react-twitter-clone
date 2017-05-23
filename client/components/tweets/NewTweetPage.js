import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';

class NewTweetPage extends React.Component {
  render() {
    return (
      <div>
        <TweetForm />
        <TweetsList />
      </div>
    );
  }
}

export default NewTweetPage;