import moment from 'moment'
import React from 'react'
import "./TeamGamesCard.css"

function TeamGamesCard(props) {
  return (
    <div className='team-games-card'>
      {props.team ? <><p className='WDL'>{props.team.WDL}</p>
      <img className='opponent-logo' src={props.team.location == "HOME" ? props.team.teams.away.logo : props.team.teams.home.logo} alt="opponent-logo"></img>
      <p className='teams-card-scores'>{props.team.scores.home} - {props.team.scores.away}</p>
      <p className='teams-card-status'>{props.team.WDL} at {props.team.location}</p>
      <p className='opponent-name'>vs {props.team.location == "HOME" ? props.team.teams.away.name : props.team.teams.home.name}</p>
      <p className='teams-card-date'>on {moment(props.team.date).format("MM-DD-YYYY")}</p>
      <p className='team-card-time'>{props.team.status.long}</p></>: null}
      
    </div>
  )
}

export default TeamGamesCard