import React from "react"
import ReactDom from "react-dom"

function CustomerRegistration (){
    return(
        <div>
            <form>
            <h1>Customer Registration</h1>
            <label>First Name</label>
            <input
            type = "text"
            name ="First Name"
            placeholder = "First Name"
            />
            <label>Last Name</label>
            <input
            type ="text"
            name = "Last Name"
            placeholder = "Last Name"
            />
            <label>Email</label>
            <input
            type = "email"
            placeholder = "Email"
            />
            </form>
        </div>
    )
}
export default CustomerRegistration;