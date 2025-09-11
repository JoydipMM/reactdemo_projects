import User from '../models/user.models.js';


export const getUsersList = async (req, res)=>{
    const userlist = await User.find()
    //res.json(userlist); // we will get json the in http://localhost:3000/userslist
    res.render("users/list", {userlist:userlist, message:null} )
}

export const singleUserView = async (req, res)=>{
    //const user = await User.findOne({ _id: req.params.id }) // mongodb inbuild method
    const user = await User.findById(req.params.id) // mongoose method
    res.render("users/view", {user})
}

export const addNewUser = async(req, res)=>{
    const getUserData = req.body;
    //res.json(getUserData)
    await User.insertOne({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    }); // mongodb inbuild method
    await User.create(req.body); // mongoose method
    //res.render("users/list", {message:"New User Added"} )
    res.redirect("/userslist");
}

export const editUserGettMethod = async(req, res)=>{
    const user = await User.findOne({ _id: req.params.id })
    res.render("users/edit", {user})
}

export const editUserPostMethod = async (req, res)=>{
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/userslist");
}

export const deleteUser = async(req, res)=>{
    await User.findByIdAndDelete({ _id: req.params.id })
    res.redirect("/userslist");
}