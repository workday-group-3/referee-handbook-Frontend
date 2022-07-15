import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'


//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function ProfilePage(props) {




    // replace dummy data with actual user info when backend is setup

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
                    <h3 className="profile-account-creation-date">Joined on 04/03/2002</h3>
                </div>
            </div>
        </div>
        <div className ="profile-page-details-container">
            <div className= "details-title-container">
                <h1 className="details-title"><em>About Me</em></h1>
            </div>
            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 2, width: '45ch', color: 'white' },
    
            }}
            noValidate
            autoComplete="off">
                <div className ="details-container">
                    <div className ="user-detail">
                        <TextField
                        sx={{backgroundColor : 'white'}}
                        className="detail-field"
                        label="Username"
                        type="text"
                        name = "username"
                        value = "dogcage"
                        variant="filled"
                        InputProps={{ readOnly: true }}
                        />
                    </div>
                    <div className ="user-detail-name">
                        <TextField
                        sx={{backgroundColor : 'white'}}
                        className="detail-field"
                        label="First Name"
                        type="text"
                        name = "firstName"
                        value = "Doug"
                        variant="filled"
                        InputProps={{ readOnly: true }}
                        /> 
                        <TextField
                        sx={{backgroundColor : 'white'}}
                        className="detail-field"
                        label="Last Name"
                        type="text"
                        name = "lastName"
                        value = "Case"
                        variant="filled"
                        InputProps={{ readOnly: true }}
                        />
                    </div>
                    <div className ="user-detail">
                        <TextField
                            sx={{backgroundColor : 'white'}}
                            className="detail-field"
                            label="Email"
                            type="email"
                            name = "email"
                            value = "dog@cage.io"
                            variant="filled"
                            InputProps={{ readOnly: true }}
                        />
                    </div>
                </div> 
            </Box>
        </div>

    </div>
  )
}
