import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const handleInvestigClick = () => {
        // navigate("/investigations");
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);//проверка на логин? если залогиненый то показывает кнопку
    // пока не доработан, по стоку false

    const handleTutorialClick = () => {
        // navigate("/tutorial");
    };

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        navigate("/login", { replace: true });
    }   


    return (
        <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <h1>CleanGov</h1>
                </div>
                <div className="menu">
                    <h1>Map</h1>
                    <h1 onClick={handleInvestigClick()}>Investigations</h1>
                    <h1 onClick={handleTutorialClick()}>Tutorial</h1>
                </div>
                <div>
                    {isLoggedIn ? (
                        <h1><i className="bx bxs-user-circle" style={{marginLeft: 50, fontSize: 50}}></i><i class='bx bx-menu' style={{marginLeft: 10, fontSize: 50}}></i></h1>
                    ) : (
                        <h1 onClick={handleLoginClick}><i className="bx bx-user"></i> LOGIN</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;