const Books = require('../models/Book');

// get all book
const getAllBooks = async (req, res) => {
    try{
        const getAllBooks = await Books.find({isActive: true}).select("-_id");
        const booksCount = getAllBooks?.length;
        if(booksCount > 0){
            return res.status(200).json({ success:true, message: "All books", books: getAllBooks, total: booksCount, limit:5, skip:0 });
        }else{
            return res.status(404).json({ success:false, message: "No book found" });
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    } 
}

// get book by id
const getBookById = async (req, res) => {
    try{
        const getBookById = req.params.id;
        const getbook = await Books.findById({_id: getBookById}).select("-_id");
        if(!getbook){
            return res.status(404).json({ success:false, message: "Book not found" });
        }else{
            return res.status(200).json({ success:true, message: "Book found", book: getbook });
        }
    }catch(error){
        return res.status(404).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}

// Add new book
const addNewBook = async (req, res) => {
    try{
        const newBookFormData = req.body;

        const findBookByTitle = await Books.findOne({title: newBookFormData.title});

        if(findBookByTitle){
            return res.status(400).json({ success:false, message: "Book already exists with this title" });
        }

        const newBook = await Books.create({
            title: newBookFormData.title,
            author: newBookFormData.author,
            year: newBookFormData.year,
            price: newBookFormData.price
        });
        if(newBook){
            return res.status(201).json({ success:true, message: "Book added successfully", books: newBook, AddedBookId: newBook._id });
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}

// update book
const updateBook = async (req, res) => {
    try{
        const getBookId = req.params.id;
        const getBook = await Books.findById({_id: getBookId});
        if(!getBook){
            return res.status(404).json({ success:false, message: "Book not found" });
        }else{
            const findBookByTitle = await Books.findOne({title: getBook.title});
            if(findBookByTitle.title === req.body.title){
                return res.status(400).json({ success:false, message: "Book already exists with this title" });
            }else{
                const updateBookById = await Books.findByIdAndUpdate(
                    getBook,
                    {
                        $set:{
                            title: req.body.title,
                            author: req.body.author,
                            year: req.body.year,
                            price: req.body.price
                        }
                    },
                    {
                        returnDocument: "after"
                    }
                )
                if(updateBookById){
                    return res.status(200).json({ success:true, message: "Book updated successfully", book: updateBookById });
                }
            }
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}

// delete book
const deleteBook = async (req, res) => {
    try{
        const getBookId = req.params.id;
        const getBook = await Books.findById({_id: getBookId});
        if(!getBook){
            return res.status(404).json({ success:false, message: "Book not found" });
        }else{
            const softDeleteBook = await Books.findByIdAndUpdate(
                getBook,
                {
                    $set:{
                        isActive: false
                    }
                },
                {
                    returnDocument: "after"
                }
            ).select("isActive -_id")
            if(softDeleteBook){
                return res.status(200).json({ success:true, message: "Book soft delete successfully", book: softDeleteBook });
            }
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}


module.exports = {
    getAllBooks, getBookById, addNewBook, updateBook, deleteBook
}