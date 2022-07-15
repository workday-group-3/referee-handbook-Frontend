import React from 'react'
import { useState } from 'react'
import './LandingImageCarousel.css'

// mui imports
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function LandingImageCarousel() {
    const [slide, setSlide] = useState({slideNum: 1, image: "https://images.pexels.com/photos/209961/pexels-photo-209961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description:"Learn about the history, rules and regulations of your favorite sports through a short course."})

    const handleOnclick = async () => {
      // changes slide content on click
      if(slide.slideNum == 4){
        setSlide({slideNum: 1, image: "https://images.pexels.com/photos/209961/pexels-photo-209961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description:"Learn about the history, rules and regulations of your favorite sports through a short course."})
      }
      else if(slide.slideNum == 1){
        setSlide({slideNum: 2, image: "https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description:"Follow your favorite teams and keep up with their recent games and stats."})
      }
      else if(slide.slideNum == 2){
        setSlide({slideNum: 3, image: "https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description: "Keep up to date with the newest strategies and tips in different sport communities."})
      }
      else{
        setSlide({slideNum: 4, image: "https://images.pexels.com/photos/2190115/pexels-photo-2190115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", description: "Share your passion and knowledge with other players and fans by creating a course."})
      }
    }

    return(
      <div className='landing-image-carousel'>
          <div className='slide-container'>
            <div className='slide'>
              <img className='slide-img slide-item' src={slide.image}></img>
              <p className='slide-description slide-item'>{slide.description}</p>
              <button className='forward-btn slide-item' onClick={handleOnclick}><ArrowForwardIcon/></button>
              <div className='dots slide-item'>
                <FiberManualRecordIcon className={slide.slideNum == 1 ? "active" : null}/>
                <FiberManualRecordIcon className={slide.slideNum == 2 ? "active" : null}/>
                <FiberManualRecordIcon className={slide.slideNum == 3 ? "active" : null}/>
                <FiberManualRecordIcon className={slide.slideNum == 4 ? "active" : null}/>
              </div>
            </div>
          </div>
      </div>
    ) 
  }
  
  