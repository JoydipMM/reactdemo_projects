const mongoose = require('mongoose');


// step 01 - connect Database
mongoose.connect('')
.then(()=>console.log("Database connected successfully"))
.catch((error)=> console.log(error) )

// step 02 - create schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt : { type: Date, default : Date.now } // default use for if we don't pass any data from frontend the it will pass default data automatically
});

// step 03 - create user model
const User = mongoose.model('User', userSchema); // ('User', <--- this is the name of the collection in mongo database

// step 04 - main query function
async function runQueryExample() {
    try{

        // create new user type 01 --------------------------------------
        /*const newUser = await User.create({
            username: 'sanjoybose',
            password: 'sanjoybose1234',
            age: '32',
            isActive: true,
            tags: ['manager'],
        })
        console.log("Craeted new user", newUser);*/
        
        // create new user type 02 -------------------------------------
        /*let data = new User({ username: 'rahulbose',
            password: 'rahulbose1234',
            age: '23',
            isActive: true,
            tags: ['developer', 'designer'], 
        });
        let result = await data.save(); 
        console.log("Craeted new user", result);*/

        // get all users
        // const allUser = await User.find({});
        // console.log("Get all users", allUser);

        // get single user
        // const singleUser =  await User.find({ isActive: false });
        // console.log(singleUser);

        // get first single data
        // const singleFUser =  await User.findOne({ username: 'rajibsarkar' });
        // console.log(singleFUser);

        // get ID from last created data
        // const getLastCraetedUserById = await User.findById(newUser._id);
        // console.log(getLastCraetedUserById)

        // get selected field not id field
        // const selectedFields = await User.find().select('username -_id');
        // console.log(selectedFields);

        // get limited user and exclude one user
        // const limitedUser = await User.find().limit(5).skip(1).select('username -_id');
        // console.log(limitedUser)

        //get sorted user
        // const sortedUsers = await User.find().select('username age -_id').sort({ age: -1 }); // -1 = desecding order && 1 = assending order 
        // console.log(sortedUsers);

        // count data as the basis of any specific data
        const countDocument = await User.countDocuments({ isActive : true });
        console.log(countDocument);





    }catch(error){
        console.log( 'error --> ', error )
    }finally{
        await mongoose.connection.close()
    }
}

runQueryExample();