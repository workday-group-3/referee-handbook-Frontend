import React from 'react'
import "./HomePage.css"

// component imports
import HomeBanner from '../HomeBanner/HomeBanner'
import HomeSideNavbar from '../HomeSideNavbar/HomeSideNavbar'
import HomeRecentGames from '../HomeRecentGames/HomeRecentGames'
import HomeTeamsGrid from '../HomeTeamsGrid/HomeTeamsGrid'
import HomeNews from '../HomeNews/HomeNews'

function HomePage() {
  return (
    <div className='home-page'>
        <HomeBanner/>
        <HomeSideNavbar/>
        <HomeTeamsGrid/>
        <HomeRecentGames/>
        <HomeNews/>
    </div>
  )
}

export default HomePage