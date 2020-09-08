import React from "react"
import asterisk from "../asterisk.svg"


function CreateTicket (){
    return(
        <div className= "create-ticket">
            <h1>Lets' submit a help ticket</h1>
            <div className="reg">
            <img className="asterisk" src={asterisk} alt="Asterisk" /><h4>Required Fields</h4>
            </div>
            <div className="reg">
            <h2 >What's going on?</h2><img className="asterisk" src={asterisk} alt="Asterisk" />
            </div>
            <input className= "what-going"
            type= "text"
            placeholder = "Add title"
            />
            <div className="reg"> 
            <h2>What is the issue about?</h2><img className="asterisk" src={asterisk} alt="Asterisk" />
            </div>
            <textarea className="text-box"
            
            />
            <h2>Anything else we should know?</h2>
            <textarea className="text-box"
            
            />
            <button className="btn-submit btn-submit2">Submit Ticket</button>
        </div>
    )
}
export default CreateTicket;