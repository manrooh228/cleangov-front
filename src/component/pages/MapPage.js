import React, { useState, useEffect } from "react";
import '../css/MapPage.css'
import LeftInvestigationsPanel from './LeftInvestigationsPanel';
import { useNavigate } from "react-router-dom";
// import RightMenu from "./RightMenu";
import Profile from "./Profile";
import { useUser } from "../../api/context/UserProfile";
import { useTranslation } from "react-i18next";
import RightMenu from "./RightMenu";

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

const MapPage = () => {
  // Координаты маркеров
  const { t } = useTranslation();
  const { user } = useUser();
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showMaterials, setShowMaterials] = useState(true);

  const toggleMaterials = () => {
    console.log("handleMaterials called");
    setShowMaterials((prev) => !prev);
  };

  const markers = [
    { id: 1, x: "35%", y: "30%" },
    { id: 2, x: "40%", y: "50%" },
    { id: 3, x: "60%", y: "20%" },
  ];
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleInvestigClick = () => {
      navigate("/investigations");
  };  

  const handleTutorialClick = () => {
      navigate("/tutorial");
  };

  const handleLoginClick = () => {        
      navigate("/login", { replace: true });
  }  

  const handleMapClick = () => {    
      navigate("/map");
  }    

  const handleUserClick = () => {
    if(showProfilePanel){
      setShowProfilePanel(false);
      setShowLeftPanel(true);
      setShowRightPanel(false);
    } else {
      setShowProfilePanel(true);
      setShowLeftPanel(false);
      setShowRightPanel(false);
    }
  }

  const handleMenuClick = () => {
    if(showRightPanel){
      setShowLeftPanel(true);
      setShowRightPanel(false);
    } else {
      setShowProfilePanel(false);
      setShowLeftPanel(false);
      setShowRightPanel(true);
    }
  }

  return (
    <>
    <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <h1>CleanGOV</h1>
                </div>
                {isMobile ?(
                    <div className="menu">
                        <h1 onClick={handleMapClick}><i className='bx bx-map-alt'></i></h1>
                        <h1 onClick={handleInvestigClick}><i className='bx bx-task'></i></h1>
                        <h1 onClick={handleTutorialClick}><i className='bx bxs-book-alt'></i></h1>
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

    {showLeftPanel && (<LeftInvestigationsPanel />)}
    
    {showRightPanel && (
        <RightMenu showMaterials={showMaterials} toggleMaterials={toggleMaterials} />
      )}

    {showProfilePanel && (<Profile />)}

    <div className="map-container">
      <img src={require("../img/map.jpg")} alt="City Map" className="map-image" />
      <div className="map-overlay"></div> 
      {markers.map((marker) => (
        <button
          key={marker.id}
          className="map-marker"
          style={{
            top: marker.y,
            left: marker.x,
          }}
          onClick={() => alert(`Маркер ${marker.id} был нажат!`)}
        >
          •
        </button>
      ))}
    </div>
    </>
  );
};

export default MapPage;

