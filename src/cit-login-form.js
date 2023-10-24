import React from "react";
import './citlogin.css'
function CitLoginForm(){
    return (
        <div id="form">
            <div id ="title-login">Citizen Login</div>
            <p>Login credentials of old portal (prior to 03.11.2022)
                does not work in this portal. First-time users of the 
                new portal to go to “Register new user” for one-time 
                user registration!</p>
            <form>
                <label for='login-id'>
                    login id
                </label>

                <input id='loginid'></input>
                <br />
                <label for='passwd' type='password'>
                    password
                </label>
                <input id='passwd'></input>
                <br />
                <label for='captcha'>
                    captcha
                </label>
                <input id='captcha'></input>
            </form>
        </div>
    )
}
export default CitLoginForm;