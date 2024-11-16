import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/qvcademy_logo_11_8.png';
import styles from './css/loginPage.module.css';
import { useAuth } from '../AuthContext.js';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { signIn } = useAuth();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn(formData.email, formData.password);
    };

    return (
        <div id={styles.loginPageRoot}>
                <div className={styles.topLayerDiv} id={styles.leftTopLayerDiv}>
                    <div id={styles.leftTopDiv}>
                        <img src={logo} alt="qvcademy logo" id={styles.loginPageLogo}></img>
                    </div>
                    <div id={styles.signInWrapper}>
                        <div id={styles.signInWrapperChild1}>Sign In</div>
                        <div id={styles.signInWrapperChild2}>quick, versatile coding starts here</div>
                    </div>
                <form id={styles.loginForm} onSubmit={handleSubmit}>
                        <div id={styles.emailTextDiv} className={styles.inputText}>Email</div>
                        <div id={styles.emailInputWrapper} className={styles.inputWrapper}>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.inputs}></input>
                        </div>
                        <div id={styles.passwordTextDiv} className={styles.inputText}>Password</div>
                        <div id={styles.passwordInputWrapper} className={styles.inputWrapper}>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required className={styles.inputs}></input>
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