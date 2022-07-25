import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHomeContext } from '../../contexts/home'
import "./TeamPage.css"

function TeamPage() {

  const {league, team, loadingTeam, getTeam, loadingStats, getStats, stats} = useHomeContext()
  const {sportName, teamId} = useParams()

  useEffect(() => {
    getTeam(sportName, teamId)
    getStats(sportName, teamId)
  }, [])

  console.log(stats)
  return (
    <div className='team-page'>
      {loadingTeam ? <h3>Loading team...</h3> : <div className='team-page-header'>
      <img className='team-page-logo' src={team.logo}></img>
      <h1 className='team-page-name'>{team.name}</h1>
      <h2 className='team-page-league'>{league}</h2>
      </div>}
      {stats == null ? <h3>Loading stats...</h3> : <div className='team-page-stats'>
        <p>Home: {stats.played.home}</p>  
        <p>Away: {stats.played.away}</p>
        <p>Total: {stats.played.all}</p>
        <p>{stats.wins.all.total}W {stats.loses.all.total}L </p>    
      </div>}
      
    </div>
  )
}

export default TeamPage