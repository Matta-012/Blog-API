const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  req.body.id = user.id;
  next();
};
