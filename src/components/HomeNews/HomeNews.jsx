import React, { useEffect, useState } from 'react'
import "./HomeNews.css"
import axios from 'axios'

import HomeNewsCard from '../HomeNewsCard/HomeNewsCard'

function HomeNews() {
  const [news, setNews] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY

    async function getNews(){
        try{
          setLoading(true)
          let json = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token='+API_KEY+"&search=NBA+basketball&language=en&sort=published_at&limit=2&categories=sports")
          setNews(json.data.data)
          console.log(json.data.data)
        } catch (error) {
          setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
      getNews()
    }, [])

  return (
    <div className='home-news'>
        <h2 className='section-title'>HomeNews</h2>
        {loading ? (<h3>Loading news...</h3>) : (<div className='news-cards'>
          {news.map((item) => {
            return (<HomeNewsCard imageUrl={item.image_url} title={item.title} url={item.url} time={item.published_at}/>)
          })}
        </div>)}
        

    </div>
  )
} 

export default HomeNews