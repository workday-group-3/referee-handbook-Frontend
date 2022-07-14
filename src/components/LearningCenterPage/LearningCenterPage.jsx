//Necessary dependencies
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import LearningCenterBanner from '../LearningCenterBanner/LearningCenterBanner'
import LearningCenterCard from '../LearningCenterCard/LearningCenterCard'
//Styling
import "./LearningCenterPage.css"

function LearningCenterPage() {

  //for now, we'll be saving the sport names displayed in the learning center
  //in the following use state
  const [sports, setSports] = useState(["Soccer", "Basketball", "Tennis", "Hockey", "Ping Pong", "Badminton"])

  return (
    <div className='learning-center-page'>

        <h1>Learning center</h1>

        {/* Display the learning center's banner */}
        <LearningCenterBanner/>

        {/* Creates an an image and title card for each sport in the "sports" state variable */}
        {sports.map((item) => {return (
          <Link to={`/${item}`}>
            <LearningCenterCard sport={item}/>
          </Link>
        )})}

    </div>
  )
}

export default LearningCenterPage