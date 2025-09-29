import express from 'express';
import User from "../models/user.model.js";

export const addUser = async (req, res)=>{
    try {
        const newuser = await User.create(req.body)
        if(!newuser) return res.status(404).json({message: "Internal Error", success: false})
        return res.status(201).json(newuser, {message: "user added", success: true})
    } catch (error) {
        res.status(400).json({message: error.message, success: false})
    }
} 

export const allUsers = async (req, res)=>{
    try {
       const users = await User.find(); 
       if(!users) return res.status(404).json({message: "No users found", success: false})
        return res.status(201).json(users, {message: "get all user", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const singleUser = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: "No user found", success: false})
        return res.status(201).json(user, {message: "user found", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res)=>{
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updateuser) return res.status(404).json({message: "No user found", success: false})
        return res.status(201).json(updateuser, {message: "user data updated", success: true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res)=>{
    try {
         const deleteuser = await User.findByIdAndDelete(req.params.id)
        if(!deleteuser) return res.status(404).json({message: "No user found", success: false})
        return res.status(201).json({message: "user deleted", success: true})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}