const validateUser = require('../schemas/validateUser');

module.exports = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const { error } = validateUser.validate({ displayName, email, password });

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};