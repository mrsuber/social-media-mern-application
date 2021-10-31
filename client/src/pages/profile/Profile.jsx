import React from 'react'
import './Profile.css'
import {Topbar,Sidebar,Feed,Rightbar} from '../../components'
const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="social__profile">
    <Sidebar />
    <div className="social__profileRight">
    <div className="social__profileRightTop">
    <div className="social__profileCover">
    <img className="social__profileCoverImg" src="assets/post/3.jpeg" alt=""/>
    <img className="social__profileCoverUserImage" src="assets/person/7.jpeg" alt=""/>

    </div>
    <div className="social__profileInfo">
    <h4 className="social__profileInfoName">safak kakai</h4>
    <span className="social__profileInfoDesc">Hello my friends!</span>
    </div>

    </div>
    <div className="social__profileRightBottom">
    <Feed/>
    <Rightbar profile/>
    </div>

    </div>
    </div>
    </>
  )
}

export default Profile
