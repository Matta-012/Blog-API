const validateCategoryName = require('../schemas/validateCategoryName');

module.exports = (req, res, next) => {
  const { name } = req.body;

  const { error } = validateCategoryName.validate({ name });

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};
