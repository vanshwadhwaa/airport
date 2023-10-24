import React from "react";
import "./CMS.css"
import Ticker from "./Ticker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function CMS(){
    

    return(
        <div>
            <Ticker />
            <div id="cms-field">
                <h1>Complaint Management System</h1>
                <div id='cms-boxes'>
                
                    <div class='offer-box' id='login-cit'>
                    
                    
                        <div class="offer-circle" id='cit-login'>
                            <img src='lodge.png' alt='citizen-logo'></img>
                        </div>
                        <Link to="citizen-login" id='cit-login-link'>   
                        <h3>Citizen Login</h3>
                        </Link>
                    
                </div>
                <div class='offer-box'>
                    <div class="offer-circle" id='status'>
                        <img src='lodge.png' alt='citizen-logo'></img>
                    </div>
                    <Link to="status">
                    <h3>Know Your Complaint Status</h3>
                    </Link>
                </div>
                <div class='offer-box'>
                    <div class="offer-circle" id='cvc-login'>
                        <img src='cvc_login.png' alt='citizen-logo'></img>
                        
                    </div>
                    <Link to='cvo-login'>
                    <h3>CVC/CVO login</h3>
                    </Link>
                </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default CMS;