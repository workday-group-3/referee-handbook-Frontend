import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'



export default function ProfilePage(props) {


  return (
    <div className="profile-page">
        <div className="profile-page-header">
            <div className ="profile-picture-container">
                <img className="profile-picture"src={profilePicturePlaceholder} alt="User profile picture"/>
            </div>
            <div className="user-section">
                <div className="profile-user-info">
                    <h1 className="profile-picture-username"><em>dogcage</em></h1>
                    <h3 className="profile-picture-name">Doug Case</h3>
                    <h3 className="profile-location">Pleasanton, CA</h3>
                    <h3 className="profile-account-creation-date">Joined on 04/06/2001</h3>
                </div>
            </div>
        </div>
        <div className ="profile-page-details-container">
            <div className= "details-title-container">
                <h1 className="details-title"><em>About Me</em></h1>
            </div>
        </div>
    </div>
  )
}
