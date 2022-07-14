import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'



export default function ProfilePage(props) {


  return (
    <div className="profile-page">
        <div className="profile-page-header">
            <div className="user-section">
                <div className ="profile-picture-container">
                    <img className="profile-picture"src={profilePicturePlaceholder} alt="User profile picture"/>
                </div>
                <div className="profile-user-info">
                    <h1 className="profile-picture-username">dogcage</h1>
                    <h3 className="profile-picture-name">Doug Case</h3>
                    <h3 className="profile-location">Pleasanton, CA</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
