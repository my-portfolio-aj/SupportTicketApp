import React from "react"
import logo from "../logo.png"


function Header(){
    return(
        <div className = "App-header">
            <h1 className = "header-text">In</h1> <img className = "App-logo" src={logo} alt="Logo" />
        </div>
    )
}
export default Header;