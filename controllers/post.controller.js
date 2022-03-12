const generatePostResponse = require('../helpers/generatePostResponse');
const { BlogPost } = require('../models');

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

module.exports = {
  create,
};
