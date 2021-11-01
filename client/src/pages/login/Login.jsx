import React, {useRef,useContext} from 'react'
import './Login.css'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import {CircularProgress} from "@material-ui/core"

const Login = () => {
  const email = useRef()
  const password = useRef()
  const {user,isFectching,error,dispatch} = useContext(AuthContext)

  const handleClick = (e) =>{
    e.preventDefault()
    loginCall({email:email.current.value,password:password.current.value},dispatch)

  }




  return (
    <div className="social__login">
    <div className="social__loginWrapper">
      <div className="social__loginLeft">
        <h3 className="social__loginLogo">MSBsocial</h3>
        <span className="social__loginDesc">Connect with friends and the world around you on MSBsocial</span>
      </div>
      <div className="social__loginRight">
        <form className="social__loginBox" onSubmit={handleClick}>

          <input placeholder="Email"  type="email" ref={email} required className="social__loginInput" />
          <input placeholder="Password" type="password" ref={password} required  className="social__loginInput" />
          <button className="social__loginButton" type="submit" disabled={isFectching}>{isFectching ? <CircularProgress color="white" size="20px"/> : "Log In"}</button>
          <span className="social__loginForgot" >Forgot Password?</span>
          <button className="social__loginRegisterButton">
          {isFectching ? <CircularProgress color="white" size="20px"/> : "Create a New Account"}
          </button>
          </form>
      </div>
    </div>

    </div>
  )
}

export default Login
