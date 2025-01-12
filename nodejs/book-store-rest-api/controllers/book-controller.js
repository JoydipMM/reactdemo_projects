const book = require('../models/Book');

// get all book list
const getAllBooks = async(req, resp) => {
    try{
        const allBook = await book.find({});
        if(allBook.length > 0){
            resp.status(200).json({
                success: true,
                message: "List of books fetch successfully",
                data : allBook,
            });
        }else{
            resp.status(404).json({
                status: false,
                message: "NO books found !!!!"
            });
        }
    }catch(e){
        console.log(e);
        resp.status(500).json({
            success: false,
            message: "Something went wrong !!!"
        });
    }

}

// get single book
const getSingleBook = async(req, resp) => {
    try{
        const singleBook = await book.findById(req.params.id);
        if(!singleBook){
            resp.status(404).json({
                status: false,
                message: "NO books found !!!!"
            });
        }
        resp.status(200).json({
            success: true,
            message: "book fetch successfully",
            data : singleBook,
        });
    }catch(e){
        console.log(e);
        resp.status(500).json({
            success: false,
            message: "Something went wrong !!!"
        });
    }
}

// add new book
const addNewBook = async(req, resp) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await book.create(newBookFormData);
        if(newlyCreatedBook){
            resp.status(201).json({
                success: true,
                message: "New Book added succussfully",
                data: newlyCreatedBook
            })
        }
    }catch(error){
        console.log(error);
        resp.status(500).json({
            success: false,
            message: "Something went wrong !!!"
        });
    }
}

// Update single book
const updateSingleBook = async(req, resp) => {
    try{
       const getUpdatedFormData = req.body;
       const getCurrentBookID = req.params.id;

       const updateBook = await book.findByIdAndUpdate(
        getCurrentBookID, 
        getUpdatedFormData, 
        {
            new: true
        });

        if(!updateBook){
            resp.status(404).json({
                status: false,
                message: "NO books found !!!!"
            });
        }
        resp.status(200).json({
            success: true,
            message: "book update successfully",
            data : updateBook,
        });
    }catch(error){
        console.log(error);
        resp.status(500).json({
            success: false,
            message: "Something went wrong !!!"
        });
    }
}

// delete book
const deleteBook = async(req, resp) => {
    try{
        const getBookID = req.params.id;
        const deletedBook = await book.findByIdAndDelete(getBookID);
        if(!deletedBook){
            resp.status(404).json({
                status: false,
                message: "NO books found !!!!"
            });
        }
        resp.status(200).json({
            success: true,
            message: "book deleted successfully",
            data : deletedBook,
        });
    }catch(error){
        console.log(error);
        resp.status(500).json({
            success: false,
            message: "Something went wrong !!!"
        });
    }
}

module.exports = { getAllBooks, getSingleBook, addNewBook, updateSingleBook, deleteBook }