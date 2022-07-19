import React from 'react'
import "./HomeTeamsCard.css"


// for every team, render a team card to display on the teams grid
function HomeTeamsCard() {
  return (
    <div className='home-teams-card'>
        <img className='team-logo'></img>
        <p className='team-name'>Team Name</p>
    </div>
  )
}

export default HomeTeamsCard