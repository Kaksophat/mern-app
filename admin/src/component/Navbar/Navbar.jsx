import React from 'react'
import NavLogo from "../../assets/nav-logo.svg"
import NavProfile from "../../assets/nav-profile.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={NavLogo} alt="" className="nav-logo" />
        <img src={NavProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar