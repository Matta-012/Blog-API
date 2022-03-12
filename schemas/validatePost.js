const Joi = require('joi');

const keyIsRequired = '400|{{#label}} is required';

module.exports = Joi.object({
  title: Joi.string().required().messages({
    'any.required': keyIsRequired,
    'string.empty': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
  }),
  content: Joi.string().required().messages({
    'any.required': keyIsRequired,
    'string.empty': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': keyIsRequired,
    'array.empty': keyIsRequired,
    'array.base': '422|{{#label}} must be an array',
  }),
});
