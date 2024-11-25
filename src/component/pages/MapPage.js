import React, { useState, useEffect } from "react";
import '../css/MapPage.css'
import LeftInvestigationsPanel from './LeftInvestigationsPanel';
import { useNavigate } from "react-router-dom";
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
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(false);
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);//проверка на логин? если залогиненый то показывает кнопку
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

  const handleUserClick = () => {
    if(showRightPanel){
      setShowLeftPanel(true);
      setShowRightPanel(false);
    } else {
      setShowLeftPanel(false);
      setShowRightPanel(true);
    }
  }

  return (
    <>
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
                        <h1><i className="bx bxs-user-circle" onClick={handleUserClick}></i><i class='bx bx-menu'></i></h1>
                    ) : ( 
                        <h1 onClick={handleLoginClick}><i className="bx bx-user"></i> LOGIN</h1>
                    )}
                </div>
            </div>
    </div>

    {showLeftPanel && (<LeftInvestigationsPanel />)}
    
    {showRightPanel && (<RightMenu />)}

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