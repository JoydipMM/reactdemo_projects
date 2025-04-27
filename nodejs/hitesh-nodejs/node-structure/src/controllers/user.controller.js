import { asyncHandler } from "../utils/asyncHandeller.js";


const registerUser = asyncHandler( async (req, res) =>{
    
    // test code ---------------------------------------------------
    // res.status(200).json({
    //     message:"ok"
    // })


    // get user details from frontend ==================================
    const { email, userName, password } = req.body;
    console.log("email", email);
    // validation - 1. not empty =======================================
    // check if user already exists: username, email  ==================
    // check for images, check for avater  =============================
    // upload images in cloudimary, avater uploaded check  =============
    // create user object - create entry in db  ========================
    // remove password and refresh token from response  ================
    // check for user creation  ========================================
    // return response  ================================================




    
})


export { registerUser }