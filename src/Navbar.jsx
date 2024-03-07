import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>

      <div className="overtop"></div>

      <div className="navi">
        
        <a className="home" href="/">Home</a>
        <a className="crop" href="/crop">crop</a>

        <a className="weather" href="/weather">weather</a>

        <a href="/govt" className="weather">Government Schemes</a>
        <a className="weather" href="/login">login</a>
        <a className="weather" href="/sign">sign-in</a>

      </div>


    </>
  )
}

export default Navbar