import React from 'react'
import './CloseFriend.css'
const CloseFriend = ({user}) => {
  return (
    <li className="social__sidebarFriend">
        <img className="social__sidebarFriendImg" src={user.profilePicture} alt=""/>
        <span className="social__sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
