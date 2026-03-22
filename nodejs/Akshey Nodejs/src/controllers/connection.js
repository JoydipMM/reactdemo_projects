const userModel = require('../models/user');


const connectionController = async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:user.name + " send connection request !!!"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = {
    connection: connectionController
}