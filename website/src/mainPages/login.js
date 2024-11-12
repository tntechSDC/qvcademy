import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/qvcademy_logo_11_8.png';
import styles from './css/loginPage.module.css';


//the bg-gradient is for setting background colors, the h-screen is neccessary to cover the entire height of the screen
//then flex justify-between creates a row with the two nested div elements
//the h1 tag is just there as a place holder for your code for the login, that's where the password and email/username should go 
//you can copy the code from the register screen under /mainPages/register.js for the input fields and labels
//for spacing, use padding and margin in tailwind docs, look at other code in register page or contact quinn for support

export default function Login() {
    return (
        <div id={styles.loginPageRoot}>
                <div className={styles.topLayerDiv} id={styles.leftTopLayerDiv}>
                    <div id={styles.leftTopDiv}>
                        <img src={logo} alt="qvcademy logo" id={styles.loginPageLogo}></img>
                    </div>
                    <div id={styles.signInWrapper}>
                        <div id={styles.signInWrapperChild1}>Sign In</div>
                        <div id={styles.signInWrapperChild2}>Quick, versatile coding starts here</div>
                    </div>
                    <form id={styles.loginForm}>
                        <div id={styles.emailTextDiv} className={styles.inputText}>Email</div>
                        <div id={styles.emailInputWrapper} className={styles.inputWrapper}>
                            <input type="email" className={styles.inputs}></input>
                        </div>
                        <div id={styles.passwordTextDiv} className={styles.inputText}>Password</div>
                        <div id={styles.passwordInputWrapper} className={styles.inputWrapper}>
                            <input type="password" className={styles.inputs}></input>
                        </div>
                        <div id={styles.loginOptionsWrapper}>
                            <div id={styles.rememberMeWrapper}>
                                <input type="checkbox" name="Remember Me" id={styles.rememberMe}></input>
                                <label for={styles.rememberMe}>Remember Me</label>
                            </div>
                            
                            <div id={styles.forgotPassword}><a href="" id={styles.forgotPasswordAnchor}>Forgot Password?</a></div>
                        </div>
                        <div id={styles.submitButtonWrapper}>
                            <input type="submit" value="Sign In" id={styles.submitButton}></input>
                        </div>
                    </form>
                    <div>
                        <div>or sign in another way?</div>
                    </div>
                    <div id={styles.altSignInWrapper}>
                        <img alt="*"></img>
                        <img alt="*"></img>
                        <img alt="*"></img>
                        <img alt="*"></img>
                    </div>
                    <div id={styles.noAccount}>
                        Don't have an account? <a href="" id={styles.signupPageAnchor}>Click here to sign up.</a>
                    </div>
                </div>
                <div className={styles.topLayerDiv} id={styles.rightTopLayerDiv}></div>
            </div>
        /*<div className="bg-gradient-to-r from-teal from-50% to-purple  h-screen">
            <div className="flex justify-between">
                <div> 
                    <h1>This is where the login info goes</h1>
                </div>
                <div className="pr-48 pt-56">
                    <NavLink to="/">
                        <img src={logo} alt="Brand Logo" className="h-72 w-auto" />
                    </NavLink>
                </div>
            </div>
        </div>*/
    )
}