const express = require("express");
const {asyncHandler } = require("../middleware/errorHandler");

const router = express.Router();

router.get("/rate-limit", asyncHandler(async (req, res) => {
    res.json({ data: "hello" });
}))


module.exports = router;