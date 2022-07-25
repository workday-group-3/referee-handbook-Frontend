import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'
import { SettingsInputAntennaTwoTone } from "@mui/icons-material"

const HomeContext = createContext(null)

// storing all the information for leagues, leagueName and seasons of each respective sport
const requestParams = {"basketball": {"league": 12, "season": "2021-2022", "leagueName": "NBA"},
                    "baseball": {"league": 1, "season": "2022", "leagueName": "MLB"},
                    "soccer": {"league": 253, "season": "2022", "leagueName": "Major League Soccer"},
                    "hockey": {"league": 57, "season": "2021", "leagueName": "NHL"},
                    "volleyball": {"league": 180, "season": "2022", "leagueName": "NVA"},
                    "rugby": {"league": 44, "season": "2022", "leagueName": "Major League Rugby"}}

export const HomeContextProvider = ({ children }) => {
    const [currentSport, setCurrentSport] = useState("hockey")
    const [league, setLeague] = useState("NHL")

    const [news, setNews] = useState([])
    const [teams, setTeams] = useState([])
    const [game, setGame] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingGame, setLoadingGame] = useState(true)
    const [loadingTeam, setLoadingTeam] = useState(true)
    const [loadingStats, setLoadingStats] = useState(true)
    const [team, setTeam] = useState(null)
    const [stats, setStats] = useState(null)

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
            setLeague(requestParams[currentSport].leagueName)

           // conditionally fetches by the league and season of the specific sport
            let json = await axios.get("https://"+apiSportString+".api-sports.io/teams?league="+requestParams[currentSport].league+"&season="+requestParams[currentSport].season, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })

            // soccer data is formatted differently, change json formatting here to avoid complications
            if(currentSport == "soccer"){
                for(let i = 0; i < json.data.response.length; i++){
                    json.data.response[i] = json.data.response[i].team
                }
            }
            setTeams(json.data.response)
            
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

            // soccer data is formatted differently, have to filter differently
            if(currentSport === "soccer"){
                // filter to find the matches that finished/is in progress
                let filtered_games = json.data.response.filter((item)=>item.fixture.date < new Date().toISOString())

                // reformat the most recent game
                // change the key "goals" to "scores" to match the others
                filtered_games[filtered_games.length - 1].scores = filtered_games[filtered_games.length - 1].goals
                delete filtered_games[filtered_games.length - 1].goals

                // extract date and status variables to match others
                filtered_games[filtered_games.length - 1].date = filtered_games[filtered_games.length - 1].fixture.date
                filtered_games[filtered_games.length - 1].status = filtered_games[filtered_games.length - 1].fixture.status
                delete filtered_games[filtered_games.length - 1].fixture

                // set the updated game
                setGame(filtered_games[filtered_games.length - 1])
            }

            // data filtering for all the other sports
            else{
                let filtered_games_others = json.data.response.filter((item)=>item.date < new Date().toISOString())
                if(currentSport == "basketball" || currentSport == "baseball"){
                    // basketball and baseball are formatted differently, extract the total scores to match other formatting
                    filtered_games_others[filtered_games_others.length - 1].scores.home = filtered_games_others[filtered_games_others.length - 1].scores.home.total
                    filtered_games_others[filtered_games_others.length - 1].scores.away = filtered_games_others[filtered_games_others.length - 1].scores.away.total
                }
                setGame(filtered_games_others[filtered_games_others.length - 1])
            }

            setLoadingGame(false)
            
            
        } catch(error){
            setError(error)
        }
       
       
    }

    // fetches detailed information for one team
    async function getTeam(sportName, teamId) {
        let apiSportString = 'v1.'+sportName
        // the api version for soccer is v3, different from the rest
        if(sportName == "soccer"){
            apiSportString = "v3.football"
        }

        try{
            setLoadingTeam(true)
            // fetch team information using sportName and teamId
            let json = await axios.get("https://"+apiSportString+".api-sports.io/teams?id="+teamId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })
            // format soccer json data so it matches the others
            if(sportName === "soccer"){
                json.data.response[0] = json.data.response[0].team
            }
            setTeam(json.data.response[0])
        } catch(error){
            setError(error)
        }
        setLoadingTeam(false)
    }

    async function getStats(sportName, teamId) {
        let apiSportString = 'v1.'+sportName
        let endpoint = "/teams/statistics"
        // the api version for soccer is v3, different from the rest
        if(sportName === "soccer"){
            apiSportString = "v3.football"
        }
        // endpoint for basketball is different
        if(sportName === "basketball"){
            endpoint = "/statistics"
        }

        try{
            setLoadingStats(true)
            let json = await axios.get("https://"+apiSportString+".api-sports.io"+endpoint+"?team="+teamId+"&league="+requestParams[sportName].league+"&season="+requestParams[sportName].season, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": apiSportString+".api-sports.io",
                    "x-rapidapi-key": SPORTS_API_KEY
                }
            })
            // soccer has a fixtures header unlike the others, change it to games
            if(sportName === "soccer"){
                json.data.response.games = json.data.response.fixtures
                delete json.data.response.fixtures
                // soccer has total instead of all, format the json
                json.data.response.games.played.all = json.data.response.games.played.all.total
                delete json.data.response.games.played.total
                json.data.response.games.wins.all.total = json.data.response.games.wins.total
                delete json.data.response.games.wins.total
                json.data.response.games.loses.all.total = json.data.response.games.loses.total
                delete json.data.response.games.loses.total
            }
            setStats(json.data.response.games)
        } catch(error) {
            setError(error)
        }
        setLoadingStats(false)
    }

    

    // renders different info as the currentSport changes
    useEffect(() => {
        getNews()
        getTeams()
       getGame()
    }, [currentSport])

    const homeValue = {currentSport, setCurrentSport, news, loading, getNews, teams, league, game, loadingGame, getTeam, team, loadingTeam, getStats, stats}

    return(
        <HomeContext.Provider value = {homeValue}>
            <>{children}</>
        </HomeContext.Provider>
    )
}


export const useHomeContext = () => useContext(HomeContext)