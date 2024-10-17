import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true, unique: true },
    password: { type: String, required:true },
    cart: { type: Object, default:{} },
}, { minimize: false });

// Note: minimize: false ---- because new user cart will be blank for first time. So if user add item on cart for first time then cart item will not save on that time. So we will use minimize for prevent that issue. 

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;