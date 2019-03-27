import React, { useState, useEffect } from 'react';
import {OAuth2Client} from 'google-auth-library';

const CLIENT_ID = "547928752611-gt3aghp312idcjg694e12qreram38a47.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

const Login = (props) => {
    useEffect(() => {
        // async function verify() {
        //     const ticket = await client.verifyIdToken({
        //         idToken: token,
        //         audience: CLIENT_ID
        //     });
        //     const payload = ticket.getPayload();
        //     const userid = payload['sub'];
        //   }
        //   verify().catch(console.error);
    });
    const authenticateUser = (googleUser) => {
        var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present


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
                <button className="form-login g-signin2" onClick={(e) => authenticateUser()} data-onsuccess={authenticateUser}>Login</button>
                <button className="form-login">Sign Up</button>
            </div>
        </div>
    )
}

export default Login;
