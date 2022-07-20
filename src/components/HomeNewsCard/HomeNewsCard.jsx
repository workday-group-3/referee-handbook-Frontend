import React, { useEffect, useState } from 'react'
import "./HomeNewsCard.css"
import moment from 'moment'

function HomeNewsCard(props) {

  const [time, setTime] = useState(null)


  // uses moments to render the time depending on when the news was from
  function findTime(){
    let now = new Date()
    let then = new Date(props.time)
    const startTime = moment(then)
    const endTime = moment(now)
    const diff = endTime.diff(startTime)
    const diffDuration = moment.duration(diff);

    if(diffDuration.minutes() < 60){
      setTime(diffDuration.minutes()+" minutes ago")
    }
    else if(diffDuration.hours() < 24){
      setTime(diffDuration.hours() +" hours ago")
    }
    else if(diffDuration.days() == 1){
      setTime(diffDuration.days() + " day ago")
    }
    else{
      setTime(then.toDateString())
    }
  }

  // calculates time difference on load
  useEffect(()=>{
    findTime()
  }, [])

  return (
    <div className='home-news-card'>
      <a href={props.url}>
        <div className='card-grid'>
          <img src={props.imageUrl} className="news-img"></img>
        <h3 className='news-time'>{time}</h3>
        <p className='news-title'>{props.title}</p>
        </div>
        
      </a>
      
    </div>
  )
}

export default HomeNewsCard