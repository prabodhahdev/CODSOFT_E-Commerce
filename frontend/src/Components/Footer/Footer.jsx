import React from 'react'
import './Footer.css'
import logo from '../Assets/laaya-logo.png'
import insta from '../Assets/instagram_icon.png'
import pintrast from '../Assets/pintester_icon.png'
import wapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footerlinks">
        
        <li>Comapany</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={insta} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintrast} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={wapp} alt="" />
        </div>
      </div>
      <div className="footer-copyRight">
        <hr />
        <p>Copyright @2024- All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
