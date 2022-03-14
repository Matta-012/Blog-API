const { Op } = require('sequelize');
const generatePostResponse = require('../helpers/generatePostResponse');
const { BlogPost, User, Category } = require('../models');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.tokenData;

  const dateNow = new Date();
  const newPostData = {
    title,
    content,
    categoryIds,
    published: dateNow,
    updated: dateNow,
    userId: id,
  };

  const newPost = await BlogPost.create(newPostData);

  const postResponse = generatePostResponse(newPost, newPostData);

  return res.status(201).json(postResponse);
};

const getAll = async (_req, res) => {
  const postList = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, 
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] }, // Remove o conteúdo das colunas da tabela PostsCategories
    }],
  });

  return res.status(200).json(postList);
};

const getByQuery = async (req, res) => {
  const { q } = req.query;

  const postList = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }, // Remove o conteúdo das colunas da tabela PostsCategories
    ],
  });

  return res.status(200).json(postList);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, 
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] }, // Remove o conteúdo das colunas da tabela PostsCategories
    }],
  });

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { postData } = req;
  const { title, content, categoryIds } = req.body;

  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  await BlogPost.update({ ...postData, title, content }, { where: { id } });

  const updateResponse = {
    title,
    content,
    userId: postData.userId,
    categories: postData.categories,
  };

  return res.status(200).json(updateResponse);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await BlogPost.destroy({ where: { id } });

  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
  getByQuery,
};
