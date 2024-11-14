import React, { useState } from 'react';
import logo from "../images/qvcademy_logo_11_8.png";
import { NavLink } from "react-router-dom";
import axios from 'axios';
//quinn worked on this, ask me if you have questions on this code

export default function Register() {
    //initialize our form data that we will send to the back end
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    //for displaying validation errors
    const [error, setError] = useState('');

    //updates our form data whenever the user types in an input field
    const handleChange = (e) => {
        setFormData({
            //creates a copy of existing formData, basically makes sure only the target value gets update
            ...formData,
            //target.name selects the input field and matches it to the value's name. ie when input name=password is changed, update formData.password
            [e.target.name]: e.target.value
        });
    };

    //triggered when form is submitted
    const handleSubmit = async (e) => {
        //prevents default form submission (we don't want empty strings in the databse!!!!!)
        e.preventDefault();

        //checks to make sure that the passwords entered match up
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match'); // set error if passwords don't match
            return;
        }
        //try catch basically just means try to run this code and if theres an error, run this other code
        //
        try {
            //tries to send formData to the backend through axios (HTTP request library)
            const response = await axios.post('http://localhost:8000/api/register', formData);
            //if it succeeds, displays a success message using an alert
            alert(response.data.message);
            setError(''); //clear any previous errors
        } catch (err) {
            console.error('Error registering user:', err.response.data);
            alert(err.response.data.error || 'Registration failed');
        }
    }


    return (
        <div className="bg-gradient-to-r from-purple from-30% to-teal to-70% h-screen">
            <div className="flex justify-between">
                <div className="pl-48 pt-56">
                    <NavLink to="/">
                        <img src={logo} alt="Brand Logo" className="h-72 w-auto" />
                    </NavLink>
                </div>
                <div className="pt-32 pr-56 text-center">
                    <h1 className="text-purple text-5xl font-mono font-bold">Register</h1>
                    <h2 className="text-light-gray pt-2 font-bold">quick versatile coding starts here</h2>
                    
                    <label className="block text-left text-light-gray mb-2 mt-8 font-bold" htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        id="username"
                        className="border-2 border-light-gray bg-transparent p-2 rounded w-full font-bold focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                        placeholder="Pick your username"
                        required
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="Email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                        placeholder="Enter your email"
                        required
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                        placeholder="Choose a secure password"
                        required
                    />
                    <label className="block text-left text-light-gray mb-2 mt-2 font-bold" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="text"
                        id="confirmPassword"
                        className="border-2 border-light-gray bg-transparent font-bold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple text-light-gray"
                        placeholder="Confirm your secure password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
                    <button type="submit" className="bg-purple text-light-gray hover:bg-dark-purple font-bold mt-8 rounded w-1/2 h-10">
                        Sign Up
                    </button>
                    <p className="pt-8 text-purple text-xl font-bold">Already have an account?</p>
                    <NavLink to="/login" className="text-pink font-bold hover:text-purple mt-4">Login</NavLink>
                </div>
            </div>
        </div>
    )
}