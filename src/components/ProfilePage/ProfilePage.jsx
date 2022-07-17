import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'


//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';

//import contexts
import { useAuthContext } from "../../contexts/auth"


//import for date formatting
import Moment from "moment"




export default function ProfilePage() {

    const { user } = useAuthContext()
    console.log("user", user)

    //checking if user has a profile picture, if not use placeholder
    let profilePicture;
    {user.profileImageUrl === "" ? profilePicture = profilePicturePlaceholder : profilePicture = user.profileImageUrl}

    

  return (
    <div className="profile-page">
        <div className="profile-page-header">
            <div className ="profile-picture-container">
                <img className="profile-picture"src={profilePicture} alt="User profile picture"/>
            </div>
            <div className="user-section">
                <div className="profile-user-info">
                    <h1 className="profile-picture-username"><em>{user.username}</em></h1>
                    <h3 className="profile-picture-name"><AccountCircleIcon className ="profile-icon" color = "grey" />{user.firstName + " " + user.lastName}</h3>
                    <h3 className="profile-location"><LocationOnSharpIcon className ="profile-icon" color ="grey" />{user.location}</h3>
                    <h3 className="profile-account-creation-date"><ScheduleSharpIcon className="profile-icon" color ="grey"/> Joined on {Moment(new Date(user.createdAt)).format("MMMM Do, YYYY")}</h3> 
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
                        value = {user.username}
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
                        value = {user.firstName}
                        variant="filled"
                        InputProps={{ readOnly: true }}
                        /> 
                        <TextField
                        sx={{backgroundColor : 'white'}}
                        className="detail-field"
                        label="Last Name"
                        type="text"
                        name = "lastName"
                        value = {user.lastName}
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
                            value = {user.username}
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
