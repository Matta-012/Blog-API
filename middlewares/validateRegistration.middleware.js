const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const isRegistered = await User.findOne({ where: { email } });

  if (isRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};