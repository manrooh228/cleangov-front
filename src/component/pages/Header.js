import React from "react";
import "../css/Header.css"
import { Navigate } from "react-router-dom";
const Header = () => {
    
    const handleInvestigClick = () => {
        // navigate("/investigations");
    };

    const handleTutorialClick = () => {
        // navigate("/tutorial");
    };

    return (
        <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <h1>CleanGov</h1>
                </div>
                <div className="menu">
                    <h1>City Map</h1>
                    <h1 onClick={handleInvestigClick()}>Investigations</h1>
                    <h1 onClick={handleTutorialClick()}>Tutorial</h1>
                </div>
                <div>
                    <h1><i className='bx bx-user'></i> LOGIN</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;