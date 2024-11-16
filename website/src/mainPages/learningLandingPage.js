import React from 'react';
import LearningNavbar from '../components/learningNav';
import background from "../images/LearningLandingPage_background.jpg";
//this is going to be worked on by cyd

export default function LearningHome() {
    return <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600vh",
        }}
    >
        <LearningNavbar />
        <div>
            <h1 className="mt-16">This is the learning page</h1>
        </div>
    </div>
}