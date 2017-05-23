import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTweets } from '../../actions/tweetActions';

class TweetsList extends React.Component {

  fetchTweets = (e) => {
    this.props.getTweets();
  }

  componentWillMount() {
    this.fetchTweets();
  }

  componentWillUpdate(nextProps) {
    this.fetchTweets();
  }
  
  renderTweets = () => {
    if(this.props.tweets) {
      return (
        this.props.tweets.map((tweet) => {
          return <li key={tweet.id}>{tweet.tweet_text}</li>
        })
      )
    }
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>Tweets List</h1>
        <ul>
          {this.renderTweets()}
        </ul>
      </div>
    );
  }
}

TweetsList.propTypes = {
  getTweets: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweetList
  }
}

export default connect(mapStateToProps, { getTweets })(TweetsList);