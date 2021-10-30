import React, {useState} from 'react'
import './Post.css'
import {MoreVert,ThumbUpAlt,ThumbDownAlt,Favorite} from '@material-ui/icons'
import {Users} from "../../data/data"



const Post = ({post}) => {
  const[like,setLike]=useState(post.like)
  const[isLiked,setIsLiked]=useState(false)

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="social__post">
    <div className="social__postWrapper">
        <div className="social__postTop">
            <div className="social__postTopLeft">
              <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="social__postProfileImg" />
              <span className="social__postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
              <span className="social__postDate">{post.date}</span>
            </div>
            <div className="social__postTopRight">
              <MoreVert />
            </div>
        </div>
        <div className="social__postCenter">
        <span className="social__postText">{post?.desc}</span>
        <img className="social__postImg" src={post.photo} alt=""/>
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
