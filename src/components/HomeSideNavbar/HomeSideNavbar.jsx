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
  const {setCurrentSport, currentSport} = useHomeContext()

  // sets current sport based on selected button
  const handleSetSport = (param)=>{
    setCurrentSport(param)
    console.log(param)
  }

  return (
    <div className='home-side-navbar'>
        <button onClick={()=>handleSetSport("soccer")} className={currentSport == "soccer" ? "active" : null}><SportsSoccerIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("basketball")} className={currentSport == "basketball" ? "active" : null}><SportsBasketballIcon fontSize="large" className="sport-icon" /></button>
        <button onClick={()=>handleSetSport("baseball")} className={currentSport == "baseball" ? "active" : null}><SportsBaseballIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("hockey")} className={currentSport == "hockey" ? "active" : null}><SportsHockeyIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("volleyball")} className={currentSport == "volleyball" ? "active" : null}><SportsVolleyballIcon fontSize="large" className="sport-icon"/></button>
        <button onClick={()=>handleSetSport("rugby")} className={currentSport == "rugby" ? "active" : null}><SportsRugbyIcon fontSize="large" className="sport-icon"/></button>
    </div>
  )
}

export default HomeSideNavbar