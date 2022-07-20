import React, { useEffect } from 'react'
import "./HomeSideNavbar.css"

// mui imports
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import { useHomeContext } from '../../contexts/home';

function HomeSideNavbar() {
  const {setCurrentSport, getNews} = useHomeContext()

  const handleSetSport = (param)=>{
    setCurrentSport(param)
    console.log(param)
  }


  return (
    <div className='home-side-navbar'>
        <button onClick={()=>handleSetSport("soccer")}><SportsSoccerIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("basketball")}><SportsBasketballIcon fontSize="large" className="sport-icon" /></button>
        <button onClick={()=>handleSetSport("baseball")}><SportsBaseballIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("hockey")}><SportsHockeyIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("volleyball")}><SportsVolleyballIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("rugby")}><SportsRugbyIcon fontSize="large" className="sport-icon"/></button>
    </div>
  )
}

export default HomeSideNavbar