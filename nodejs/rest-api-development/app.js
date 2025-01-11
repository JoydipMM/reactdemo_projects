const express = require('express');
const app = express();

//middleware
app.use(express.json()) // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

// data
const books = [
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
    { id: 3, name: "Book 3" },
]


// root api
app.get('/', (req, resp)=>{
    resp.json({
        message: "Welcome to rest api development"
    })
})

// get all books
app.get('/get', (req, resp)=>{
    resp.json(books);
})

// get single books
app.get('/get/:id', (req, resp)=>{
    const book = books.find( book => book.id === req.params.id)
    if(book){
        resp.status(200).json(book);
    }else{
        resp.status(404).json({ message: "Any books not found with this ID" })
    }  
})


// add new book
app.post('/add', (req, resp)=>{
    const newBook = {
        id: books.length + 1,
        name: `Book ${books.length + 1}`,
    }
    books.push(newBook);
    resp.status(200).json({
        data: newBook,
        message: "New book added successfully"
    })
})


// listen server
port = 5000;
app.listen(port, ()=>{
    console.log(`Port is running on port ${port}`);
})
