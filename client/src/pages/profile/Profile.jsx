import React,{useState,useEffect} from 'react'
import './Profile.css'
import {Topbar,Sidebar,Feed,Rightbar} from '../../components'
import axios from 'axios'
import {useParams} from 'react-router'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]= useState({})
  const username = useParams().username

  useEffect(()=>{
    const fetchUsers = async () =>{
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUsers()
  },[username])


  return (
    <>
    <Topbar />
    <div className="social__profile">
    <Sidebar />
    <div className="social__profileRight">
    <div className="social__profileRightTop">
    <div className="social__profileCover">
    <img className="social__profileCoverImg" src={user.coverPicture ? PF+user.coverPicture : PF+"noCover.jpg"} alt=""/>
    <img className="social__profileCoverUserImage" src={user.profilePicture? PF+user.profilePicture : PF+"noAvatar.png"} alt=""/>

    </div>
    <div className="social__profileInfo">
    <h4 className="social__profileInfoName">{user.username}</h4>
    <span className="social__profileInfoDesc">{user.desc}</span>
    </div>

    </div>
    <div className="social__profileRightBottom">
    <Feed username={username}/>
    <Rightbar user={user}/>
    </div>

    </div>
    </div>
    </>
  )
}

export default Profile
