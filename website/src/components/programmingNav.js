import React from 'react';
import logo from "../images/qvcademy_logo_11_8.png";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";

export default function FunctionalNavbar() {
    return <nav className="bg-purple fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between space-x-4">   
              {/* Links on the left */}
          <div className="hidden md:flex space-x-4">
                 {/* Logo */}
                <NavLink to="/" className="flex-shrink-0">
                  <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
                </NavLink>
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Get Started</NavLink>
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Program</NavLink>
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Learn</NavLink>
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Contact</NavLink>
          </div>
          <div className="relative">
              <UserCircleIcon className="h-10 w-10 text-pink hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
            
         </div>
          
      </nav>
  }