import React from 'react'
import HomeTeamsCard from '../HomeTeamsCard/HomeTeamsCard'
import "./HomeTeamsGrid.css"

function HomeTeamsGrid() {
  return (
    <div className='home-teams-grid'>
        <h2 className='section-title'>HomeTeamsGrid</h2>
        <div className='grid-teams'>
            <HomeTeamsCard/>
        </div>
    </div>
  )
}

export default HomeTeamsGrid