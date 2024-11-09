import React from 'react';
import logo from "../images/qvcademy_logo_11:8.png";
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function navbar() {
    return <nav className="bg-purple-500 fixed top-0">
        <div className="flex items-center space-x-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
            </a>
            
            {/* Links for larger screens */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-white hover:bg-dark-purple px-3 py-2 rounded">Get Started</a>
              <a href="/" className="text-white hover:bg-dark-purple px-3 py-2 rounded">Program</a>
              <a href="/" className="text-white hover:bg-dark-purple px-3 py-2 rounded">Learn</a>
              <a href="/" className="text-white hover:bg-dark-purple px-3 py-2 rounded">Contact</a>
            </div>
          </div>
          {/*Right Aligned Icon*/}
          <div className="relative">
            <UserCircleIcon className="h-10 w-10 text-yellow hover:text-gray-400 cursor-pointer" />
          </div>
    </nav>
}