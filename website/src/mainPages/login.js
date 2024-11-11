import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/qvcademy_logo_11_8.png';

//the bg-gradient is for setting background colors, the h-screen is neccessary to cover the entire height of the screen
//then flex justify-between creates a row with the two nested div elements
//the h1 tag is just there as a place holder for your code for the login, that's where the password and email/username should go 
//you can copy the code from the register screen under /mainPages/register.js for the input fields and labels
//for spacing, use padding and margin in tailwind docs, look at other code in register page or contact quinn for support

export default function Login() {
    return (
        <div className="bg-gradient-to-r from-teal from-50% to-purple to-50% h-screen">
            <div className="flex justify-between">
                <div> 
                    <h1>This is where the login info goes</h1>
                </div>
                <div className="pr-48 pt-56">
                    <NavLink to="/">
                        <img src={logo} alt="Brand Logo" className="h-72 w-auto" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}