import * as React from "react"
import "./NavLinks.css"
import { NavLink } from "react-router-dom"



//import contexts
import { useAuthContext } from "../../contexts/auth"


export default function NavNavLinks() {


  const { user, handleOnLogout } = useAuthContext()


  return (
    <div className="nav-NavLinks">
      <ul>
        <li><NavLink exact to="/" label="Home" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink exact to="/sports" label="sports" activeClassName="active-link">Sports Home</NavLink></li>
        <li><NavLink exact to="/learning" label="learning" activeClassName="active-link">Learning Center</NavLink></li>
        <li><NavLink exact to="/profile" label="profile" activeClassName="active-link">Profile</NavLink></li>
        {/* Logout button moves slightly up when hovered.. need to make it stay in place like other li elements */}
        {user?.email ? <li className = "logout-li" onClick={handleOnLogout}><NavLink exact to="/login" activeClassName="active-link">Logout</NavLink></li> 
        : <span className ="login-register-li">
            <li><NavLink exact to="/login" label="Login" activeClassName="active-link">Login</NavLink></li>
            <li><NavLink exact to="/register" label="Sign up" activeClassName="active-link">Sign Up</NavLink></li>
          </span>}

      </ul>
              
    </div>
  )
}