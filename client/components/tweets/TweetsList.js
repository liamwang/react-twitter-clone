import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTweets } from '../../actions/tweetActions';

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.fetchTweets();
  }

  fetchTweets = () => {
    this.props.getTweets();
  }
  
  convertDate = (date) => {
    date.slice(0,10);
  }

  renderTweets = () => {
    const tweetStyle = {
      padding: '20px',
      margin: '20px 0',
      border: '1px solid #eee',
      borderLeftWidth: '5px',
      borderLeftColor: '#0275d8',
      borderRadius: '3px'
    }

    const tweetName = {
      fontSize: '18pt'
    }

    if(this.props.tweets) {
      return (
        this.props.tweets.map((tweet) => {
          const d = new Date(tweet.created_at);
          return (
            <div style={tweetStyle} className="tweet-container" key={tweet.id}>
              <span style={tweetName}>{tweet.user_name}</span><br />
              <b>{tweet.tweet_text}</b><br />
              Tweeted at: {d.toString().slice(0,15)}
            </div>
          );
        })
      )
    }
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>Tweets List</h1>
          {this.props.tweets ? this.renderTweets() : null}
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