import React from "react"


import {NavLink} from "react-router-dom"
function Home(){
    return(
        <div className = "welcome-page">
            <h1 className = "welcome-title">Welcome</h1>
            <label className = "customer-label">Customers</label>
            <button className = "customer-btn">Customer Login</button>
            <label className = "helper-label">Helper</label>
            <button className = "helper-btn">Helper Login</button>
            <NavLink className = "customer-registration"exact to="/customer-registration" className="customer-registration">Customer Registration</NavLink>
        </div>
    )
}
export default Home;