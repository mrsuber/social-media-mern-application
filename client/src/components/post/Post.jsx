import React, {useState,useEffect,useContext} from 'react'
import './Post.css'
import {MoreVert,ThumbUpAlt,ThumbDownAlt,Favorite} from '@material-ui/icons'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

import {AuthContext} from "../../context/AuthContext"

const Post = ({post}) => {
  const[like,setLike]=useState(post.likes.length)
  const[isLiked,setIsLiked]=useState(false)
  const [user,setUser]= useState({})

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext)

  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes])

  const likeHandler = () =>{
    try{
      axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
    }catch(err){

    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  useEffect(()=>{
    const fetchUsers = async () =>{
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUsers()
  },[post.userId])
  return (
    <div className="social__post">
    <div className="social__postWrapper">
        <div className="social__postTop">
            <div className="social__postTopLeft">
              <Link to={`profile/${user.username}`} className="social__like"><img src={user.profilePicture ? PF+user.profilePicture : PF+"noAvatar.png"} alt="" className="social__postProfileImg" /></Link>
              <span className="social__postUsername">{user.username}</span>
              <span className="social__postDate">{format(post.createdAt)}</span>
            </div>
            <div className="social__postTopRight">
              <MoreVert />
            </div>
        </div>
        <div className="social__postCenter">
        <span className="social__postText">{post?.desc}</span>
        <img className="social__postImg" src={PF+post.img} alt=""/>
        </div>
        <div className="social__postBottom">
          <div className="social__postBottomLeft">
            <div className="social__postLikeWrapper" onClick={likeHandler}><ThumbUpAlt htmlColor="White" className="social__likeIcon"/></div>
            <div className="social__postDislikeWrapper"><ThumbDownAlt htmlColor="white" className="social__dislike"/></div>
            <div className="social__postHeartWrapper" onClick={likeHandler}><Favorite htmlColor="white" className="social__dislike"/></div>

            <span className="socail__postLikeCounter">{like} people like it</span>
          </div>
          <div className="social__postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Post
