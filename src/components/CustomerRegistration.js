import React from "react"
import ReactDom from "react-dom"

function CustomerRegistration (){
    return(
        <div>
            <form className ="registration-form">
            <h1>Customer Registration</h1>
            <label className = "name-label">First Name</label>
            <input className = "input"
            type = "text"
            name ="First Name"
            placeholder = "First Name"
            />
            <label className = "name-label">Last Name</label>
            <input className = "input"
            type ="text"
            name = "Last Name"
            placeholder = "Last Name"
            />
            <label className = "name-label">Email</label>
            <input className = "input"
            type = "email"
            placeholder = "Email"
            />
            </form>
            <button className = "btn-account">Create Account</button>
        </div>
    )
}
export default CustomerRegistration;