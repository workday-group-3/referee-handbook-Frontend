import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'


//importing mui components to render throughout the page
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';

//importing auth context to render components with user data and check for profile picture placeholder requirements
import { useAuthContext } from "../../contexts/auth"


//importing to be able to pull data for components and keep it in state variable for storage
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


//import for date formatting
import Moment from "moment"


//importing apiClient to call to the backend for retrieving user created courses
import apiClient from '../../services/apiClient';



export default function ProfilePage() {


    //creating state variables to store user created courses after they're pulled from the useEffect hook below
    const [userOwnedCourses, setUserOwnedCourses] = useState([]) 
    const [error, setError] = useState(null)



    //fetching user owned courses to display
    useEffect(() => {
        const fetchUserOwnedCourses = async () => {
          const {data, error} = await apiClient.listUserCoursesByUser()
          if(data){
            console.log("userOwnedCourses", data.userOwnedCourses)
            setUserOwnedCourses(data.userOwnedCourses)
          }
          if(error){
            setError(error)
            console.log(error)
          }
        }
      
        fetchUserOwnedCourses()
      }, [])






    const { user } = useAuthContext()
    console.log("user", user)

    //checking if user has a profile picture, if not use placeholder
    let profilePicture;
    {user.profileImageUrl === null ? profilePicture = profilePicturePlaceholder : profilePicture = user.profileImageUrl}

    

  return (
    <div className="profile-page">
        <div className="profile-page-user">
            <div className="profile-page-header">
                <div className ="profile-picture-container">
                    <img className="profile-picture" src= {profilePicture} alt="User profile picture"/>
                </div>
                <div className="user-section">
                    <div className="profile-user-info">
                        <h1 className="profile-picture-username">@<em>{user.username}</em></h1>
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
                                value = {user.email}
                                variant="filled"
                                InputProps={{ readOnly: true }}
                            />
                        </div>
                    </div> 
                </Box>
            </div>
        </div>
        <div className ="user-courses-container">
            <div className="user-courses-title-container">
                <div className="title-container">
                    <h1 className="user-courses-title"><em>My Created Courses</em></h1>
                </div>
                
            </div>

            {/* condtional rendering to display either users created courses, or message that no courses created */}
            <div className ="user-courses-cards">
                {userOwnedCourses[0] ? userOwnedCourses.map((course) => {

                    return (
                        <div className ="user-course-card-container">
                            <div className="thumbnail-container">
                                <div className="cover-image-category">
                                    <img className ="course-card-cover-image" src={course.course_cover_image_url} alt={`Cover image for ${course.course_title}`}></img>
                                </div>
                                <div className="category-and-date">
                                    <p className="course-card-date-category"><em>{course.sport_name}</em> | Created on {Moment(new Date(course.created_at)).format("MMMM Do, YYYY")}</p>
                                </div>
                            </div>
                            <div className="title-description-container">
                                <h1 className="user-course-card-title"><em>{course.course_title}</em></h1>
                                <p className="user-course-card-description">{course.course_short_description}</p>
                            </div>
                        </div>
                    )
                }) : <h1 className="no-user-courses-message">No courses created, get started <Link  className ="learning-redirect" to ="/learning">here!</Link></h1>}
            </div>
        </div>

    </div>
  )
}


