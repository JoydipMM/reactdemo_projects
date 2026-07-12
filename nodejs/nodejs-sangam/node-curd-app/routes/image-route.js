const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uplodMiddleware = require('../middleware/upload-middleware');
const { uploadImageController, fetchImagesController } = require('../controllers/image-controller');

// upload image
router.post("/upload", authMiddleware, adminMiddleware, uplodMiddleware.single("image"), uploadImageController);
router.get("/uploaded-images", authMiddleware, fetchImagesController);

// get all uploaded images


module.exports = router;