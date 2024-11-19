import React from 'react';
import logo from "../images/qvcademy_logo_11_8.png";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
//quinn worked on this, ask me if you have questions on this code

export default function LearningNavbar() {
    return <nav className="fixed top-0 bg-purple bg-opacity-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between space-x-4">   
              {/* Links on the left */}
          <div className="hidden md:flex space-x-8">
                 {/* Logo */}
                <NavLink to="/" className="flex-shrink-0">
                  <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
                </NavLink>
                <NavLink to="/get-started" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Get Started</NavLink>
                <NavLink to="/problems" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Program</NavLink>
                <NavLink to="/learning" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Learn</NavLink>
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Donate</NavLink>
          </div>
          <NavLink to="/login" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">
            <UserCircleIcon className="h-10 w-10 text-pink hover:text-gray-400 cursor-pointer" />
            </NavLink>
        </div>
            
         </div>
          
      </nav>
  }