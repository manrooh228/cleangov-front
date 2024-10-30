import { Link } from "react-router-dom";
import "../css/Login.css";
import React from 'react';

const Register = () => {
    return (
        <div className="LoginPage">
            <div className="wrapper">
                <h2>REGISTER</h2>
                <form action = "#">
                    <div className = "input-box">
                        <input type='text' placeholder='Enter your username' required />
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Enter your password'  required />
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Confirm your password'  required />
                    </div>
                    <div className = "policy">
                        <input type='checkbox' />
                        <h3>I accept terms & conditions</h3>
                    </div>
                    <div className="input-box button">
                        <input type="submit" value="Register" />
                    </div>
                    <div className='text'>
                        <h3>Already have an account? <Link to="/login"><a>LOGIN</a></Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register