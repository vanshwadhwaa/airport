import React from "react";
import './Navbar.css'

// import "Group 8304" from 'public/emblem.svg'

function Navbar(){
    return (
        <div id='navbar'>
            <div id='emblem-container'>
                <img src="./emblem.svg" alt='emblem' id="emblem"></img>
            </div>
            <div id="title-container">
                <h1>AIRPORT AUTHORITY OF INDIA</h1>
                <div id='aai-logo'><img src='logo.png' alt='aai logo'></img></div>
            </div>
        </div>
    )
}

export default Navbar