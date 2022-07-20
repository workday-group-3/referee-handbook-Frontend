import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'

const HomeContext = createContext(null)

export const HomeContextProvider = ({ children }) => {
    const [currentSport, setCurrentSport] = useState("soccer")
    const [news, setNews] = useState([])
    const [teams, setTeams] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY
    const SPORTS_API_KEY = import.meta.env.VITE_SPORTS_API_KEY

    // fetches the news by sport
    async function getNews(){
        try{
          setLoading(true)
          let json = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token='+NEWS_API_KEY+"&search="+currentSport+"&language=en&sort=published_at&limit=2&categories=sports")
          setNews(json.data.data)
          console.log(json.data.data)
        } catch (error) {
          setError(error)
        }
        setLoading(false)
    }

    // fetches the teams by sport
    async function getTeams(){
        let apiSportString = 'v1.'+currentSport
        if(currentSport == "soccer"){
            apiSportString = "v3.football"
        }
        try{
            setLoading(true)
            let json = await axios.get("https://"+apiSportString+".api-sports.io/teams?league=253&season=2022", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })
            setTeams(json.data.response)
        } catch(error){
            setError(error)
        }
    }

    // renders different info as the currentSport changes
    useEffect(() => {
      getNews()
      getTeams()
    }, [currentSport])

    const homeValue = {currentSport, setCurrentSport, news, loading, getNews, teams}

    console.log(currentSport)

    return(
        <HomeContext.Provider value = {homeValue}>
            <>{children}</>
        </HomeContext.Provider>
    )
}


export const useHomeContext = () => useContext(HomeContext)