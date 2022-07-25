import React from 'react'
import { Link } from 'react-router-dom'
import { useHomeContext } from '../../contexts/home'
import "./HomeTeamsCard.css"


// for every team, render a team card to display on the teams grid
function HomeTeamsCard(props) {

  const {currentSport} = useHomeContext()

  return (
    <div className='home-teams-card'>
      <Link to={`${currentSport}/${props.teamId}`}><img className='team-logo' src={props.logo}></img></Link>
      <p className='team-name'>{props.name}</p>
    </div>
  )
}

export default HomeTeamsCard