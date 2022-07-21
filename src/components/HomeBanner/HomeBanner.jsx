import React from 'react'
import "./HomeBanner.css"
import { useHomeContext } from '../../contexts/home'

const bannerUrls = {
  "soccer": "https://images.pexels.com/photos/12486370/pexels-photo-12486370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "basketball": "https://images.pexels.com/photos/1293265/pexels-photo-1293265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "baseball": "https://images.pexels.com/photos/11901406/pexels-photo-11901406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "hockey": "https://images.pexels.com/photos/8973426/pexels-photo-8973426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "volleyball": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Beach_volleyball_%284701437938%29.jpg",
  "rugby": "https://images.pexels.com/photos/2207/red-people-outside-sport.jpg"
}

function HomeBanner() {

  const {currentSport} = useHomeContext()

  return (
    <div className='home-banner'>
        <img className="banner-img" src={bannerUrls[currentSport]} alt="Home page banner"></img>
    </div>
  )
}

export default HomeBanner