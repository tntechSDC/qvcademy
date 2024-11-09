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
        <div class="container">
            <h1 className="text-pink text-9xl font-mono">Welcome Devs!</h1>
        </div>
    </div>
}