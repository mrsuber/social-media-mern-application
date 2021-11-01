import React,{useState,useEffect,useContext} from 'react'
import './Feed.css'
import {Share,Post} from '../../components'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'

const Feed = ({username}) => {
  const [posts,setPosts]=useState([])
  const {user} = useContext(AuthContext)

  useEffect(()=>{

      const fetchPosts = async () =>{
        const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id)
        // return res.data
        setPosts(res.data)
        // console.log(res)
      }
      fetchPosts()






  },[username,user._id])

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
