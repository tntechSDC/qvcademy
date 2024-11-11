import React, { useState, useRef, useEffect } from 'react';
import logo from "../images/qvcademy_logo_11_8.png";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
//quinn worked on this, ask me if you have questions on this code

export default function LearningNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); //holds a reference to dropdown container

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the click was outside the dropdown
            if (dropdownRef.current && dropdownRef.current.contains(event.target) === false) {
                setDropdownOpen(false); //closes the drop down
            }
        }
        
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up the event listener on close
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    return <nav className="bg-purple fixed top-0 w-full">
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
                <NavLink to="/" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">Contact Us</NavLink>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onMouseEnter={toggleDropdown}
                            className="text-pink pt-2 hover:bg-dark-purple"
                        >
                            Languages &#x25BC;
                        </button>

                        {/* Dropdown Items */}
                        {dropdownOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-purple w-32 rounded-md">
                                <NavLink to="/cppHome" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">C++</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">C</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">C#</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Swift</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Kotlin</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Lua</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Python</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Javascript</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Java</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Ruby</NavLink>
                                <NavLink to="/get-started" className="block px-6 py-2 text-pink hover:bg-dark-purple rounded-md">Dart</NavLink>
                            </div>
                        )}
                    </div>
          </div>
          <NavLink to="/login" className="text-pink hover:bg-dark-purple px-3 py-2 rounded">
            <UserCircleIcon className="h-10 w-10 text-pink hover:text-gray-400 cursor-pointer" />
            </NavLink>
        </div>
            
         </div>
          
      </nav>
  }