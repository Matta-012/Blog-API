const Joi = require('joi');

const keyIsRequired = '400|{{#label}} is required';

module.exports = Joi.object({
  name: Joi.string().required().messages({
    'any.required': keyIsRequired,
    'string.base': '422|{{#label}} must be a string',
    'string.empty': keyIsRequired,
  }),
});
