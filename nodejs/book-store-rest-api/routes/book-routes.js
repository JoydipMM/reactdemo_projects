const express = require('express');
const { getAllBooks, getSingleBook, addNewBook, updateSingleBook, deleteBook } = require('../controllers/book-controller');

// create express router
const router = express.Router();

// list of routes
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBook);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;