import React from 'react'
import "./Logo.css"
import logoImg from "../../assets/navbar-logo.png"

export default function Logo() {
  return (
    <div className="logo">
        <img className="logo-img" src={logoImg} alt="logo-img"></img>
    </div>
  )
}
