const User = require("../models/User")
const bcrypt = require("bcrypt")





exports.register = async (req,res)=>{
  try{
    //generate new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    //create new user
    const newUser = new User({
      username:req.body.username,
      email:req.body.email,
      password:hashedPassword,
    })
    //save user in database
    const user = await newUser.save();
    // filter password out of respose
    const {password,...others}=user._doc
    //return resposes
    res.status(200).json(others)
  }catch(err){
    res.status(500).json(err)
  }

}

exports.login = async (req,res)=>{
  try{
    //check if email exist
    const user =await User.findOne({ email:req.body.email })
    !user && res.status(404).send("User not found")
    //checking if password id valid
    const validPassword = await bcrypt.compare(req.body.password,user.password)
    !validPassword && res.status(400).send("wrong password")
    //filtering out password form the response
    const {password,...others}= user._doc;
    // returning response
    res.status(200).json(others)

  }catch(err){
    res.status(500).json(err)
  }
}
