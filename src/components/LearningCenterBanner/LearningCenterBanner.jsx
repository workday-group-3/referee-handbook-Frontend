import React from 'react'

//styling and images
import SportsBanner from "../../Images/sports.jpg"
import "./LearningCenterBanner.css"


function LearningCenterBanner() {
  return (
    <div className='learning-center-banner'>
        <img className="sports-img" src="https://images.unsplash.com/photo-1617052068596-9275ece24003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" alt="Sports banner"></img>
    </div>
  )
}

export default LearningCenterBanner