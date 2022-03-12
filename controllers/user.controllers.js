const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.create({
    displayName,
    email,
    password,
    image: image || 'null',
  });

  const token = jwtGenerator({ id: newUser.id, email });

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const userList = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return res.status(200).json(userList);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};
