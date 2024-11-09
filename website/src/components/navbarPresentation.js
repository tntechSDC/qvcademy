import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../images/qvcademy_logo_11:8.png";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    return <nav className="top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Aligned Logo and Links */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <NavLink to="/" className="flex-shrink-0">
              <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
            </NavLink>
            
            {/* Links for larger screens */}
            <div className="hidden md:flex space-x-4">
              <NavLink to="/get-started" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Get Started</NavLink>
              <NavLink to="/problems" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Program</NavLink>
              <NavLink to="/learning" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Learn</NavLink>
            </div>
          </div>
          
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink hover:text-dark-purple-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="/about" className="block text-pink  hover:bg-dark-purple px-3 py-2 rounded">About</a>
            <a href="/services" className="block text-pink  hover:bg-dark-purple px-3 py-2 rounded">Services</a>
            <a href="/contact" className="block text-pink  hover:bg-dark-purple px-3 py-2 rounded">Contact</a>
          </div>
        )}
      </div>
    </nav>

}