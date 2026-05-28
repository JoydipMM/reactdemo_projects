import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";

const handleReponse = (res, status, message, data=null) => {
    res.status(status).json({ 
        status, 
        message, 
        data 
    });
}


export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handleReponse(res, 200, "All users", users);
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(id);
        if (!user) {
            return handleReponse(res, 404, "User not found");
        }
        handleReponse(res, 200, "User found", user);
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleReponse(res, 201, "User created", newUser);
    } catch (error) {
        next(error);
    }
}

export const updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await updateUserService(id, name, email);
        if (!updatedUser) {
            return handleReponse(res, 404, "User not found");
        }
        handleReponse(res, 200, "User updated", updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserService(id);
        if (!deletedUser) {
            return handleReponse(res, 404, "User not found");
        }
        handleReponse(res, 200, "User deleted", deletedUser);
    } catch (error) {
        next(error);
    }
}