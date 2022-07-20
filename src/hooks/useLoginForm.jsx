



//react imports
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

//contexts
import { useAuthContext } from "../contexts/auth"

//component imports
import apiClient from '../services/apiClient'


export const useLoginForm = () => {

  const { user, setUser } = useAuthContext()




  //global variables
  let emptyLoginForm = {email: "", password: ""}

  //state variables
  const navigate = useNavigate()
  const [userLoginForm, setUserLoginForm] = useState({})
  const [error, setError] = useState(null)


  useEffect(() => {
    //if user is already logged in, then redirect to home page
    if(user?.username) {
      navigate("/learning")
    }
  }, [user, navigate])





  //login form handler
  function handleOnInputChange (evt) {
    setUserLoginForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    console.log("userLoginForm", userLoginForm)
  }



  const handleOnSubmitLogin = async () => {
    setError(null)
    const {data, error} = await apiClient.loginUser(userLoginForm)
    if (error) {
      setError(error)
    }
    if(data?.user){
      setUser(data.user)
      apiClient.setToken(data.token)
      navigate("/learning")
      console.log("Successful Login")
    }
  }
  





  return {

    userLoginForm,
    error,
    handleOnInputChange,
    handleOnSubmitLogin


  }






}