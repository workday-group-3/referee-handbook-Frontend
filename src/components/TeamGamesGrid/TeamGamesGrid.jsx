import React, { useEffect } from 'react'
import { useHomeContext } from '../../contexts/home'
import TeamGamesCard from '../TeamGamesCard/TeamGamesCard'
import "./TeamGamesGrid.css"

function TeamGamesGrid() {
  const {teamGames, loadingTeamGames} = useHomeContext()

  return (
    <div className='team-games-grid'>
      {loadingTeamGames ? <h3>Loading most recent games...</h3> :
      <>
        {teamGames.map((item)=> {return <TeamGamesCard team={item}/>})}
      </>}
    </div>
  )
}

export default TeamGamesGrid