//react imports
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

//component imports
import apiClient from '../services/apiClient'

//contexts
import { useAuthContext } from "../contexts/auth"



export const useRegistrationForm = () => {

  const { user, setUser } = useAuthContext()

  //global variables
  let emptyRegisterForm = {email: "", username: "", location: "", firstName: "", lastName: "",  profileImageUrl: "", password: "", confirmPassword: ""}

  //state variables
  const navigate = useNavigate()
  const [userRegisterForm, setUserRegisterForm ] = useState(emptyRegisterForm)
  const [error, setError] = useState(null)



  // uncomment this when logout button is added
  // useEffect(() => {
  //   //if user is already logged in, then redirect to home page
  //   if(user?.username) {
  //     navigate("/profile")
  //   }
  // }, [user, navigate])



  //register form handler
  function handleOnInputChange (evt) {
    setUserRegisterForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    console.log("userLoginForm", userRegisterForm)
  }



  const handleOnSubmitRegisterForm = async () => {
    if (userRegisterForm.password != userRegisterForm.confirmPassword){
      setError("Passwords don't match")
    }
    else {
      const {data, error} = await apiClient.signupUser(userRegisterForm)
      if (error) {
        setError(error)
      }
      if(data?.user) {
        apiClient.setToken(data.token)
        navigate("/profile")
        setUser(data?.user)
        setUserRegisterForm(emptyRegisterForm)
        console.log("Successful Registration")
      }
    }
  }



  return {
    userRegisterForm,
    error,
    handleOnInputChange,
    handleOnSubmitRegisterForm
  }
}