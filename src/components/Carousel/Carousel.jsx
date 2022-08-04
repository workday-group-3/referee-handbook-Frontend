// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css"

// import swiper specific modules 
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Carousel() {
  return (
    <div className="landing-carousel">
        {/* Configure swiper widget's properties */}
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
           autoplay={{delay: 5000, disableOnInteraction:false,}}
        >
        
        {/* Create slides */}
        
        <SwiperSlide  data-swiper-autoplay="2000" >
            <div className="image-container">
                <img src="https://images.pexels.com/photos/209961/pexels-photo-209961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image pic'></img>
            </div>
            <h4>Learn about the history, rules and regulations of your favorite sports through a short course.</h4>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" >
            <div className="image-container">
                <img src="https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image pic'></img>
            </div>
            <h4>Follow your favorite teams and keep up with their recent games and stats.</h4>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" >
            <div className="image-container">
                <img src="https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image pic'></img>
            </div>
            <h4>Keep up to date with the newest strategies and tips in different sport communities.</h4>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" >
            <div className="image-container">
                <img src="https://images.pexels.com/photos/2190115/pexels-photo-2190115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image pic'></img>
            </div>
            <h4>Share your passion and knowledge with other players and fans by creating a course.</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
