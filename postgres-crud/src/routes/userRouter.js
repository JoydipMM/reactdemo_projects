import express from 'express';
import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUserById);
router.delete("/user/:id", deleteUserById);


export default router;