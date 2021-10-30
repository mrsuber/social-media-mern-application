import React from 'react'
import './Feed.css'
import {Share,Post} from '../../components'
import {Posts} from "../../data/data"
const Feed = () => {

  return (
    <div className="social__feed">
    <div className="social__feedWrapper">
      <Share />
    {Posts.map(post=>(
      <Post
        key={post.id}
        post={post}
       />
    ))}


    </div>

    </div>
  )
}

export default Feed
