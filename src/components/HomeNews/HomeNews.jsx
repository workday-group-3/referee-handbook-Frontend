import React from 'react'
import "./HomeNews.css"
import axios from 'axios'

// API-KEY
const API_KEY = key

function HomeNews() {

    async function getNews(){
        try{
            let json = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token='+API_KEY+"&limit=3&search=basketball")
        }
    }

  return (
    <div className='home-news'>
        <h2 className='section-title'>HomeNews</h2>
    </div>
  )
} 

export default HomeNews