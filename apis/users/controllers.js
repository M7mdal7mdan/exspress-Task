const user = require("../../db/models/Users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_SECRETKEY,JWT,EXP} = require("../../config/keys");






  exports.signUp= async (req,res,next) =>{
    try{
        //encrypt password
        const saltRound =10
        const hashedPassword = await bcrypt.hash(req.body.password,saltRound);
        req.body.password = hashedPassword;
        const user = await User.create(req.body)
        //identify whats iside the token
        const payload ={
            username:user.username,
            id: user.id,
            exp:Date.now() + 900000
        };
        //create token
        const token = jwt.sign(payload,'JWT_SECRETKEY')
        res.status(201).json({token:token});
       
    } catch(error){
       next(error);
    }
 }