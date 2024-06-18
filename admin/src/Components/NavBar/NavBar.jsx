import React from 'react'
import './NavBar.css'
import logo from '../../assets/laaya-logo.png'
import navProfile from '../../assets/praboda.jpeg'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=""  className='nav-logo'/>
      <h1>Admin Panel</h1>
      <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default NavBar
