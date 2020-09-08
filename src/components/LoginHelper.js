import React from "react"

function LoginHelper(){
    return(
        <div>
            <h2 className= "here-to-help">We'er here to help</h2>
            <h3>Create a help ticket and we'll connect you with a Customer Helper.</h3>
            <label className ="email-label">Email address</label>
            <input className= "helper-email"
            type ="email"
            />
        </div>
    )
}
export default LoginHelper
;