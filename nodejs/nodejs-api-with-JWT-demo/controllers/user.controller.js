import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs'; // for access files
import path from 'path'; // get dir path
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";


export const addUser = async (req, res)=>{
    try {
        //const newuser = await User.create(req.body) // we can not this line of code if we want to upload image

        // for upload image with data
        const user = new User(req.body);
        // now check that image is uploaded or not
        if(req.file){
            user.useravater = req.file.filename
        }
        if(user.useremail === "" || user.userpassword === ""){
            return res.status(404).json({message: "required", success: false})
        }
        const newuser = await user.save()
        if(!newuser) return res.status(404).json({message: "Internal Error", success: false})
        return res.status(201).json(newuser, {message: "user added", success: true})
    } catch (error) {
        res.status(400).json({message: error.message, success: false})
    }
} 

export const allUsers = async (req, res)=>{
    try {
       const search = req.query.search || '';
       const query = {
        $or: [
              { useremail: {$regex : search, $options: 'i'} },
        ]
       }

       const users = await User.find(query); 
       if(!users) return res.status(404).json({message: "No users found", success: false})
        return res.status(201).json(users, {message: "get all user", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const singleUser = async (req, res)=>{
    try {
        // validate param ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID", success: false });
        }

        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: "No user found", success: false})
        return res.status(201).json(user, {message: "user found", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res)=>{
    try {
        // validate param ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID", success: false });
        }

        // existing user data fetch for delete old image
        const existinguser = await User.findById(req.params.id);
        if(!existinguser){
            // this if statement for check that user is uploaded image but database ID no match then it delete the recent uploaded image
            if(req.file.filename){
                const imagepath = path.join("./uploads",req.file.filename);
                fs.unlink(imagepath, (error)=>{
                    if(error) console.log("Failed to delete", error)
                });   
            } // check statement done

            return res.status(404).json({message: "No user found", success: false})
        } 


        if(req.file){
            if(existinguser.useravater){
              const oldImagePath = path.join("./uploads",existinguser.useravater);
                fs.unlink(oldImagePath, (error)=>{
                    if(error) console.log("Failed to delete", error)
                });  
            }
            req.body.useravater = req.file.filename
        }


        const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updateuser) return res.status(404).json({message: "No user found", success: false})
        return res.status(201).json(updateuser, {message: "user data updated", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res)=>{
    try {
        // validate param ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID", success: false });
        }
        
         const deleteuser = await User.findByIdAndDelete(req.params.id)
        if(!deleteuser) return res.status(404).json({message: "No user found", success: false})
        // delete images
        if(deleteuser.useravater){
            const filePath = path.join("./uploads",deleteuser.useravater);
            fs.unlink(filePath, (error)=>{
                if(error) console.log("Failed to delete", error)
            });
        }
        return res.status(201).json({message: "user deleted", success: true})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const registerUser = async (req, res) => {
    try{
        // email and usernam and phone field not black
        const { username, useremail, userpassword, userphone } = req.body;
        if(!username || !useremail || !userpassword || !userphone) return res.status(400).json({message: "All fields are required"})
        
        // match email and username and phone with existing database
        const getExistingUser = await User.findOne({
            $or: [{username},{useremail},{userphone}]
        })

        if(getExistingUser){ // if exist any data
            return res.status(400).json({message: "Already have a user with same email, username or password."})
        } else{ 
            // if not exists means registration process will star here
            // first we encrypt the password
            const haspassword = await bcrypt.hash(userpassword, 10);
            const newUser = new User({username, useremail, userpassword:haspassword, userphone});
            await newUser.save()
            res.status(201).json({message: "New User added.", success: true});
        }    
    }catch(error){
        res.status(500).send({message: error.message})
    }
}


export const loginUser = async (req, res) => {
    try {
        // received username and password
        const { username, userpassword } = req.body;

        // find user data by username
        const user = await User.findOne({username});
        if(!user) return res.status(401).json({message: "user not found with this username", success:false});

        // match form password with user DB password using bcrypt.compare() method 
        const matchPass = await bcrypt.compare(userpassword, user.userpassword);
        if(!matchPass) return res.status(401).json({message: "Password not match", success:false});

        // if above condition match then we will create token for login
        // syntax: jwt.sign(payload, secretOrPrivateKey, [options, callback])
        const token = jwt.sign(
            {userid: user._id, username: user.username}, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return res.status(202).json({ "token": token, success:true})
        
    } catch (error) {
        res.status(500).send({message: error.message, success:false})
    }
}