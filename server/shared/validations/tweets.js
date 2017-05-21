import validator from 'validator';
import isEmpty from 'lodash.isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.tweet)) {
    errors.tweet = 'This field cannot be empty';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}