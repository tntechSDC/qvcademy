import React from 'react';
import Navbar from "../components/navbarPresentation.js";
import logo from "../images/qvcademy_logo_11_8.png";
import styles from './css/register.module.css';

export default function donatePage() {
    return (
        <div className="flex h-screen w-screen flex-col" id={styles.overallDiv}>
            <Navbar/>
            <div className="flex flex-row h-screen w-screen text-light-gray">
                <div className='w-3/6 h-screen flex flex-col items-center'>
                    <p className='text-center h-2/6 font-sans text-4xl' id={styles.leftTopDiv}><strong>DONATE!</strong></p>
                    <img alt="Placeholder" className='h-3/6  w-1/2 border-4 border-black'></img>
                </div>
                <div className='flex w-3/6 h-screen flex-col align-middle'>
                    <div className='flex h-3/6 justify-center' id={styles.rightTopDiv}>
                        <p className='text-center text-6xl font-sans' id={styles.help}>
                            Help Our Cause!
                        </p>
                    </div>
                    <div className='flex h-3/6 justify-center'>
                        <a href="" className='text-center h-fit text-5xl font-sans underline text-teal' id={styles.donateLink}><em>Donate today</em></a>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
