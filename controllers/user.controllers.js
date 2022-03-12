const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.create({ displayName, email, password, image: image || 'null' });

  const token = jwtGenerator({ id: newUser.id, email });

  return res.status(201).json({ token });
};

module.exports = {
  create,
};
