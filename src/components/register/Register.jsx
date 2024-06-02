import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = async e => {
        e.preventDefault();
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && password === reEnterPassword) {
            try {
                const res = await axios.post("http://localhost:9002/register", user); // Ensure this matches your backend port
                alert(res.data.message);
                navigate("/login");
            } catch (error) {
                console.error("Registration failed:", error);
                alert("Registration failed. Please try again.");
            }
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={register}>
                <input 
                    type="text" 
                    name="name" 
                    value={user.name} 
                    placeholder="Your Name" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    placeholder="Your Email" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={user.password} 
                    placeholder="Your Password" 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="reEnterPassword" 
                    value={user.reEnterPassword} 
                    placeholder="Re-enter Password" 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" className="button">Register</button>
            </form>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    );
}

export default Register;
