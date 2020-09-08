import React from "react"
import logo from "../logo.png"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div className = "App-header">
            <h1 className = "header-text">In</h1> <img className = "App-logo" src={logo} alt="Logo" />
            <nav className="nav">
                <Link className="nav" to="/registration">Registration</Link>
            </nav>
        </div>
    )
}
export default Header;