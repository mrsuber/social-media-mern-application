import React from 'react'
import './CloseFriend.css'
const CloseFriend = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="social__sidebarFriend">
        <img className="social__sidebarFriendImg" src={PF+user.profilePicture} alt=""/>
        <span className="social__sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
