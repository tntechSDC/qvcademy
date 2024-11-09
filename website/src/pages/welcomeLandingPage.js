import React from 'react';
import background from "../images/background_no_text.jpg";
import Navbar from "../components/navbarPresentation.js";
import placeholder1 from "../images/placeholder1.jpg";

export default function LandingPage() {
    return <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600vh",
        }}
    >
        <Navbar />
        <div className="text-left pl-16 md:pl-36 pt-16">
            <h1 className="text-pink text-8xl md:text-9xl font-mono">Welcome <br />Devs!</h1>
            <h2 className="text-pink text-2xl md:text-5xl font-sans pt-8">We're here to make your life <br /> <b><i>easier.</i></b></h2>
        </div>

        <div className="pl-16 md:pl-32 pt-64">
            <div className="text-left">
                <h1 className="text-yellow text-4xl md:text-7xl font-mono pt-16">Who are we?</h1>
            </div>
            <div className="flex space-x-8">
                <div className="text-left">
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">qvcademy is an organization dedicated to the principle of lifelong learning, but <b><i>efficiently.</i></b></p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">As students, we realized there are very few resources dedicated to help developers,<br /> who already know how to code,<br /> learn new languages for their <br /> <b>exciting next project!</b></p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">Introducing our solution, <b>qvcademy.</b></p>
                </div>
                <img src={placeholder1} alt="placeholder" className="rounded-full"></img>
            </div>
       </div>
        
    </div>
}