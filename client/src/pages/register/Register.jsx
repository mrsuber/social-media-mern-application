import React,{useRef,useContext} from 'react'
import './Register.css'
import {CircularProgress} from "@material-ui/core"
import axios from "axios"
import {useHistory} from 'react-router'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) =>{
      e.preventDefault()
      if(passwordAgain.current.value!==password.current.value){
      password.current.setCustomValidity("Passwords don't match!")
    }else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      }
      try{
         await axios.post("/auth/register",user)
         history.push("/login")
      }catch(error){console.log(error)}
    }

    }



  return (
    <div className="social__register">
    <div className="social__registerWrapper">
      <div className="social__registerLeft">
        <h3 className="social__registerLogo">MSBsocial</h3>
        <span className="social__registerDesc">Connect with friends and the world around you on MSBsocial</span>
      </div>
      <div className="social__registerRight">
        <form className="social__registerBox" onSubmit={handleClick}>
          <input placeholder="username" required ref={username} className="social__registerInput" />
          <input placeholder="Email" required ref={email} type="email" className="social__registerInput" />
          <input placeholder="Password" required ref={password} minLength="6" type="password" className="social__registerInput" />
          <input placeholder="Password Again" required ref={passwordAgain} type="password" className="social__registerInput" />
          <button className="social__registerButton" type="submit">Sign Up</button>
          <button className="social__registerRegisterButton">Log into Account</button>
          </form>
      </div>
    </div>

    </div>
  )
}

export default Register
