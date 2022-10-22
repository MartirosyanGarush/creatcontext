import React, { useState } from "react"
import './Mainpage.css'

export default function Merpage(props) {
    const [open, SetOpen] = useState(false)
    function Click() {
        SetOpen(!open)
    //console.log()
    }

    return (
        <div className="container">
            {/* <input type="button" value="Click" onClick={Click} className="btn" /> */}
             <button className="btn" onClick={()=>SetOpen(!open)}> open</button>

             {open ?
                <div className="inputs">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">CONTACT</a>
                </div> : null} 
                <img src = {props.img} className="img" />
        </div> 
    )
    
}


