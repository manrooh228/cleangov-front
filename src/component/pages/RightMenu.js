import React from "react";
import "../css/RightMenu.css"
import "../css/Materials.css"

const RightMenu = ({ showMaterials, toggleMaterials }) => {
    console.log("RightMenu rendered");

    return (
      <>
      <div className="right-menu-main">
      <div className="right-menu-head">
        <h1>CleanGOV</h1>
      </div>
      <div className="right-menu-panel">
          <h2>Select a City (In Work)</h2>
      </div>
      <div className="right-menu-panel1">
          <h2>Preferences</h2>
      </div>
      <div className="right-menu-panel">
          <h2>Write a Report</h2>
      </div>
      <div className="right-menu-panel" onClick={toggleMaterials}>
          <h2>Used Materials</h2>
      </div>  
      <div className="right-menu-panel">
          <h2>About Us</h2>
      </div>
  </div>
  
    {showMaterials && (
    <div key="materials" className="materials-main-panel">
        <h1>Materials</h1>
    </div>
    )}

  </>
    )};
  

export default RightMenu;