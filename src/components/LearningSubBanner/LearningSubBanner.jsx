import React from 'react'

//styling
import "./LearningSubBanner.css"


//routing
import { useNavigate } from "react-router-dom"

// mui imports
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Button } from '@mui/material';

function LearningSubBanner(props) {
    
  const navigate = useNavigate()

  //when the return button is clicked, user is redirected back to the course list page for their chosen sport
  async function handleReturn() { 
    navigate("/learning/:sportName")
  }

  return (
    <div className='learning-sub-banner'>
        <h2>Welcome to the World of <em>{props.courseName}</em></h2>
        {props.showButtons == "true" ? (
            <div className='button-section'>
              <Button onClick={handleReturn}><ArrowBackIosNewRoundedIcon className='button-icon'/></Button>
              <Button><FavoriteBorderRoundedIcon className='button-icon'/></Button>
            </div>) : null}
    </div>
  )
}

export default LearningSubBanner