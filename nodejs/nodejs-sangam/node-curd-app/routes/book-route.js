const express = require("express");
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook, getBookStatus } = require("../controllers/book-controller");

// create express router
const router = express.Router();

// make all routes related to book
router.get("/get", getAllBooks)
router.get("/get/:id", getBookById)
router.post("/add", addNewBook)
router.put("/update/:id", updateBook)
router.patch("/delete/:id", deleteBook)
router.get("/aggregate-filter", getBookStatus)


// export router
module.exports = router;