import React, { useState, useEffect } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";
import { useUser } from "../../api/context/UserProfile";
// import LeftInvestigationsPanel from './LeftInvestigationsPanel';
import RightMenu from "./RightMenu";
import Profile from "./Profile";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const { user } = useUser();
    const isMobile = useIsMobile();
    const navigate = useNavigate();
    // const [showLeftPanel, setShowLeftPanel] = useState(true);
    const [showRightPanel, setShowRightPanel] = useState(false);
    const [showProfilePanel, setShowProfilePanel] = useState(false);

    const handleInvestigClick = () => {
        navigate("/investigations");
    };
    // const [isLoggedIn, setIsLoggedIn] = useState(false);//проверка на логин? если залогиненый то показывает кнопку
    // пока не доработан, по стоку false    

    const handleTutorialClick = () => {
        navigate("/tutorial");
    };

    const handleLoginClick = () => {    
        // setIsLoggedIn(true);
        navigate("/login", { replace: true });
    }  

    const handleMapClick = () => {    
        navigate("/map");
    }    

    const handleUserClick = () => {
        if(showProfilePanel){
          setShowProfilePanel(false);
        //   setShowLeftPanel(true);
          setShowRightPanel(false);
        } else {
          setShowProfilePanel(true);
        //   setShowLeftPanel(false);
          setShowRightPanel(false);
        }
      }
    
      const handleMenuClick = () => {
        if(showRightPanel){
        //   setShowLeftPanel(true);
          setShowRightPanel(false);
        } else {
          setShowProfilePanel(false);
        //   setShowLeftPanel(false);
          setShowRightPanel(true);
        }
      }
    

    return (
        <>
    {/* {showLeftPanel && (<LeftInvestigationsPanel />)} */}
    
    {showRightPanel && (<RightMenu />)}

    {showProfilePanel && (<Profile />)}
        <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <h1>CleanGOV</h1>
                </div>
                {isMobile ?(
                    <div className="menu">
                        <h1 onClick={handleMapClick}><i class='bx bx-map-alt'></i></h1>
                        <h1 onClick={handleInvestigClick}><i class='bx bx-task'></i></h1>
                        <h1 onClick={handleTutorialClick}><i class='bx bxs-book-alt'></i></h1>
                    </div>
                ) : (
                    <div className="menu">
                        <h1 onClick={handleMapClick}>{t('header.map')}</h1>
                        <h1 onClick={handleInvestigClick}>{t('header.investigations')}</h1>
                        <h1 onClick={handleTutorialClick}>{t('header.tutorial')}</h1>
                    </div>
                )}
                <div>
                    {user ? (
                        <h1><i className="bx bxs-user-circle" onClick={handleUserClick}></i><i className='bx bx-menu' onClick={handleMenuClick}></i></h1>
                    ) : ( 
                        <h1 onClick={handleLoginClick}><i className="bx bx-user"></i> LOGIN</h1>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;