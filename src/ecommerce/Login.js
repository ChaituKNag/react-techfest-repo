import React, { useState, useEffect } from 'react';
import auth0 from 'auth0-js';


const Login = () => {
    const authenticateUser = () => {
        auth0 = new auth0.WebAuth({
            domain: 'dev-p7gk3ema.auth0.com',
            clientID: 'fTAWNLcVhp7xIWgcL2It5NPYKEBz9foU',
            redirectUri: 'http://localhost:3000/plp',
            responseType: 'token id_token',
            scope: 'openid'
          }).authorize();
    }

    return(
        <div className="login-form">
            <div className="row">
                <label className="form-label">First Name</label>
                <input className="form-input"></input>
            </div>
            <div className="row">
                <label className="form-label">Last Name</label>
                <input className="form-input"></input>
            </div>
            <div className="action-links">
                <button className="form-login g-signin2" onClick={() => authenticateUser()}>Login</button>
                <button className="form-login">Sign Up</button>
            </div>
        </div>
    )
}

export default Login;
