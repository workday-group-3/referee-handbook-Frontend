import React from 'react'
import LearningCenterBanner from '../LearningCenterBanner/LearningCenterBanner'

//Styling
import "./UserCreatedCoursePage.css"

//Components
import LearningSubBanner from '../LearningSubBanner/LearningSubBanner'
import { CenterFocusStrong } from '@mui/icons-material'

function UserCreatedCoursePage() {

    
    let currentCourse = JSON.parse(localStorage.getItem("current_course"))

    return (
        <div className='user-create-course'>
            
            {/* Conditionally render Learning sub banner if the current course is stored locally (purpose: user persistance) */}
            <div className='sub-banner'>
                { currentCourse ? <LearningSubBanner courseName={currentCourse.sport_name} showButtons="true"/> : null} 
            </div>

            {/* Render chunk of user created course content  */}
            <div className='main-user-content'>

                {/* Title and date */}
                <span className='created-by'>
                    <h3 className='cb-username'>Course name - <br/> Created by username</h3>
                    <h3 className='cb-date'>Created on DD/MM/YYYY</h3>
                </span>

                {/* Line separator */}
                <span className='line-break'>
                    <hr style={{
                        height: 1.5,
                        borderColor : '#000000'
                    }}/>
                </span>

                {/* Course content descriptions, both short and long */}
                <section className='short-description'>
                    <p>
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                <section className='long-description'>
                    <p>
                    Long Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue orci sem, ac eleifend ligula sollicitudin sed. Vestibulum venenatis consectetur lorem id fringilla. Phasellus cursus tempor nunc, ut tincidunt ante luctus nec. Aenean porttitor, nulla eget cursus feugiat, arcu mi tempor eros, sed dignissim ante orci vel tellus. Cras maximus mattis justo. Praesent consequat enim sed elit ultricies congue. Suspendisse a ante vel quam semper mollis. Suspendisse potenti. Maecenas et mi volutpat, viverra lacus et, dictum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at lorem id ante fermentum ornare.
                    Long Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue orci sem, ac eleifend ligula sollicitudin sed. Vestibulum venenatis consectetur lorem id fringilla. Phasellus cursus tempor nunc, ut tincidunt ante luctus nec. Aenean porttitor, nulla eget cursus feugiat, arcu mi tempor eros, sed dignissim ante orci vel tellus. Cras maximus mattis justo. Praesent consequat enim sed elit ultricies congue. Suspendisse a ante vel quam semper mollis. Suspendisse potenti. Maecenas et mi volutpat, viverra lacus et, dictum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at lorem id ante fermentum ornare.
                    Long Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue orci sem, ac eleifend ligula sollicitudin sed. Vestibulum venenatis consectetur lorem id fringilla. Phasellus cursus tempor nunc, ut tincidunt ante luctus nec. Aenean porttitor, nulla eget cursus feugiat, arcu mi tempor eros, sed dignissim ante orci vel tellus. Cras maximus mattis justo. Praesent consequat enim sed elit ultricies congue. Suspendisse a ante vel quam semper mollis. Suspendisse potenti. Maecenas et mi volutpat, viverra lacus et, dictum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at lorem id ante fermentum ornare.
                    </p>
                </section>
            </div>

            {/* Renders youtube video onto the screen  */}
            <div className='video-container'>
                <iframe
                    src='https://www.youtube.com/embed/XxPK9utUq5o'
                    width="750"
                    height="400"
                    allowFullScreen
                />{" "}
            </div>
            
            {/* Renders tips and tricks section  */}
            <div className='tips-and-tricks'>

                {/* Title  */}
                <h2 className='tips-and-tricks-title'>{'Tips & Tricks'}</h2>

                {/* Line separator */}
                <span className='line-break'>
                    <hr style={{
                        height: 1.5,
                        borderColor : '#000000'
                    }}/>
                </span>
                
                {/* Tips and tricks text section */}
                <p className='tips-and-tricks-text'>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    •Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    •Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                </p>
            </div>


        </div>
    )
}

export default UserCreatedCoursePage