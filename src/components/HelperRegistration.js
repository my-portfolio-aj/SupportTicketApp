import React from "react"

function HelperRegistration (){
    return(
        <div>
            <form className ="registration-form">
            <h1>Helper Registration</h1>
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
export default HelperRegistration;