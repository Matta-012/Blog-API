const Joi = require('joi');

const keyIsRequired = '400|{{#label}} is required';

module.exports = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': keyIsRequired,
    'string.empty': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
    'string.min': '400|{{#label}} length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': keyIsRequired,
    'string.empty': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
    'string.email': '400|{{#label}} must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': keyIsRequired,
    'string.empty': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
    'string.min': '400|{{#label}} length must be 6 characters long',
  }),
});