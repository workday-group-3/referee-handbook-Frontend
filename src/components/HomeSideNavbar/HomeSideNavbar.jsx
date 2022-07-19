import React from 'react'
import "./HomeSideNavbar.css"

// mui imports
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import { Button } from '@mui/material';

function HomeSideNavbar() {
  return (
    <div className='home-side-navbar'>
        <SportsSoccerIcon fontSize="large" className="sport-icon"/>
        <SportsBasketballIcon fontSize="large" className="sport-icon"/>
        <SportsBaseballIcon fontSize="large" className="sport-icon"/>
        <SportsHockeyIcon fontSize="large" className="sport-icon"/>
        <SportsVolleyballIcon fontSize="large" className="sport-icon"/>
        <SportsRugbyIcon fontSize="large" className="sport-icon"/>
    </div>
  )
}

export default HomeSideNavbar