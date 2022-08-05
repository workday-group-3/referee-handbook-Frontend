import React from 'react'
import "./HomePage.css"

// component imports
import HomeBanner from '../HomeBanner/HomeBanner'
import HomeSideNavbar from '../HomeSideNavbar/HomeSideNavbar'
import HomeRecentGames from '../HomeRecentGames/HomeRecentGames'
import HomeTeamsGrid from '../HomeTeamsGrid/HomeTeamsGrid'
import HomeNews from '../HomeNews/HomeNews'
import { useHomeContext } from '../../contexts/home'

function HomePage() {
  const {currentSport} = useHomeContext()
  return (
    <div className={`home-page ${currentSport}-home`}>
      
        <HomeBanner/>
        <div className={`home-content`}>
          <HomeSideNavbar/>
        <HomeTeamsGrid/>
        <HomeRecentGames/>
        <HomeNews/>
        </div>
        
    </div>
  )
}

export default HomePage