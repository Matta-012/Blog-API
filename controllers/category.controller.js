const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;

  const isCategoryRegistered = await Category.findOne({ where: { name } });

  if (isCategoryRegistered) {
    return res.status(409).json({ message: 'Category already registered' });
  }

  const newCategory = await Category.create({ name });

  return res.status(201).json({ id: newCategory.id, name });
};

const getAll = async (_req, res) => {
  const userList = await Category.findAll();

  return res.status(200).json(userList);
};

module.exports = {
  create,
  getAll,
};
