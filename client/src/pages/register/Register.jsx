import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="social__register">
    <div className="social__registerWrapper">
      <div className="social__registerLeft">
        <h3 className="social__registerLogo">MSBsocial</h3>
        <span className="social__registerDesc">Connect with friends and the world around you on MSBsocial</span>
      </div>
      <div className="social__registerRight">
        <div className="social__registerBox">
          <input placeholder="username"  className="social__registerInput" />
          <input placeholder="Email"  className="social__registerInput" />
          <input placeholder="Password"  className="social__registerInput" />
          <input placeholder="Password Again"  className="social__registerInput" />
          <button className="social__registerButton">Sign Up</button>
          <button className="social__registerRegisterButton">Log into Account</button>
          </div>
      </div>
    </div>

    </div>
  )
}

export default Register
