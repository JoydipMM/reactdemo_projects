const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uplodMiddleware = require('../middleware/upload-middleware');
const { uploadImageController } = require('../controllers/image-controller');

// upload image
router.post("/upload", authMiddleware, adminMiddleware, uplodMiddleware.single("image"), uploadImageController);

// get all uploaded images


module.exports = router;