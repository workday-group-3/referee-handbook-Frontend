import * as React from "react"
import "./NavLinks.css"

export default function NavLinks() {

  return (
    <div className="nav-links">
      <ul>
        <li>Home</li>
        <li>Learning Center</li>
        <li>Profile</li>
        {/* TODO: Conditional rendering: If logged in, show Logout button. */}
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </div>
  )
}