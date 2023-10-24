import React from "react";
import "./CMS.css"
function CMS(){
    return(
        <div><div>
            link
        </div>
            <div id="cms-field">
                <h1>Complaint Management System</h1>
                <div id='cms-boxes'>

                <div class='offer-box'>
                    <div class="offer-circle" id='cit-login'>
                        <img src='lodge.png' alt='citizen-logo'></img>
                    </div>
                    <h3>Citizen Login</h3>
                </div>
                <div class='offer-box'>
                    <div class="offer-circle" id='status'>
                        <img src='lodge.png' alt='citizen-logo'></img>
                    </div>
                    <h3>Know Your Complaint Status</h3>
                </div>
                <div class='offer-box'>
                    <div class="offer-circle" id='cvc-login'>
                        <img src='cvc_login.png' alt='citizen-logo'></img>
                    </div>
                    <h3>CVC/CVO login</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CMS;