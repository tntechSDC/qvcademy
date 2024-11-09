import React from 'react';
import background from "../images/background_no_text.jpg";
import Navbar from "../components/navbarPresentation.js";

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
        
    </div>
}