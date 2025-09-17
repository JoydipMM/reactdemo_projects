import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    }
});

// paginate with this plugin
userSchema.plugin(paginate);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;