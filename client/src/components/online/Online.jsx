import React from 'react'
import './Online.css'
const Online = ({user}) => {
  return (
    <li className="social__rightbarFriend">
      <div className="social__rightbarProfileImgContainer">
        <img className="social__rightbarprofileImg" src={user.profilePicture} alt="" />
        <span className="social__rightbarOnline"></span>
      </div>
      <span className="social__rightbarUsername">{user.username}</span>
    </li>
  )
}

export default Online
