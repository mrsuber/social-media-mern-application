const Post = require("../models/Post")
const User = require("../models/User")

exports.createPost = async (req,res) =>{
  const post = new Post(req.body)
  try{
    const savePost = await post.save()
    res.status(200).json(savePost)
  }catch(err){res.status(500).json(err)}
}

exports.updatePost = async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id);
    if(post.userId===req.body.userId){
        await post.updateOne({$set:req.body})
        res.status(200).json("the post has been updated")
    }else{res.status(403).json("You can update only your posts")}
  }catch(err){
    res.status(500).json(err)
  }

}

exports.deletePost = async (req,res) =>{
  try{
    const post = await Post.findById(req.params.id)
    if(post.userId===req.body.userId){
      // await Post.findByIdAndDelete(req.params.id)
      await post.deleteOne()
      res.status(200).json("the post has been deleted")
    }else{res.status(403).json("You can only delete your post")}
  }catch(err){res.status(500).json(err)}

}
exports.getSinglePost = async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  }catch(err){res.status(500).json(err)}
}

exports.getAllPost = async (req,res)=>{
  try{
    const posts = await Post.find()
    res.status(200).json(posts)
  }catch(err){res.status(500).json(err)}
}

exports.getUsersAllPost = async (req,res)=>{
  try{
    const user = await User.findOne({username:req.params.username})
    const posts = await Post.find({userId:user._id})
    res.status(200).json(posts)
  }catch(err){res.status(500).json(err)}
}

exports.likePost = async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id);

    if(!post.likes.includes(req.body.userId)){

      await post.updateOne({$push:{likes:req.body.userId}})
      res.status(200).json("the post has been liked")
    }else{
      await post.updateOne({$pull:{ likes: req.body.userId }})
      res.status(200).json("post has been unliked")
    }

  }catch(err){res.status(500).json(err)}
}


exports.dislikePost = async (req,res)=>{
  try{
    const post = await Post.findById(req.params.id);

    if(!post.dislikes.includes(req.body.userId)){

      await post.updateOne({$push:{dislikes:req.body.userId}})
      res.status(200).json("the post has been disliked")
    }else{
      await post.updateOne({$pull:{ dislikes: req.body.userId }})
      res.status(200).json("post has been undisliked")
    }

  }catch(err){res.status(500).json(err)}
}

exports.getTimelinePost = async (req,res) =>{

   try{
     const currentUser = await User.findById(req.params.userId)
     const userPosts = await Post.find({userId:currentUser._id})
     const friendPosts = await Promise.all(
       currentUser.followings.map(friendId =>{
         return Post.find({userId:friendId})
       })
     )
     res.status(200).json(userPosts.concat(...friendPosts))
   }catch(err){res.status(500).json(err)}
}
