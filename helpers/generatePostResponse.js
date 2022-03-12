module.exports = (newPost, newPostData) => ({
    id: newPost.id,
    userId: newPostData.userId,
    title: newPostData.title,
    content: newPostData.content, 
  });