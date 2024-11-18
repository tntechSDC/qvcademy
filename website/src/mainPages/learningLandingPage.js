import React from 'react';
import LearningNavbar from '../components/learningNav';
import background from "../images/LearningLandingPage_background.jpg";
import SideNav from '../components/learningSideNavs';
//this is going to be worked on by cyd

export default function LearningHome() {
    return <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        }}
    >
        <LearningNavbar />
        <div className="flex">
            <div className="mt-16">
                <SideNav />
            </div>
            <div className="text-left pl-32 md:pl-48 pt-16">
                <h1 className="mt-16 text-teal text-8xl md:text-8xl font-sans">Welcome!</h1>
                <h2 className="text-pink text-2xl md:text-5xl font-sans font-light pt-8">Try Something New</h2>
            </div>
        </div>
        {/* I am struggling to get the "Have Fun!" text at the bottom of the screen (at least on my display)*/}
        <div className="flex flex-col justify-end h-80"> {/*Searched this up to try, but only goes so far down*/ }
            <div className="text-center">
                {/*Also would like som eclarification on what mostly the "md:" part means, I am trying to figure the rest*/}
              <h1 className="text-pink text-2xl md:text-4x1 font-sans font-light pt-8">Have Fun!</h1> 
            </div>
        </div>
    </div>
}