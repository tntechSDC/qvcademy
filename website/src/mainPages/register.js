import React from 'react';
import logo from "../images/qvcademy_logo_11_8.png";

export default function Register() {
    return (
        <div className="bg-gradient-to-r from-purple to-teal h-screen">
            <div className="flex justify-between">
                <div className="pl-56 pt-56">
                    <img src={logo} alt="Brand Logo" className="h-64 w-auto" />
                </div>
                <div className="pt-32 pr-48 text-center">
                    <h1 className="text-purple text-5xl font-mono">Sign Up</h1>
                    <h2 className="text-light-gray pt-2">quick versatile coding starts here</h2>
                </div>
            </div>
        </div>
    )
}