import React from 'react';
import logo from "../images/qvcademy_logo_11_8.png";
import { NavLink } from "react-router-dom";
//quinn worked on this, ask me if you have questions on this code

export default function Register() {
    return (
        
        <div className="bg-gradient-to-r from-purple from-30% to-teal to-70% h-screen">
            <div className="flex justify-between">
                <div className="pl-48 pt-56">
                    <NavLink to="/">
                        <img src={logo} alt="Brand Logo" className="h-72 w-auto" />
                    </NavLink>
                </div>
                <div className="pt-32 pr-56 text-center">
                    <h1 className="text-purple text-5xl font-mono font-bold">Register</h1>
                    <h2 className="text-light-gray pt-2 font-bold">quick versatile coding starts here</h2>
                    
                    <label className="block text-left text-light-gray mb-2 mt-8 font-bold" htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    className="border-2 border-light-gray bg-transparent p-2 rounded w-full font-bold focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                    placeholder="Pick your username"
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="Email">Email</label>
                    <input
                    type="text"
                    id="email"
                    className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                    placeholder="Enter your email"
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="password">Password</label>
                    <input
                    type="text"
                    id="password"
                    className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                    placeholder="Choose a secure password"
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                    type="text"
                    id="confirmPassword"
                    className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                    placeholder="Confirm your secure password"
                    />
                    <button className="bg-purple text-light-gray hover:bg-dark-purple font-bold mt-8 rounded w-1/2 h-10">
                        Sign Up
                    </button>
                    <p className="pt-8 text-purple text-xl font-bold">Already have an account?</p>
                    <NavLink to="/login" className="text-pink font-bold hover:text-purple mt-4">Login</NavLink>
                </div>
            </div>
        </div>
    )
}