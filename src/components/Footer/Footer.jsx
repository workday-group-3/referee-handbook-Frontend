import React from 'react'
import './Footer.css'
import logo from '../../assets/handbook-logo.png'

export default function LandingImageCarousel() {
    return(
        <div className='footer'>
            <img className="footer-img" src={logo}></img>
        </div>
    )

}