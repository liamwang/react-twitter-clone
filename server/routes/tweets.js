import express from 'express';
import authenticate from '../middlewares/authenticate';
import isEmpty from 'lodash.isEmpty';
// Import Tweet model
import Tweet from '../models/tweet';
import User from '../models/user';

const router = express.Router();

// Get tweets from database
router.get('/', (req, res) => {
  Tweet.query({
    select: [ 'tweet_text', 'user_name', 'user_id', 'id', 'created_at' ]
  }).fetchAll().then(tweets => {
    res.json({ tweets });
  })
});

// Post tweets to database
router.post('/', authenticate, (req, res) => {
    const tweet_text = req.body.tweet;
    const user_id = req.currentUser.id;
    const user_name = req.currentUser.attributes.username;

    Tweet.forge({
      tweet_text, user_id, user_name
      }, { hasTimestamps: true}).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
});

export default router;