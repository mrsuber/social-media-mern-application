import React from 'react'
import './Homepage.css'
import {Topbar,Feed,Rightbar,Sidebar} from "../../components"

const Homepage = () => {
  return (

    <>
    <Topbar />
    <div className="social__homecontainer">
    <Sidebar />
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Homepage
