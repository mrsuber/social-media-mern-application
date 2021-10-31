import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="social__login">
    <div className="social__loginWrapper">
      <div className="social__loginLeft">
        <h3 className="social__loginLogo">MSBsocial</h3>
        <span className="social__loginDesc">Connect with friends and the world around you on MSBsocial</span>
      </div>
      <div className="social__loginRight">
        <div className="social__loginBox">
          <input placeholder="email"  className="social__loginInput" />
          <input placeholder="password"  className="social__loginInput" />
          <button className="social__loginButton">Log In</button>
          <span className="social__loginForgot">Forgot Password?</span>
          <button className="social__loginRegisterButton">Create a New Account</button>
          </div>
      </div>
    </div>

    </div>
  )
}

export default Login
