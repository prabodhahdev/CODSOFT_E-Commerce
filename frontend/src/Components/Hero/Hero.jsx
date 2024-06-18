import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/HeroBg.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroLeft">
            <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="handIcon">
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
            <div className="heroLatestBtn">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
        <div className="heroRight">
            <img src={heroImg} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
