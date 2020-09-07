import React from "react"


import {NavLink} from "react-router-dom"
function Home(){
    return(
        <div>
            <h1>QSUPPORT</h1>
            <label>Customers</label>
            <button>Customer Login</button>
            <label>Helper</label>
            <button>Helper Login</button>
            <NavLink exact to="/customer-registration" className="customer-registration">Customer Registration</NavLink>
        </div>
    )
}
export default Home;