import React, { useState, useEffect } from "react";
import { getAvailableInvestigations, getInvestigationsWithProgress } from "../../api/InvestigationsService";
import "../css/LeftInvestigationsPanel.css";

const LeftInvestigationsPanel = ({ userId }) => {

    return (
        <div className="inv-leftpanel-main">
            <div className="left-panel">
                <h3>Available investigations</h3>
            </div>
            <div className="left-panel">
                <h3>Ongoing investigations</h3>
            </div>
        </div>
    );
}

export default LeftInvestigationsPanel;