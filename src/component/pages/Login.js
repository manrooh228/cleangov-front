import React from 'react';
import "../css/Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="LoginPage">
            <div className="wrapper">
                <h2>LOGIN</h2>
                <form action = "#">
                    <div className = "input-box">
                        <input type='text' placeholder='Enter your username' required />
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Enter your password'  required />
                    </div>
                    <div className = "policy">
                        <input type='checkbox' />
                        <h3>I accept terms & conditions</h3>
                    </div>
                    <div className="input-box button">
                        <input type="submit" value="LOGIN" />
                    </div>
                    <div className='text'>
                        <h3>Dont have an account? <a>Register</a></h3>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login