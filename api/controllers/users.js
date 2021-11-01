const User = require("../models/User")
const bcrypt = require("bcrypt")



exports.updateuser= async (req,res)=>{
  //checking permisions
    if(req.body.userId===req.params.id || req.body.isAdmin){
      //if password is to be updated
       if(req.body.password){
         try{
           const salt = await bcrypt.gentSalt(10)
           req.body.password = await bcrypt.hash(req.body.password,salt)
         }catch(err){return res.status(500).json(err)}
       }
       // updating other user fields
       try{
         const user =await User.findByIdAndUpdate(req.params.id,{
           $set:req.body,
         })
         res.status(200).json("Account has been updated")
       }catch(err){
         return res.status(500).json(err)
       }
    }else{
      return res.status(403).json("you can update only your account")
    }

}

exports.deleteuser = async (req,res)=>{
  try{
    if(req.body.userId===req.params.id || req.body.isAdmin){
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("Account successfully deleted")

    }else{
      return res.status(403).json("you can only delete your account")
    }
  }catch(err){
    return res.status(500).json(err)
  }
}

exports.getoneuser = async (req,res)=>{
  const userId = req.query.userId;
  const username = req.query.username;
  try{

    const user = userId ? await User.findOne({_id:userId}) : await User.findOne({username:username})
    const {password,updatedAt,...others} = user._doc
    res.status(200).json(others)
  }catch(error){return res.status(500).json(error)}
}

exports.getoneuserbyname = async (req,res)=>{

  try{
    const user = await User.findById(req.params.username)
    const {password,updatedAt,...others} = user._doc
    res.status(200).json(others)
  }catch(error){return res.status(500).json(error)}
}

exports.getallusers = async (req,res)=>{
  try{
    const user = await User.find()
    res.status(200).json(user)
  }catch(err){res.status(500).json(err)}
}

exports.updatefollowings= async (req,res)=>{
  if(req.body.userId!==req.params.id){
    try{
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)

      if(!user.followers.includes(req.body.userId)){
        await user.updateOne({$push:{followers:req.body.userId}})
        await currentUser.updateOne({$push:{followings:req.params.id}})
        res.status(200).json("user has been followed")
      }else{res.status(403).json("you all ready follow this user")}
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("you cant follow your self")
  }
}

// unfollow a user

exports.unfollow= async (req,res)=>{
  if(req.body.userId!==req.params.id){
    try{
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)

      if(user.followers.includes(req.body.userId)){
        await user.updateOne({$pull:{followers:req.body.userId}})
        await currentUser.updateOne({$pull:{followings:req.params.id}})
        res.status(200).json("user has been unfollowed")
      }else{res.status(403).json("you dont follow this user")}
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("you cant follow your self")
  }
}
