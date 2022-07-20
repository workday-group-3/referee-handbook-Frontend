import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'

const HomeContext = createContext(null)

export const HomeContextProvider = ({ children }) => {
    const [currentSport, setCurrentSport] = useState("soccer")
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY

    async function getNews(){
        try{
          setLoading(true)
          let json = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token='+API_KEY+"&search="+currentSport+"&language=en&sort=published_at&limit=2&categories=sports")
          setNews(json.data.data)
          console.log(json.data.data)
        } catch (error) {
          setError(error)
        }
        setLoading(false)
    }

    // renders different news as the currentSport changes
    useEffect(() => {
      getNews()
    }, [currentSport])

    const homeValue = {currentSport, setCurrentSport, news, loading, getNews}

    console.log(currentSport)

    return(
        <HomeContext.Provider value = {homeValue}>
            <>{children}</>
        </HomeContext.Provider>
    )
}


export const useHomeContext = () => useContext(HomeContext)