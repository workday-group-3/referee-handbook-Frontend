import React, { useEffect, useState } from 'react'
import "./HomeNews.css"


import HomeNewsCard from '../HomeNewsCard/HomeNewsCard'
import { useHomeContext } from '../../contexts/home'

function HomeNews() {
  const {news, loading} = useHomeContext()

  return (
    <div className='home-news'>
        <h2 className='section-title'>HomeNews</h2>

        {/* if news is still loading, render loading */}
        {loading ? (<h3>Loading news...</h3>) : (

        // for each news article, render a news card
        <div className='news-cards'>       
          {news.map((item) => {
            return (<HomeNewsCard imageUrl={item.image_url} title={item.title} url={item.url} time={item.published_at}/>)
          })}
        </div>)}
    </div>
  )
} 

export default HomeNews