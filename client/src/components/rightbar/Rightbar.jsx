import React from 'react'
import './Rightbar.css'
import img from '../../images/gift.png'
import img1 from '../../images/ad.png'
import img2 from '../../images/me.webp'
import {Users} from "../../data/data"
import {Online} from '../../components'


const Rightbar = () => {
  return (
    <div className="social__rightbar">
      <div className="social__rightbarWrapper">
        <div className="social__birthdayContainer">
          <img className="social__birthdatImg" src={img} alt="" />
          <span className="social__birthdayText">
          <b>pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img className="social__rightbarAd" src={img1} alt="" />
        <h4 className="social__rightbarTitle">Online Friends</h4>
        <ul className="social__rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}



        </ul>
      </div>

    </div>
  )
}

export default Rightbar
