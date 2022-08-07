import React from 'react'
import './ProfilePage.css'
import profilePicturePlaceholder from '../../assets/profile-picture-placeholder.jpg'

import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import DropDownCreate from '../DropDownCreate/DropDownCreate';

//importing mui components to render throughout the page
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



//importing auth context to render components with user data and check for profile picture placeholder requirements
import { useAuthContext } from "../../contexts/auth"

//importing to be able to pull data for components and keep it in state variable for storage
import { useState, useEffect } from "react"

//import for date formatting
import Moment from "moment"

//importing apiClient to call to the backend for retrieving user created courses
import apiClient from '../../services/apiClient';

import { Link, useParams } from "react-router-dom"
import moment from 'moment';

export default function ProfilePage(props) {

    
    //creating state variables to store user created courses after they're pulled from the useEffect hook below
    const [userOwnedCourses, setUserOwnedCourses] = useState([]) 
    const [userProfile, setUserProfile]= useState([])
    const [userTeams, setUserTeams] = useState([])
    const [userRatings, setUserRatings] = useState([])
    const [error, setError] = useState(null)



    let avgRatingReceived = 0;
    
    const { username } = useParams();

    //fetching user owned courses to display
    useEffect(() => {
        const fetchUserOwnedObjects = async () => {
            
            //Renders favorites and courses based on whose profile page is being viewed
            const {data, error} = username == undefined ? 
                await apiClient.listUserOwnedObjectsByUser() :
                await apiClient.listUserOwnedObjectForOtherUsers(username)
            if(data){
                setUserOwnedCourses(data.userCourses)
                setUserTeams(data.userTeams)
                setUserProfile(data.userInformation)
                setUserRatings(data.userReceivedRatings)
            }
            if(error){
                setError(error)
            }
        }
        fetchUserOwnedObjects()
      }, [ ])



    //function to set the current beginner course in local storage
    async function setCourseHandler(userCourse) {

        const includeUsername = {
            ...userCourse,
            username: user.username
        }
        localStorage.setItem("current_user_course", JSON.stringify(includeUsername)) 
    }

    const { user } = useAuthContext()
    const currentUser = username == undefined ? user : userProfile
    
    // summing up all of user's received ratings to display in stat table
    userRatings?.map((rating) => {
        avgRatingReceived = avgRatingReceived + rating.rating
    })

    //checking if user has a profile picture, if not use placeholder
    let profilePicture;
    if (currentUser.first_name != undefined){
        currentUser["firstName"] = currentUser["first_name"]
        currentUser["lastName"] = currentUser["last_name"]
        currentUser["profileImageUrl"] = currentUser["profile_image_url"]

        delete currentUser["first_name"]
        delete currentUser["last_name"]
        delete currentUser["profile_image_url"]
    }
    
    if (username !== undefined) {
        {currentUser.profileImageUrl === null ? profilePicture = profilePicturePlaceholder : profilePicture = currentUser.profileImageUrl}
    } else {
        {user.profileImageUrl === null ? profilePicture = profilePicturePlaceholder : profilePicture = user.profileImageUrl}
    }

    
    console.log(currentUser)


    var today = new Date();
    let startAccountDate = Moment(new Date(currentUser.createdAt)).format("YYYY-MM-DD")
    var todaysDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
     

    const currentDate = moment(new Date(todaysDate));
    const returnDate = moment(new Date(startAccountDate));
    var days_diff = currentDate.diff(returnDate,'days');
    
    console.log(days_diff)

    function createData(name, value) {
        return { name, value };
      }
      
      const rows = [
        createData('Courses Made', userOwnedCourses?.length),
        createData('Ratings Received', userRatings?.length),
        // error handling for scenario where both variables are zero, cannot divide by 0
        createData('Average Rating Received',  avgRatingReceived === 0 && userRatings?.length === 0 ? `0/5` : `${avgRatingReceived / userRatings?.length}/5`),
        createData('Followed Teams', userTeams?.length),
        createData('Account Lifespan', days_diff + (days_diff === 1 ? " Day" : " Days")),
      ];






      
  return (
    <div className="profile-page">
        <div className="profile-page-user">
            <div className="profile-page-header">
                <div className ="profile-picture-container">
                    <img className="profile-picture" src= {profilePicture} onError={evt => { evt.currentTarget.src = "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" }} alt="User profile picture"/>
                </div>
                <div className="user-section">
                    <div className="profile-user-info">
                        <h1 className="profile-picture-username">@<em>{currentUser.username}</em></h1>
                        <h3 className="profile-picture-name"><AccountCircleIcon className ="profile-icon" color = "grey" />{currentUser.fullName}</h3>
                        <h3 className="profile-location"><LocationOnSharpIcon className ="profile-icon" color ="grey" />{currentUser.location}</h3>
                        <h3 className="profile-account-creation-date"><ScheduleSharpIcon className="profile-icon" color ="grey"/> Joined on {Moment(new Date(currentUser.createdAt)).format("MMMM Do, YYYY")}</h3> 
                    </div>
                </div>
            </div>
            <div className ="profile-page-details-container">
                <div className= "details-title-container">
                    <h1 className="details-title">Stat Sheet</h1>
                </div>
                <div className="stats-container">
                    <TableContainer sx={{ width: "100%"}} component={Paper}>
                        <Table sx={{  backgroundColor: "#D9D9D9" }} aria-label="simple table">
                            <TableHead>
                            <TableRow>

                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                
                                <TableCell align="right">{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className="user-teams-container">
                <div className="user-teams-title-container">
                    <h1 className="user-teams-title">My Followed Teams</h1>
                </div>


            {/* condtional rendering to display either user's followed teams, or message that user is not following any teams */}

                <div className="user-followed-team-cards">
                    {userTeams[0] ? userTeams.map((team) => { 
                       return(
                        <Link className="followed-team-redirect"to= {`/sports/${team.team_sport_name}/${team.team_id}`}>
                            <div className="user-followed-team-card">
                                <div className="team-logo-container">
                                    <img src ={team.team_logo} className="profile-team-logo"></img>
                                </div>
                                <div className="team-information">
                                    <div className="team-name-container">
                                        <h1 className="team-name">{team.team_name}</h1>
                                    </div>
                                    <div className="team-content-container">
                                        <p className="team-content">{team.team_sport_name} | {team.team_league} | Following since {Moment(new Date(team.following_at)).format("MMMM Do, YYYY")}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                       ) 

                    }) : <h1 className="no-teams-error-msg"> Not following any teams currently, browse different sports teams <Link  className ="learning-redirect" to ="/sports">here</Link></h1>}

                </div>

            </div>
        </div>
   
            <div className ="user-courses-container">

                <div className="title-container">
                    <h1 className="user-courses-title">My Created Courses</h1>
                </div>

                {/* condtional rendering to display either users created courses, or message that no courses created */}
                <div className ="user-courses-cards">
                    {userOwnedCourses[0] ? userOwnedCourses.map((course) => {
                        return (
                            <div className="individual-course" key={course}>
                                {/* when a user clicks on a course, it sets it to local storage and redirects them to that course page properly */}
                                <Link className ="user-created-course-redirect-link" to={`/learning/${course.sport_name}/userCreated/${course.courseId}`}>
                                    
                                    <div onClick={() => setCourseHandler(course)} className ="user-course-card-container">
                                        <div className="thumbnail-container">
                                            <div className="cover-image-category">
                                            <img className ="course-card-cover-image" src={course.course_cover_image_url} onError={e => { e.currentTarget.src = "https://ca.ingrammicro.com/_layouts/images/CSDefaultSite/common/no-image-lg.png"; }} alt={`Cover image for ${course.course_title}`}></img>
                                            <div className="category-and-date">
                                                <p className="course-card-date-category">{course.sport_name} | Created on {Moment(new Date(course.created_at)).format("MMMM Do, YYYY")}</p>
                                            </div>
                                        </div>      
                                    </div>
                                    <div className="title-description-container">
                                            <div className="user-course-card-title-container"><h1 className="user-course-card-title">{course.course_title}</h1></div>
                                            <div className="user-course-card-description-container"><p className="user-course-card-description">{course.course_short_description}</p></div>
                                        </div>
                                    </div>
                                </Link>

                                <div className='delete-course-container'>
                                    <ConfirmDelete setUserOwnedCourses={setUserOwnedCourses} course={course}/>
                                </div>

                    
                            </div>
                        )
                    }) : 
                        // Only allow a user to create a course if they're logged in
                        <div className='drop-down'> 
                            {/* <h1 className="no-user-courses-message">No courses created, get started <Link  className ="learning-redirect" to ="/learning">here!</Link></h1> */}
                            <h1 className="no-user-courses-message">No courses created yet. Create one below!</h1>
                            <DropDownCreate/>
                        </div>
                }
            </div>
        </div>
    </div>

  )
}