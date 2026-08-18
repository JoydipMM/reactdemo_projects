const logger = require('../utils/logger');
const { validatePost } = require('../utils/validation');
const Post = require('../models/post.model');

// create new post
const createPost = async (req, res) => {
    logger.info('Creating a new post endpoint');
    try {

        // validate post data
        const validation = validatePost(req.body);
        // if validation fails
        if (validation.error) {
            logger.error('Error validating post', validation.error);
            return res.status(400).json({ success: false, message: validation.error.details[0].message });
        }

        // if validation passes then create new post
        const { title, content, mediaIds } = req.body; 
        const newPost = new Post({
            user: req.user.userId,
            title,
            content,
            mediaIds: mediaIds || []
        });
        await newPost.save();
        logger.info('Post created successfully');
        res.status(201).json({ success: true, message: 'Post created successfully', post: newPost });
    } catch (error) {
        logger.error('Error creating post',error);
        res.status(500).json({ success: false, message: 'Error creating post' });
    }
}

// get all posts
const getAllPosts = async (req, res) => {
    logger.info('Getting all posts endpoint');
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        logger.error('Error getting posts',error);
        res.status(500).json({ success: false, message: 'Error getting posts' });
    }
}

// get post by id
const getPostById = async (req, res) => {
    logger.info('Getting post by id endpoint');
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        logger.error('Error getting post by id', error);
        res.status(500).json({ success: false, message: 'Error getting post by id' });
    }
}

// update post by id
const updatePostById = async (req, res) => {
    logger.info('Updating post by id endpoint');
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(post);
    } catch (error) {
        logger.error('Error updating post by id', error);
        res.status(500).json({ success: false, message: 'Error updating post by id' });
    }
}

// delete post by id
const deletePostById = async (req, res) => {
    logger.info('Deleting post by id endpoint');
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        logger.error('Error deleting post by id', error);
        res.status(500).json({ success: false, message: 'Error deleting post by id' });
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById
}