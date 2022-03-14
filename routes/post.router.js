const express = require('express');
const {
  validateNewPost,
  validateCategoryIdInput,
  validateCategoryId,
  validatePostOwnership,
  auth,
} = require('../middlewares');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.post(
  '/',
  validateNewPost,
  validateCategoryIdInput,
  validateCategoryId,
  auth,
  PostController.create,
);

router.get('/', auth, PostController.getAll);

router.get('/search', auth, PostController.getByQuery);

router.get('/:id', auth, PostController.getById);

router.put(
  '/:id',
  validateNewPost,
  auth,
  validatePostOwnership,
  PostController.update,
);

router.delete(
  '/:id',
  auth,
  validatePostOwnership,
  PostController.deletePost,
);

module.exports = router;
