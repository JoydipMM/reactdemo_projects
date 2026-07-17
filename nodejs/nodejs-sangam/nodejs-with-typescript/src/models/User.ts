import mongoose, { Document } from "mongoose";


export interface IUser extends Document{
    name: string,
    email: string
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);