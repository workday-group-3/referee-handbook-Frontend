import * as React from "react"
import { createContext, useState, useContext, useEffect } from "react";

import apiClient from "../services/apiClient"

/* The line below will be implemented if we decide to utilize useContext for user auth */
// import { useAuthContext } from "./auth"

const LearningContext = createContext(null)


export const LearningContextProvider = ({children}) => {
    const [courses, setCourses] = useState([])  //creates a simple course array state variable 
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
}



const learningValue = { courses, setCourses, }

//renders children propes previosly defined in LearningContextProvider using the values in learningValue
return (
    <LearningContext.Provider value={}>
        <>{children}</>
    </LearningContext.Provider>
)


export const useLearningContext = () => useContext(LearningContext)


