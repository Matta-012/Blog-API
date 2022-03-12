const { Category } = require('../models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categoriesList = await Category.findAll();
  const categoriesIdList = categoriesList.map(({ id }) => id);

  const isCategoryIdValid = categoryIds.every((id) => categoriesIdList.includes(id));

  if (!isCategoryIdValid) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};
