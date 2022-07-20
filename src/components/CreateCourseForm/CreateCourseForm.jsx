import React from 'react'
import './CreateCourseForm.css'


//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

//react imports
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

export default function CreateCourseForm() {

    //global var
    let emptyCourseForm = {courseName: "", shortDescription: "", detailedDescription: "", tutorialVideoURL: "", coverImageURL: "", tipsAndTricks: ""}


    //state variables
    const [courseForm, setCourseForm] = useState(emptyCourseForm)


    function handleOnInputChange (evt) {
        setCourseForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    }


    //create onsubmit handler to call apiClient and post new user created course 


    

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1.25, width: '70vw' },
    }}
    noValidate
    autoComplete="off">
        <div className="create-course-form">
            <div className="create-course-title-container">
                <h1 className="create-course-title"><em>Create a New Course</em></h1>
            </div>
            <div className="create-course-form-container">
                <div className="input-container">
                    <TextField
                    className="input-field"
                    label="Course Name"
                    type="text"
                    name="courseName"
                    value = {courseForm.courseName}
                    onChange = {handleOnInputChange}
                    sx={{backgroundColor : 'white'}}
                    variant="filled"
                    />
                </div>
                <div className="input-container">
                    <TextField
                    className="input-field"
                    label="Short Description"
                    type="text"
                    name="shortDescription"
                    multiline={true}
                    rows={2}
                    value = {courseForm.shortDescription}
                    onChange = {handleOnInputChange}
                    sx={{backgroundColor : 'white'}}
                    variant="filled"
                    />
                </div>
                <div className="input-container">
                    <TextField
                    className="input-field"
                    label="Detailed Description"
                    type="text"
                    name="detailedDescription"
                    multiline={true}
                    rows={4}
                    value = {courseForm.detailedDescription}
                    onChange = {handleOnInputChange}
                    sx={{backgroundColor : 'white'}}
                    variant="filled"
                    />
                </div>
                <div className ="medias">
                    <div className="media-input-container">
                        <TextField
                            className="tutorial-video-input-field"
                            label="Tutorial Video URL"
                            type="text"
                            name="tutorialVideoURL"
                            value = {courseForm.tutorialVideoURL}
                            onChange = {handleOnInputChange}
                            sx={{backgroundColor : 'white'}}
                            variant="filled"
                            />
                            <TextField
                            className="cover-image-input-field"
                            label="Cover Image URL"
                            type="text"
                            name="coverImageURL"
                            value = {courseForm.coverImageURL}
                            onChange = {handleOnInputChange}
                            sx={{backgroundColor : 'white'}}
                            variant="filled"
                            />
                    </div>
                </div>
                <div className="input-container">
                    <TextField
                    className="input-field"
                    label="Tips and Tricks"
                    type="text"
                    name="tipsAndTricks"
                    multiline={true}
                    rows={3}
                    value = {courseForm.tipsAndTricks}
                    onChange = {handleOnInputChange}
                    sx={{backgroundColor : 'white'}}
                    variant="filled"
                    />
                </div>
            </div>
            <div className="submit-course-btn-container">
                <Button className="create-course-btn"  variant="contained" size="large" endIcon={<CreateIcon/>}  shrink="false" sx={{ color: 'black', padding: "14px 110px", fontSize: '17px', backgroundColor: 'whitesmoke', ':hover' :{ bgcolor: 'gray', color: 'white'} }} > CREATE</Button>
            </div>
        </div>
    </Box>
  )
}

