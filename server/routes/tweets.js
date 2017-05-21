import express from 'express';
import authenticate from '../middlewares/authenticate';
import isEmpty from 'lodash.isEmpty';
// Import Tweet model
import Tweet from '../models/tweet';

const router = express.Router();

router.post('/', authenticate, (req, res) => {
    const tweet_text = req.body.tweet;
    const user_id = req.currentUser.id;

    Tweet.forge({
      tweet_text, user_id
      }, { hasTimestamps: true}).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
});

export default router;