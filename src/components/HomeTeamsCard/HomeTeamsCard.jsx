import React from 'react'
import "./HomeTeamsCard.css"


// for every team, render a team card to display on the teams grid
function HomeTeamsCard(props) {

  return (
    <div className='home-teams-card'>
        <img className='team-logo' src={props.logo}></img>
        <p className='team-name'>{props.name}</p>
    </div>
  )
}

export default HomeTeamsCard