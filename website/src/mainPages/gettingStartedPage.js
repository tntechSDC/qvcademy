import React from 'react';
import FunctionalNavbar from '../components/navbarDefault';
//This is being worked on by Cyd

export default function GettingStarted() {
    return (
        <div className="bg-purple relative h-screen">
            <FunctionalNavbar />
            <div className="flex justify-center pt-12">
                <h1 className="mt-12 text-pink text-7xl">Getting Started</h1>
            </div>
            <div className="flex items-center h-[calc(80vh-7rem)]">
                <div className="text-left ml-5 xs:ml-5 sm:ml-5 md:ml-20 lg:ml-20 xl:pl-20  text-pink text-3xl space-y-5">
                    <p>Structure:</p>
                    <p className="pl-12 ml-12">lorem ipsum</p>
                    <p>What we expect from you:</p>
                    <p className="pl-12 ml-12">lorem ipsum</p>
                    <p>Don't know how to code? Look here:</p>
                    <p className="pl-12 ml-12">Link</p>
                    <p className="pl-12 ml-12">Link</p>
                </div>        
            </div>
            <div className="absolute bottom-10 left-0 right-0 text-center">
                <h1 className="text-pink text-3xl">The World is Your Oyster!</h1>
            </div>
        </div>
    );
}
