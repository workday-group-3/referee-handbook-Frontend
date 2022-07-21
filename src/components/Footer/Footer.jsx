import React from 'react'
import './Footer.css'
import logo from '../../assets/handbook-logo.png'

// mui imports
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

//importing link to allow users to redirect to landing page through logo in footer
import { Link } from "react-router-dom" 

export default function Footer() {
    return(
        <div className="footer">
            <div className="top-half-container">
                <div className="logo-container">
                    <Link to="/"><img className="footer-logo" src={logo} alt="Referee's Handbook logo"></img></Link>
                </div>
                <div className="footer-header">
                    <h4 className ="footer-title">About Us</h4>
                    <p className="footer-body">This website was created by three interns: Aileen Ji, Ernesto Enriquez, and Travis Navarro. This is our Capstone Project for CodePath's Summer 2022 Internship for Tech Excellence program, partnered with Workday.</p>
                </div>
                <div className="footer-header">
                    <h4 className ="footer-title">Socials</h4>
                    <p className ="footer-body">Facebook</p>
                    <p className ="footer-body">Twitter</p>
                    <p className ="footer-body">LinkedIn</p>
                    <p className ="footer-body">Instagram</p>
                    <p className ="footer-body">Youtube</p>
                </div>
                
            </div>
            <div className ="bottom-half-container">
                <ul className = "icon-list">
                    <li className = "icon-item">
                    <a className ="github-anchor" href="https://github.com/workday-group-3"><GitHubIcon sx={{ fontSize: 30 }}/></a>
                    </li>
                    <li className = "icon-item">
                        <LinkedInIcon sx={{ fontSize: 30 }}/>
                    </li>
                    <li className = "icon-item">
                        <EmailIcon sx={{ fontSize: 30 }}/>
                    </li>
                    <li className = "icon-item">
                        <LocalPhoneIcon sx={{ fontSize: 30 }}/>
                    </li>
                </ul>
            </div>
        </div>
    )

}