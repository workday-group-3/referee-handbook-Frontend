import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHomeContext } from '../../contexts/home'
import "./TeamPage.css"

function TeamPage() {

  const {league, team, loadingTeam, getTeam} = useHomeContext()
  const {sportName, teamId} = useParams()

  useEffect(() => {
    getTeam(teamId)
  }, [])

  console.log(team)

  return (
    <div className='team-page'>
      {loadingTeam ? <h3>Loading team...</h3> : <>
      <img className='team-page-logo' src={team.logo}></img>
      <h1 className='team-page-name'>{team.name}</h1>
      <h2 className='team-page-league'>{league}</h2>
      </>}
      
    </div>
  )
}

export default TeamPage