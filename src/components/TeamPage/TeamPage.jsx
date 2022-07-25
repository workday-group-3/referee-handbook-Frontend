import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHomeContext } from '../../contexts/home'
import "./TeamPage.css"

//MUI imports to save time on components, i.e button for user's to follow teams
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// apiClient import to be able to post new user following entry
import apiClient from '../../services/apiClient';
import TeamGamesGrid from '../TeamGamesGrid/TeamGamesGrid';




function TeamPage() {

  const {league, team, loadingTeam, getTeam, loadingStats, getStats, stats, error, setError, getTeamGames} = useHomeContext()
  const {sportName, teamId} = useParams()
  const [followSuccess, setFollowSuccess] = useState(false)

  useEffect(() => {
    getTeam(sportName, teamId)
    getStats(sportName, teamId)
    getTeamGames(sportName, teamId)
  }, [])


  //create onsubmit handler to call apiClient and post new user following entry
  const handleOnFollow = async () => {

    if (!loadingTeam) {
      let followTeam = {teamName: team?.name, teamLogo: team?.logo, teamLeague: league}
      const {data, error} = await apiClient.followTeam(followTeam, sportName, teamId)
      if (error) {
        setError(error)
      }
      if(data){
          setFollowSuccess(true)
      }
    }

  }

  return (
    <div className='team-page'>
      <Button className="create-course-btn"  variant="contained" size="large"  endIcon={<BookmarkIcon/>} onClick={handleOnFollow} shrink="false" sx={{ color: 'black',  height:"6ch", fontSize:"16px", backgroundColor: 'whitesmoke', ':hover' :{ bgcolor: 'gray', color: 'white'} }} >Follow</Button>
      {team == null ? <h3>Loading team...</h3> : <div className='team-page-header'>
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
      <TeamGamesGrid />
      
    </div>
  )
}

export default TeamPage