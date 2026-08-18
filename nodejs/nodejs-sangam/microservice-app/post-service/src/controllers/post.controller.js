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
        res.status(201).json({ success: true, message: 'Post created successfully' });
    } catch (error) {
        logger.error('Error creating post',error);
        res.status(500).json({ success: false, message: 'Error creating post' });
    }
}

// get all posts
const getAllPosts = async (req, res) => {
    logger.info('Getting all posts endpoint');
    try {

        // pagination codes
        const page = parseInt(req.query.page) || 1; // page number, like: 1,2,3,4,5. when user click on 2 then page will be page 2
        const limit = parseInt(req.query.limit) || 2; // limit number, like: 5,10,15,20. how many item will be shown in one page
        const skip = (page - 1) * limit; 
        /* skip number of item will skip for each page 
        Ex: 
        for page 1 = [(1 - 1) * 5] = 0, 
        for page 2 = [(2 - 1) * 5] = 5, 
        for page 3 = [(3 - 1) * 5] = 10 
        */
        const sortBy = req.query.sortBy || "createdAt"; // sort by createdAt or updatedAt
        const sortOrder = req.query.sortOrder === "asc" ? 1 : -1; // sort order asc or desc
        const totalCount = await Post.countDocuments(); // total count of all images in database
        const totalPages = Math.ceil(totalCount / limit); // total pages -> 1,2,3,4 > pagination ( 20 / 5 ) = 4 

        const sortObj = {};
        sortObj[sortBy] = sortOrder;
        /* sortObj = { createdAt: 1 } */
        const getPosts = await Post.find().sort(sortObj).skip(skip).limit(limit);
        // Note: -----------------------
        // .sort().skip().limit() all are mongoose inbuilt methods
        // -----------------------------

        return res.status(200).json({ 
            success:true, 
            message: "Post found", 
            images: getPosts, 
            totalImages: totalCount, 
            limit: limit, 
            skip: skip, 
            currentPage: page, 
            totalPages: totalPages 
        });

        // without pagination
        //const posts = await Post.find();
        //res.status(200).json(posts);
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