const Joi = require('joi');

const keyIsRequired = '400|{{#label}} is required';

module.exports = Joi.object({
  categoryIds: Joi.array().required().messages({
    'any.required': keyIsRequired,
    'array.empty': keyIsRequired,
    'array.base': '422|{{#label}} must be an array',
  }),
});