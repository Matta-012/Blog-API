const validateNewPost = require('../schemas/validatePost');

module.exports = (req, res, next) => {
  const { title, content } = req.body;

  const { error } = validateNewPost.validate({ title, content });

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};
