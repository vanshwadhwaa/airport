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
                <h1>Airport Authority of India</h1>
            </div>
        </div>
    )
}

export default Navbar