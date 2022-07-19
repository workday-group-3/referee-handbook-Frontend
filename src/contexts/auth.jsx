import { createContext, useContext, useState, useEffect } from "react"
import apiClient from "../services/apiClient"


const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [initialized, setInitialized] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)




    useEffect(() => {
        const fetchUser = async () => {
          const {data, error} = await apiClient.fetchUserFromToken()
          if (data) {
            setUser(data.user)
          }
          if (error) {
            setError(error)
          }
          setInitialized(true)
        }
      
      
        const token = localStorage.getItem("my_token")
        if(token) {
          apiClient.setToken(token)
          fetchUser()
        }
        else {
            setInitialized(true)
        }
      }, [setUser])



  const handleOnLogout = async () => {
    setUser({})
    await apiClient.logoutUser()
    console.log("Logged out")
  }


  const authValue = {user, setUser, handleOnLogout, initialized}

  return(
      <AuthContext.Provider value = {authValue}>
          <>{children}</>
      </AuthContext.Provider>


  )
}


export const useAuthContext = () => useContext(AuthContext)
