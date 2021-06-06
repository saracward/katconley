import React from 'react'
import About from "./About"
import SetArt from "./SetArt"
import SetDesign from "./SetDesign"
import Contact from "./Contact"
import { Link } from "react-router-dom"
// import "./styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to ="/">KAT CONLEY</Link>
            <Link to ="/About">About</Link>
            <Link to ="/SetArt">SetArt</Link>
            <Link to ="/SetDesign">Set Design</Link>
            <Link to ="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar
