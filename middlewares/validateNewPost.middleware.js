const validateNewPost = require('../schemas/validatePost');

module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = validateNewPost.validate({ title, content, categoryIds });

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};
