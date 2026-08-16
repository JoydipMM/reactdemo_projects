const mongoose = require('mongoose');
const router = require('express').Router();
const Post = require('../models/post.model');
const { authenticateRequest } = require('../middleware/authMiddleware');
const { createPost, getAllPosts, getPostById, updatePostById, deletePostById} = require('../controllers/post.controller');


// middlewares -> This is used to check if the user is authenticated or not
// router.use(authenticateRequest); // if we want to use this middleware in all routes

router.post('/create-post', authenticateRequest, createPost);
router.get('/all-posts', getAllPosts);
router.get('/single-post/:id', getPostById);
router.put('/single-post/:id', authenticateRequest, updatePostById);
router.delete('/delete-post/:id', authenticateRequest, deletePostById);

module.exports = router;