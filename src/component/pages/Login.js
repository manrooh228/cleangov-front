import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate} from 'react-router-dom';
import { login } from "../../api/UserService.js";
import Header from "./Header.js";
import { useUser } from "../../api/context/UserProfile.js";

const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setUser } = useUser();

    setUser(null); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login({ username, password });
    
        if (response.success) {
            setUser(response.user); // Сохраняем объект пользователя в контекст
            navigate("/");
        } else {
            setError(response.error);
        }
    };    

    return (
        <>
        <div className="LoginPage">
            <div className="wrapper">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className = "input-box">
                        <input type='text' placeholder='Enter your username' required
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Enter your password'  required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-box button">
                        <input type="submit" value="LOGIN" />
                    </div>
                    <div className='text'>
                        <h3>Dont have an account? <Link to="/register"><a>Register</a></Link></h3>
                        {error && <h3 style={{ color: "red" }}>{error}</h3>}
                    </div>
                </form>
            </div>
        </div>
        </>
    )
};

export default Login