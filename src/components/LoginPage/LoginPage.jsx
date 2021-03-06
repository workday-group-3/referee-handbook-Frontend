import React from 'react'
import './LoginPage.css'

//import assets
import logo from '../../assets/handbook-logo.png'


//MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


//react imports
import { Link } from "react-router-dom"

//custom hook
import { useLoginForm } from '../../hooks/useLoginForm'


export default function LoginPage({ message }) {


  const { userLoginForm, error, handleOnInputChange, handleOnSubmitLogin } = useLoginForm()    





  return (

    <div className="login-page">
      <img className = "login-background-image" src="https://images.unsplash.com/photo-1457470572216-1240fac24b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""></img>
      <div className="login-page-box">
        <div className = "login-page-logo">
          <Link to = "/"><img className="login-logo" src={logo} alt="Referee's Handbook logo" /></Link>
        </div>
        
        {message ? <p className ="unauthenticated-error">{message}</p> : null}
        <div className="login-form-container">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1.25, width: '50ch', backgroundColor: 'white' },
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
            <Button className="submit-login-btn"  onClick={handleOnSubmitLogin} variant="contained" size="large" endIcon={<SendIcon/>}  shrink="false" sx={{ color: 'black', backgroundColor: 'white', ':hover' :{ bgcolor: 'gray', color: 'white'} }} >LOGIN</Button>
            {error? <p className ="login-error">{error}</p>: null}
          </div>
        </div>


        {/* add Link tag here to redirect to register page once routes are established in App.jsx */}
        <div className="register-redirect">
          <p className="register-redirect-text">Don't have an account? Sign up <Link className="redirect-link" to ="/register">here</Link></p>
        </div>
      </div>
    </div>

  )
}
