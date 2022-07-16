import { useAuthContext } from "../../contexts/auth";
import LoginPage from "../LoginPage/LoginPage";

export default function ProtectedRoute({ element }) {
    const { user, initialized } = useAuthContext()
    
    
    if(!initialized) return null
    
    if(initialized && !user?.username) return <LoginPage message="You must be logged in to access that page"/>

    
    return <>{element}</>

}