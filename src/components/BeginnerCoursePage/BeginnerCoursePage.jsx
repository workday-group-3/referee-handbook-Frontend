import React from 'react'

import { useNavigate } from "react-router-dom"
import { useLearningContext } from '../../contexts/learning'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'

import "./BeginnerCoursePage.css"
import flagImg from "../../assets/flag.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function BeginnerCoursePage() {
    
    // pulling current course from local storage, parsing the string into json
    let currentCourse = JSON.parse(localStorage.getItem("current_course"))
    
    // breaks up rules into bullets. 
    const formattedRules = currentCourse ? currentCourse.beginner_rules.replaceAll("{b}", "•") : null

    // Splits the rules into an array of substrings based on the "{b}" characters. 
    const splitRules = currentCourse ? currentCourse.beginner_rules.split("{b}") : null
    
    return (
        <div className='beginner-course-page'>
            { currentCourse ? <LearningSubBanner courseName={currentCourse.sport_name} showButtons="true"/> : null}

            <div className='timeline'>
                { currentCourse ? <iframe src={currentCourse.beginner_history_timeline} width='100%'    allowFullScreen frameBorder='0'></iframe> : null}                  
            </div>

            {currentCourse ? 
            <div>
                <div className='video-and-diagram-section'>

                    <div className='video'>
                        <h1 className="video-header">Tutorial Video</h1>
                        <iframe
                            src={currentCourse.beginner_tutorial_video_url}
                            width="500"
                            height="300"
                            allowFullScreen
                        />{" "}
                    </div>

                    <div className='diagram'>
                        <h1 className="diagram-header">Diagram</h1>
                        <img className="diagram-img" src={currentCourse.beginner_field_diagram_url} alt="beginner field diagram" />
                    </div>
                    
                </div>
                
                {/* Rules slide deck. For each rule, we create a slide to be displayed in the carousel */}
                <div className='rules-section'>
                    <div className='flag'><img src={flagImg} alt="flag image" className='flag-img'></img></div>
                    <h1 className ="rules-section-title"><em>Rules</em></h1>
                    <p className='rules-paragraph'>{formattedRules}</p>
                </div>

                <div className='rules-carousel'>
                    {splitRules ? 
                        
                        // configure properties of the rules carousel 
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="testingClassName"
                        > 
                        
                        {/* Render a slide for each rule of the current sport  */}
                        {splitRules.map((rule, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='flag'><img src={flagImg} alt="flag image" className='flag-img'></img></div>
                                    <h3>{splitRules[index+1]}</h3>
                                </SwiperSlide>
                            )
                        })}
                        
                        </Swiper>
                    :null}

                </div>
            
            </div> : null}

            
        </div>
    )
}
export default BeginnerCoursePage
