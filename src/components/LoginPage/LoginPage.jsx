import React from 'react'
import './LoginPage.css'


//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//react imports
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react"

export default function LoginPage(props) {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '50ch' },
    }}
    noValidate
    autoComplete="off">
    <div className="login-page">
        <div className = "login-page-title">
          Login
        </div>
        <div className="login-form-container">
          <div className="email-input-container">
            <TextField
              className="input-field"
              id="outlined-email-input"
              label="Email"
              type="email"
              />
          </div>
          <div className="password-input-container">
            <TextField
              className="input-field"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"/>
          </div>
          <div className="submit-login-btn-container">
            <Button className="submit-btn" variant="contained" size="large" endIcon={<SendIcon/>}>SUBMIT</Button>
          </div>
        </div>


        {/* add Link tag here to redirect to register page once routes are established in App.jsx */}
        <div className="register-redirect">
          <p>Don't have an account? Register here</p>
        </div>
    </div>
    </Box>
  )
}

