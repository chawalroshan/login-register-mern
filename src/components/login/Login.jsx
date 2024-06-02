import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = e => {
        e.preventDefault(); // Prevent default form submission
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                navigate("/");
            })
            .catch(error => {
                console.error("Login failed:", error);
                alert("Login failed. Please try again.");
            });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <input 
                    type="text" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange} 
                    placeholder="Enter your Email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={user.password} 
                    onChange={handleChange}  
                    placeholder="Enter your Password" 
                    required 
                />
                <button type="submit" className="button">Login</button>
            </form>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    );
}

export default Login;
