import React from 'react'
import './Footer.css'
import logo from '../../assets/handbook-logo.png'

// mui imports
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LandingImageCarousel() {
    return(
        <div className='footer'>
            <img className="footer-img footer-item" src={logo}></img>
            <div className='overview footer-item'>
                <ul>
                    <li>Overview</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className='contact footer-item'>
                <p>Contact Us</p>
                <div className="icons">
                    <EmailIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <GitHubIcon className='icon'/>
                </div>
            </div>
        </div>
    )

}