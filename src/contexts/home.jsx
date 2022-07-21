import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'

const HomeContext = createContext(null)

// storing all the information for leagues, leagueName and seasons of each respective sport
const requestParams = {"basketball": {"league": 12, "season": "2021-2022", "leagueName": "NBA"},
                    "baseball": {"league": 1, "season": "2022", "leagueName": "MLB"},
                    "soccer": {"league": 253, "season": "2022", "leagueName": "Major League Soccer"},
                    "hockey": {"league": 57, "season": "2021", "leagueName": "NHL"},
                    "volleyball": {"league": 180, "season": "2022", "leagueName": "NVA"},
                    "rugby": {"league": 44, "season": "2022", "leagueName": "Major League Rugby"}}

export const HomeContextProvider = ({ children }) => {
    const [currentSport, setCurrentSport] = useState("rugby")
    const [league, setLeague] = useState("Major League Rugby")

    const [news, setNews] = useState([])
    const [teams, setTeams] = useState([])
    const [game, setGame] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingGame, setLoadingGame] = useState(true)

    const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY
    const SPORTS_API_KEY = import.meta.env.VITE_SPORTS_API_KEY

    // fetches the news by sport
    async function getNews(){
        try{
          setLoading(true)
          let json = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token='+NEWS_API_KEY+"&search="+currentSport+"&language=en&sort=published_at&limit=2&categories=sports")
          setNews(json.data.data)
        } catch (error) {
          setError(error)
        }
        setLoading(false)
    }

    // fetches the teams by sport
    async function getTeams(){
        
        let apiSportString = 'v1.'+currentSport
        // the api version for soccer is v3, different from the rest
        if(currentSport == "soccer"){
            apiSportString = "v3.football"
        }

        try{
            setLoading(true)

           // conditionally fetches by the league and season of the specific sport
            let json = await axios.get("https://"+apiSportString+".api-sports.io/teams?league="+requestParams[currentSport].league+"&season="+requestParams[currentSport].season, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })
            setTeams(json.data.response)
            setLeague(requestParams[currentSport].leagueName)
        } catch(error){
            setError(error)
        }
        setLoading(false)
    }

    // fetches the most recent game by sport and league
    async function getGame(){
        let apiSportString = 'v1.'+currentSport
        let endpoint = "/games"
        // the api version for soccer is v3, endpoint is fixtures, different from the rest
        if(currentSport == "soccer"){
            apiSportString = "v3.football"
            endpoint = "/fixtures"
            console.log("is soccer")
        }

        try{
            setLoadingGame(true)
            // conditionally fetches by the league and season of the specific sport
            let json = await axios.get("https://"+apiSportString+".api-sports.io"+endpoint+"?league="+requestParams[currentSport].league+"&season="+requestParams[currentSport].season, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })
            console.log("success", json.data.response)

            // soccer data is formatted differently, have to filter differently
            if(currentSport === "soccer"){
                // filter to find the matches that finished/is in progress
                let filtered_games = json.data.response.filter((item)=>item.fixture.date < new Date().toISOString())
                console.log(filtered_games)
                // select the most recent game
                setGame(filtered_games[filtered_games.length - 1])
            }

            // data filtering for all the other sports
            else{
                let filtered_games_others = json.data.response.filter((item)=>item.date < new Date().toISOString())
                console.log(filtered_games_others)
                setGame(filtered_games_others[filtered_games_others.length - 1])
            }
            setLoadingGame(false)
            
            
        } catch(error){
            setError(error)
        }
       
       
    }

    

    // renders different info as the currentSport changes
    useEffect(() => {
    //   getNews()
    // getTeams()
    //   getGame()
    }, [currentSport])

    const homeValue = {currentSport, setCurrentSport, news, loading, getNews, teams, league, game, loadingGame}

    console.log(currentSport)

    return(
        <HomeContext.Provider value = {homeValue}>
            <>{children}</>
        </HomeContext.Provider>
    )
}


export const useHomeContext = () => useContext(HomeContext)