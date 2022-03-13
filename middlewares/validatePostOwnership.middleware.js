const { BlogPost, Category } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.tokenData;

  const post = await BlogPost.findByPk(id, {
    include: [{
      model: Category,
      as: 'categories',
      through: { attributes: [] }, // Remove o conteúdo das colunas da tabela PostsCategories
    }],
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (post.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  req.postData = post;
  next();
};
