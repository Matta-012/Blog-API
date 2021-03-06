module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', {},
    {
      timestamps: false,
      tableName: 'PostsCategories',
    });

    PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'blogPosts' },
    );

    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'categories' },
    );
  };

  return PostCategory;
};