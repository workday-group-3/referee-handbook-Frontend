import React from 'react'
import { useHomeContext } from '../../contexts/home'
import HomeTeamsCard from '../HomeTeamsCard/HomeTeamsCard'
import "./HomeTeamsGrid.css"

function HomeTeamsGrid() {

  const {teams, loading} = useHomeContext()
  console.log(teams)

  return (
    <div className='home-teams-grid'>
        <h2 className='section-title'>HomeTeamsGrid</h2>
        {/* if teams are still loading, render loading */}
        {loading ? (<h3>Loading teams...</h3>) : (

        // for each team, render a team card
        <div className='grid-teams'>
            {teams.map((item) => {return <HomeTeamsCard teamId={item.team.id} name={item.team.name} logo={item.team.logo}/>})}
        </div>)}
    </div>
  )
}

export default HomeTeamsGrid