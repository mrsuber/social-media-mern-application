import React,{useContext,useRef,useState} from 'react'
import './Share.css'
import img from '../../images/me.webp'
import {PermMedia,Label,Room,EmojiEmotions,Cancel} from "@material-ui/icons"
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const {user} = useContext(AuthContext)
  const desc = useRef()
  const [file,setFile]=useState(null)
  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      userId:user._id,
      desc:desc.current.value
    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file",file)
      // data.append("name",fileName)


      try{
        const res = await axios.post("/upload",data)

        newPost.img = res.data;
      }catch(err){console.log(err)}
      try{
        await axios.post("/posts",newPost)
        window.location.reload()
      }catch(err){

      }
    }else{
      try{
        await axios.post("/posts",newPost)
        window.location.reload()
      }catch(err){

      }
    }

  }
  return (
    <div className="social__share">
    <div className="social__shareWrapper">
       <div className="social__shareTop">
        <img className="social__shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"noAvatar.png"} alt="" />
        <input className="social__shareInput" placeholder={"What's in your mind " +user.username+"?"} ref={desc} />
       </div>
       <hr className="social__shareHr" />

       {file && (
         <div className="sociail__shareImgContainer">
          <img className="social__shareImg" src={URL.createObjectURL(file)} alt="" />
          <Cancel className="social__shareCancelImg" onClick={()=>setFile(null)}/>
         </div>
       )}
       <form className="social__shareBottom" onSubmit={submitHandler}>
        <div className="social__shareOptions">
          <label htmlFor="file" className="social__shareOption">
          <PermMedia htmlColor="tomato" className="social__shareIcon"/>
            <span className="social__shareOptionText">Photo or Video</span>
            <input type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} />
          </label>

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

        <button className="social__shareButton" type="submit">Share</button>
       </form>
    </div>

    </div>
  )
}

export default Share
