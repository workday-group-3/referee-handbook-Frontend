import React from 'react'
import "./Logo.css"
import { Link } from 'react-router-dom'

import logoImg from "../../assets/navbar-logo.png"

export default function Logo() {
  return (
    <div className="logo">
      <Link to={`/`}>
        <img className="logo-img" src={logoImg} alt="logo-img"></img>
      </Link> 
    </div>
  )
}
