import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/qvcademy_logo_11_8.png';

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