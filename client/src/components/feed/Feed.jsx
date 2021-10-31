import React,{useState,useEffect} from 'react'
import './Feed.css'
import {Share,Post} from '../../components'
import axios from 'axios'

const Feed = ({username}) => {
  const [posts,setPosts]=useState([])

  useEffect(()=>{

      const fetchPosts = async () =>{
        const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/617957db3e6f0dd3587bbae8")
        // return res.data
        setPosts(res.data)
        // console.log(res)
      }
      fetchPosts()

    




  },[username])

  return (

    <div className="social__feed">
    <div className="social__feedWrapper">
      <Share />
      {posts.map(post=>(
        <Post
          key={post._id}
          post={post}
         />
      ))}


    </div>

    </div>
  )
}

export default Feed
