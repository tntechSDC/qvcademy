import React from 'react';
import background from "../images/background_no_text.jpg";
import Navbar from "../components/navbarPresentation.js";
import placeholder1 from "../images/placeholder1.jpg";
import placeholder2 from "../images/placeholder2.jpg";

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
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">qvcademy is an organization dedicated to the principle of lifelong learning, <b><i>efficiently.</i></b></p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">As students, we realized there are very few resources dedicated to help developers,<br /> who already know how to code,<br /> to learn new languages for their <br /> <b>next project!</b></p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">Introducing our solution, <b>qvcademy.</b></p>
                </div>
                <img src={placeholder1} alt="placeholder" className="hidden xl:block rounded-full"></img>
            </div>
       </div>
        
       <div className="pl-16 md: pl-32 pr-24 pt-32">
            <div className="text-left md:text-right">
                <h1 className="text-yellow text-4xl md:text-7xl font-mono pt-16">Our Mission</h1>
            </div>
            <div className="flex md:space-x-52">
                {/*this placeholder should be a gif of programming at least a minute long */}
                <img src={placeholder2} alt="placeholder" className="hidden xl:block rounded-full"></img>
                <div className="text-left">
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">Here at qvcademy, our main goal is to provide you with an environment to learn and grow.</p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">We want you to be able to learn <i>any</i> programming language in a single evening. </p>
                    <p className="text-yellow text-xl md:text-2xl font-sans pt-8">Whether you’re preparing for an interview or just simply working on a new project, we’ve got your back!</p>
                </div>
            </div>
        </div>
        
        <div className="text-center pt-64">
            <h1 className="text-yellow text-5xl md:text-8xl font-mono">How We Can Help <i>You</i></h1>
        </div>

        <div className=" pl-8 md:pl-56 pt-16 text-xl text-yellow text-left">
                <ul className="list-disc ml-4">
                    <li>Free Learning Resources for Individuals</li>
                    <li>Coding Problems to Reinforce Language Concepts</li>
                    <li>
                        Currently Offering 11 Programming Languages Including:
                        <ul className="list-disc ml-8">
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>Swift</li>
                            <li>Ruby</li>
                            <li>Dart</li>
                            <li>Lua</li>
                        </ul>
                    </li>
                </ul>
        </div>

        <div className="pt-32 text-yellow md:pt-48 pl-16 text-left md:text-pink">
            <h1 className="text-4xl md:text-6xl font-mono">Contact Us</h1>
            <div className="pt-8"></div>
            <ul className="list-disc ml-4">
                <li>Company Contact: Quinn Morrison</li>
                <li>Office Phone: 123-200-2000</li>
                <li>Business Email: inquiries@qvcademy.org</li>
            </ul>
        </div>

        <hr className="w-full border-t border-yellow my-8 md:border-pink" />
        
    </div>
}