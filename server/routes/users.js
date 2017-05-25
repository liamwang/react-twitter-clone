import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash.isEmpty';
// Import User model
import User from '../models/user';

const router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username: data.username }
  }).fetch().then(user => {
    if (user) {
      if(user.get('username') === data.username) {
        errors.username = 'This username is already taken';
      }
      if(user.get('email') === data.email) {
        errors.email = 'This email is already taken';
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    }
  });
}

router.get('/:identifier', (req, res) => {
  User.query({
    // target username and email to avoid querying password_digest
    select: [ 'username', 'email' ],
    where: { email: req.params.identifier },
    orWhere: { username: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  })
});

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if(isValid) {
      const { username, password, email } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      const status = true;

      User.forge({
        username, email, password_digest, status
        }, { hasTimestamps: true}).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));
      }

    else {
      res.status(400).json(errors);
    }
  });
});

export default router;