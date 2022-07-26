import moment from 'moment'
import React from 'react'
import "./TeamGamesCard.css"

function TeamGamesCard(props) {

  // takes the WDL letter, returns the actual word
  function WDLHandler(letter){
    if(letter == "W"){
      return "WIN"
    }
    else if(letter == "L"){
      return "LOSE"
    }
    else{
      return "DRAW"
    }
  }

  return (
    <div className='team-games-card'>
      {props.team ? <><p className={`WDL ${props.team.WDL}`}>{props.team.WDL}</p>
      <div className='teams-card-body'>
        <img className='opponent-logo' src={props.team.location == "HOME" ? props.team.teams.away.logo : props.team.teams.home.logo} alt="opponent-logo"></img>
      <div className='teams-card-content'>
      <div className='header-line'>
        <p className='teams-card-scores'>{props.team.scores.home} - {props.team.scores.away}&nbsp;</p>
      <p className={`teams-card-results result-${props.team.WDL}`}>{WDLHandler(props.team.WDL)}</p>
      <p className='teams-card-location'>&nbsp;at {props.team.location}</p>
      </div>
      
      <p className='opponent-name'>vs {props.team.location == "HOME" ? props.team.teams.away.name : props.team.teams.home.name}</p>
      <p className='teams-card-date'>on {moment(props.team.date).format("MM-DD-YYYY")}</p>
      <p className='team-card-time'>{props.team.status.long}</p></div>
      </div>
      </>: null}
      
      
      
    </div>
  )
}

export default TeamGamesCard