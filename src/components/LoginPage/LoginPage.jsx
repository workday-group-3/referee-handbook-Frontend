import React from 'react'
import './LoginPage.css'
import logo from '../../assets/handbook-logo.png'
import backgroundImage from '../../assets/login-page-img.jpg'

//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


//react imports
import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginPage(props) {


  //global variables
  let emptyLoginForm = {email: "", password: ""}

  //state variables
  const [userLoginForm, setUserLoginForm] = useState(emptyLoginForm)

  //login form handler
  function handleOnInputChange (evt) {
    setUserLoginForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    console.log("userLoginForm", userLoginForm)
  }


  //create onSubmit handler here for login once backend is setup





  return (

    <div className="login-page">
      <img className = "login-background-image" src="https://images.unsplash.com/photo-1457470572216-1240fac24b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""></img>
      <div className="login-page-box">
        <div className = "login-page-logo">
          <img className="login-logo" src={logo} alt="Referee's Handbook logo" />
        </div>

        <div className="login-form-container">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch', backgroundColor: 'white' },
          }}
          noValidate
          autoComplete="off">
          <div className="email-input-container">
            <TextField
              className="input-field"
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              color="primary"
              variant="filled"
              value = {userLoginForm.email}
              onChange={handleOnInputChange}
              />
          </div>
          <div className="password-input-container">

            
            <TextField
              sx={{backgroundColor : 'white'}}
              className="input-field"
              id="outlined-password-input"
              label="Password"
              type="password"
              name = "password"
              value = {userLoginForm.password}
              onChange={handleOnInputChange}
              variant="filled"
              autoComplete="current-password"
              />
          </div>
          </Box>
          <div className="submit-login-btn-container">
            <Button className="submit-login-btn" variant="contained" size="large" endIcon={<SendIcon/>}  onClick= {() => {console.log("Click")}}shrink="false" sx={{ color: 'black', backgroundColor: 'white', ':hover' :{ bgcolor: 'gray', color: 'white'} }} >LOGIN</Button>
          </div>
        </div>


        {/* add Link tag here to redirect to register page once routes are established in App.jsx */}
        <div className="register-redirect">
          <p >Don't have an account? Sign up <Link className="redirect-link" to ="/register">here</Link></p>
        </div>
      </div>
    </div>

  )
}
