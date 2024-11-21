import React, { useState, useEffect } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile; 
  };

const Header = () => {
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const handleInvestigClick = () => {
        navigate("/investigations");
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);//проверка на логин? если залогиненый то показывает кнопку
    // пока не доработан, по стоку false    

    const handleTutorialClick = () => {
        navigate("/tutorial");
    };

    const handleLoginClick = () => {    
        setIsLoggedIn(true);
        navigate("/login", { replace: true });
    }  

    const handleMapClick = () => {    
        navigate("/map");
    }    


    return (
        <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <h1>CleanGov</h1>
                </div>
                {isMobile ?(
                    <div className="menu">
                        <h1 onClick={handleMapClick}><i class='bx bx-map-alt'></i></h1>
                        <h1 onClick={handleInvestigClick}><i class='bx bx-task'></i></h1>
                        <h1 onClick={handleTutorialClick}><i class='bx bxs-book-alt'></i></h1>
                    </div>
                ) : (
                    <div className="menu">
                        <h1 onClick={handleMapClick}>Map</h1>
                        <h1 onClick={handleInvestigClick}>Investigations</h1>
                        <h1 onClick={handleTutorialClick}>Tutorial</h1>
                    </div>
                )}
                <div>
                    {isLoggedIn ? (
                        <h1><i className="bx bxs-user-circle"></i><i class='bx bx-menu'></i></h1>
                    ) : (
                        <h1 onClick={handleLoginClick}><i className="bx bx-user"></i> LOGIN</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;