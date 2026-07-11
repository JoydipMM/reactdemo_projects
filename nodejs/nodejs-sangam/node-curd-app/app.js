const express = require('express');
const app = express();
const mongoose = require('mongoose');
dotenv = require('dotenv');
dotenv.config();
const port = 4000;
const mongodb_url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.42ucz5w.mongodb.net/${process.env.MONGODB_DATABASE}`


async function connectDB(){
    try{
        const connect = await mongoose.connect(mongodb_url);
        console.log(`${connect.connection.db.databaseName} database connected successfully`);
    }catch(err){
        console.log("Connection failed. Error:", err);
    }finally{
        await mongoose.connection.close();
    }
}

//connectDB();

mongoose.connect(mongodb_url).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log("Connection failed. Error:", err);
})



const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Books = mongoose.models.Books || mongoose.model("Books", bookSchema);
/* Note:
1. model name always plural and first letter capital.
2. schema name always singular 
3. collection name always plural and all in small letter
*/

async function runQueryExample(){
    try{

        // create a new book document in database option 01
        // const NewBook = await Books.create({
        //     title: "New Book 005",
        //     author: "New Author",
        //     price: 600
        // });
        // console.log("New Book created: ",NewBook);

        // create a new book document in database option 02
        /*const book = new Books({
            title: "New Book 002",
            author: "New Author 002",
            price: 300
        });
        await book.save();
        console.log("New Book created: ",book);*/

        // get all books from database
        // const books = await Books.find({});
        // console.log("All books: ",books);

        // get not active books from database
        // const inActiveBooks = await Books.find({isActive: false});
        // console.log("All inactive books: ",inActiveBooks);

        // get find one: active book from database:
        // This findOne() method returns the first document that matches the filter criteria.
        // const activeBook = await Books.findOne({isActive: true});
        // console.log("First Active book: ",activeBook);

        // find a book with specific book id from database
        // const findBookByID = await Books.findOne({_id: "6a51fbad99138c2ef01566ec"});
        // console.log("Book found: ",findBookByID);

        // select some specific fields from database
        // const getBookswithSpecificProperties = await Books.find().select("title author -_id"); // -_id will exclude _id field
        // console.log("Book found: ",getBookswithSpecificProperties);
        /*
        Result:
        Book found:  [
            { title: 'book 001', author: 'JD Bose' },
            { title: 'New Book', author: 'New Author' },
            { title: 'New Book 002', author: 'New Author 002' }
        ]
        */

        // limited and skip
        // await Books.find().limit(1).skip(2); > get all user, then show only 1 user after skipping first 2.
        // const getBookswithSpecificProperties = await Books.find().limit(1).skip(2);
        // console.log("Book found: ",getBookswithSpecificProperties);
        /*
        Result:
        Book found:  [
            {
                _id: new ObjectId('6a51fbad99138c2ef01566ec'),
                title: 'New Book 002',
                author: 'New Author 002',
                price: 300,
                createdAt: 2026-07-11T08:15:41.116Z,
                updatedAt: 2026-07-11T08:15:41.116Z,
                __v: 0,
                isActive: true
            }
        ]
        */

        // shorting
        //const shortingBooks = await Books.find().sort({price: -1}); // 1 for ascending and -1 for descending
        //console.log("All books: ",shortingBooks);

        // count document 
        // const countDocument = await Books.countDocuments({isActive:true});
        // console.log(countDocument);
        // result: 2

        // delete document
        // const deleteBookID = "6a526685c714cc91ca6cb4dc"
        // const findBook = await Books.findById({_id:deleteBookID});
        // if(!findBook){
        //     console.log("Book not found!!!")
        // }else{
        //     const deleteBook = await Books.findByIdAndDelete({_id:deleteBookID});
        //     console.log(deleteBook, "Book deleted successfully!!!");
        // }

        // updateBook
        // const updateBook = await Books.findByIdAndUpdate(
        //     {_id:"6a526666f7968ddf3615a65d"},
        //     { 
        //         $set: { price: 1500 },
        //         //$push: { tags: "New Tag" } // push something new
        //     },
        //     { returnDocument : true} // new : true >>> this new is deprecated instead of "new" use "returnDocument"
        // );
        // console.log(updateBook, "book data updated!!!")
        

    }catch(error){
        console.log("Error: ",error);
    }finally{
        await mongoose.connection.close();
    }
}

runQueryExample();


 

const data = [
    {id:1, name:"Product 1"},
]

const demoMiddleware = (req, res, next) => {
    console.log("demo middleware");
    console.log(`method: ${req.method} url: ${req.url} date: ${new Date().toString()}`);
    next();
}

app.use(express.json());
app.use(demoMiddleware);

app.get("/", (req,res)=>{
  res.json({title:"Home"});  
});
app.get("/about", (req,res)=>{
  res.json({title:"About"});  
});
app.get("/products", (req,res)=>{
  res.json({title:"Products", data:data});  
});
app.get("/products/:id", (req,res)=>{
    const filteredProduct = data.find((product) => product.id == req.params.id);
    if(!filteredProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
        return res.status(200).json({title:"Products", data:filteredProduct});  
    }
});
app.post("/add", (req,res)=>{
//   const newProduct = {
//     //id: data.length + 1,
//     id:`${Math.floor(Math.random() * 1000)}`,
//     //name: req.body.name // real projct it will be req.body
//     name: `name${Math.floor(Math.random() * 1000)}`
//   } 
//   data.push(newProduct);

    console.log(req.body);

    // const newProduct = Books.create({
    //     title: req.body.title,
    //     author: req.body.author,
    //     price: req.body.price
    // });

    res.status(200).json({
    data:newProduct,
    message: "New product added successfully"
    });
});
app.put("/update/:id", (req,res)=>{
    const updatedProduct = data.find((product) => product.id == req.params.id);
    if(!updatedProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
         updatedProduct.name =  `${updatedProduct.name} updated`;
         return res.status(202).json({message:"Products updated", data: updatedProduct});
    }
});
app.delete("/delete/:id", (req,res)=>{
    const deletedProduct = data.find((product) => product.id == req.params.id);
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
        data.splice(data.indexOf(deletedProduct), 1);
        return res.status(202).json({title:"Products", data});  
    }
});



app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})