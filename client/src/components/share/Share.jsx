import React from 'react'
import './Share.css'
import img from '../../images/me.webp'
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
const Share = () => {
  return (
    <div className="social__share">
    <div className="social__shareWrapper">
       <div className="social__shareTop">
        <img className="social__shareProfileImg" src={img} alt="" />
        <input className="social__shareInput" placeholder="What's in your mind" />
       </div>
       <hr className="social__shareHr" />
       <div className="social__shareBottom">
        <div className="social__shareOptions">
          <div className="social__shareOption">
          <PermMedia htmlColor="tomato" className="social__shareIcon"/>
            <span className="social__shareOptionText">Photo or Video</span>
          </div>

          <div className="social__shareOption">
          <Label htmlColor="blue" className="social__shareIcon"/>
            <span className="social__shareOptionText">Tag</span>
          </div>

          <div className="social__shareOption">
          <Room htmlColor="green" className="social__shareIcon"/>
            <span className="social__shareOptionText">Location</span>
          </div>

          <div className="social__shareOption">
          <EmojiEmotions htmlColor="goldenrod" className="social__shareIcon"/>
            <span className="social__shareOptionText">Feelings</span>
          </div>
        </div>

        <button className="social__shareButton">Share</button>
       </div>
    </div>

    </div>
  )
}

export default Share
