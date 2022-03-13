const validateCategoryId = require('../schemas/validateCategoryId');

module.exports = (req, res, next) => {
  const { categoryIds } = req.body;

  const { error } = validateCategoryId.validate({ categoryIds });

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};
