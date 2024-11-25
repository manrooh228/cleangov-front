import React from "react";
import "../css/RightMenu.css"

const RightMenu = () => {



    return (
        <>
        <div className="right-menu-main">
            <div className="right-menu-panel">
              <h1>CleanGov</h1>
              <hr></hr>
            </div>
            <div className="right-menu-panel">
                <h2>Select a City(In Work)</h2>
                <hr></hr>
            </div>
            <div className="right-menu-panel">
                <h2>Preferences</h2>
                <hr></hr>
            </div>
            <div className="right-menu-panel">
                <h2>Write a Report</h2>
                <hr></hr>
            </div>
            <div className="right-menu-panel">
                <h2>Used Materials</h2>
                <hr></hr>
            </div>  
            <div className="right-menu-panel">
                <h2>About Us</h2>
            </div>
        </div>
        </>
    )
}

export default RightMenu;