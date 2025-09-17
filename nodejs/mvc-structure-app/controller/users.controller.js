import User from '../models/user.models.js';
import mongoose from 'mongoose';


export const getUsersList = async (req, res)=>{
    try {
        const { page=1, limit=3 } = req.query;
    
        const paginateOption ={
            page: parseInt(page),
            limit: parseInt(limit),
        }
        //const userlist = await User.find()
        const result = await User.paginate({}, paginateOption);
        //res.send(result)
        
        if(!result.docs){
            res.render("404", {message: "No Data found related to this ID"})
        }
        res.render("users/list", {
            message:null,
            totalDocs: result.totalDocs,
            limit: result.limit,
            totalPages: result.totalPages,
            currentPage: result.page,
            pagingCounter: result.pagingCounter,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevPage: result.prevPage,
            nextPage: result.nextPage,
            userlist: result.docs
        })
    } catch (error) {
        res.render("500", {message: error})
    }
}

export const singleUserView = async (req, res)=>{
    //const user = await User.findOne({ _id: req.params.id }) // mongodb inbuild method

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404", {message: "Param ID is not valid"})
    }
    
    try {
      const user = await User.findById(req.params.id) // mongoose method
      if(!user){
        res.render("404", {message: "No Data found related to this ID"})
      }
      res.render("users/view", {user})  
    } catch (error) {
        res.render("500", {message: error})
    }
    
}

export const addNewUser = async(req, res)=>{
    const getUserData = req.body;
    //res.json(getUserData)

    try {
      const newuser = await User.insertOne({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
        }); // mongodb inbuild method
        if(!newuser){
            res.render("404", {message: "No Data found related to this ID"})
        }
      res.redirect("/userslist");
    } catch (error) {
        res.render("500", {message: error})
    }
}

export const editUserGettMethod = async(req, res)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404", {message: "Param ID is not valid"})
    }

    try {
        const user = await User.findOne({ _id: req.params.id })
        if(!user){
            res.render("404", {message: "No Data found related to this ID"})
        }
        res.render("users/edit", {user})
    } catch (error) {
        res.render("500", {message: error})
    }
    
}

export const editUserPostMethod = async (req, res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404", {message: "Param ID is not valid"})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if(!user){
            res.render("404", {message: "No Data found related to this ID"})
        }
        res.redirect("/userslist");
    } catch (error) {
        res.render("500", {message: error})
    }

}

export const deleteUser = async(req, res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404", {message: "Param ID is not valid"})
    }
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id })
        if(!user){
            res.render("404", {message: "No Data found related to this ID"})
        }
        res.redirect("/userslist");
    } catch (error) {
        res.render("500", {message: error})
    }
}