import React from 'react';
import FunctionalNavbar from '../components/navbarDefault';
//This is being worked on by Cyd

export default function GettingStarted() {
    return (
        <div className="bg-purple h-screen flex">
            <div className="text-left mt-16 pl-30">
                <h1 className="text-pink">Welcome</h1>
            </div>
            <FunctionalNavbar />
        </div>
    );
}
