import React, { useEffect, useState } from 'react'
import "./HomeNews.css"
import axios from 'axios'

// API-KEY
const API_KEY = key

function HomeNews() {
  const [news, setNews] = useState([])
  const [error, setError] = useState(null)

    async function getNews(){
        try{
          let json = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token='+API_KEY+"&limit=3&search=basketball")
          setNews(json.data)
        } catch (error) {
          setError(error)
        }
    }

    useEffect(() => {
      getNews()
    }, [])

  return (
    <div className='home-news'>
        <h2 className='section-title'>HomeNews</h2>
    </div>
  )
} 

export default HomeNews