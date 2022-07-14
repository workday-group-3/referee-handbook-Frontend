import React from 'react'
import './RegisterPage.css'



//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//react imports
import { useState } from "react"



export default function RegisterPage(props) {


  //global variables
  let emptyRegisterForm = {email: "", username: "", location: "", firstName: "", lastName: "",  password: "", confirmPassword: ""}

  //state variables
  const [userRegisterForm, setUserRegisterForm ] = useState(emptyRegisterForm)


  //register form handler
  function handleOnInputChange (evt) {
    setUserRegisterForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    console.log("userLoginForm", userRegisterForm)
  }

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '50ch' },
    }}
    noValidate
    autoComplete="off">
      <div className="register-page">
        <div className = "register-page-title">
          Register
        </div>
      </div>
      <div className="register-form-container">
        <div className="email-input-container">
          <TextField
            className="input-field"
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            onChange={handleOnInputChange}
            />
        </div>
        <div className="username-input-container">
          <TextField
            className="input-field"
            id="outlined-username-input"
            label="Username"
            type="text"
            name="username"
            onChange={handleOnInputChange}
            />
        </div>
        <div className="location-input-container">
          <TextField
            className="input-field"
            id="outlined-location-input"
            label="Location"
            type="text"
            name="location"
            onChange={handleOnInputChange}
            />
        </div>
        <div className="name-input-container">
          <TextField
            className="first-name-input-field"
            id="outlined-first-name-input"
            label="First Name"
            type="text"
            name="firstName"
            onChange={handleOnInputChange}
            />
            <TextField
            className="last-name-input-field"
            id="outlined-last-name-input"
            label="Last Name"
            type="text"
            name="lastName"
            onChange={handleOnInputChange}
            />
        </div>
        <div className="password-input-container">
          <TextField
            className="input-field"
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={handleOnInputChange}
            autoComplete="current-password"/>
          </div>
          <div className="confirm-password-input-container">
            <TextField
              className="input-field"
              id="outlined-confirm-password-input"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleOnInputChange}
              autoComplete="current-password"/>
          </div>
          <div className="submit-register-btn-container">
            <Button className="submit-register-btn" variant="contained" size="large" endIcon={<SendIcon/>}>SUBMIT</Button>
          </div>


        {/* add Link tag here to redirect to register page once routes are established in App.jsx */}
        <div className="login-redirect">
          <p>Already have an account? Login here</p>
        </div>

      </div>
    </Box>
  )
}

