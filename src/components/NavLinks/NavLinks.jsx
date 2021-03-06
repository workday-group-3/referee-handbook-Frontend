import * as React from "react"
import "./NavLinks.css"
import { Link } from "react-router-dom"



//import contexts
import { useAuthContext } from "../../contexts/auth"


export default function NavLinks() {


  const { user, handleOnLogout } = useAuthContext()


  return (
    <div className="nav-links">
      <ul>
        <li><Link to="/" label="Home">Home</Link></li>
        <li><Link to="/home" label="sports">Sports Home</Link></li>
        <li><Link to="/learning" label="learning">Learning Center</Link></li>
        <li><Link to="/profile" label="profile">Profile</Link></li>
        {/* Logout button moves slightly up when hovered.. need to make it stay in place like other li elements */}
        {user?.email ? <li className = "logout-li" onClick={handleOnLogout}><Link to="/login">Logout</Link></li> 
        : <span className ="login-register-li">
            <li><Link to="/login" label="Login">Login</Link></li>
            <li><Link to="/register" label="Sign up">Sign Up</Link></li>
          </span>}

      </ul>
              
    </div>
  )
}