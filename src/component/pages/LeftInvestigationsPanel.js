import React, { useState, useEffect } from "react";
import { getAvailableInvestigations, getInvestigationsWithProgress } from "../../api/InvestigationsService";
import "../css/LeftInvestigationsPanel.css";
import { useUser } from "../../api/context/UserProfile";

const LeftInvestigationsPanel = () => {
    const { user } = useUser(); // Получаем данные пользователя из контекста
    const [availableInvestigations, setAvailableInvestigations] = useState([]);
    const [ongoingInvestigations, setOngoingInvestigations] = useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    const [showOngoing, setShowOngoing] = useState(false);

    useEffect(() => {
        if (!user || !user.id) {
            console.warn("User ID is null or undefined. Investigations cannot be loaded.");
            return;
        }

        // Загружаем доступные дела
        const fetchAvailableInvestigations = async () => {
            try {
                const data = await getAvailableInvestigations();
                setAvailableInvestigations(data);
            } catch (error) {
                console.error("Error fetching available investigations:", error);
            }
        };

        // Загружаем дела с прогрессом
        const fetchOngoingInvestigations = async () => {
            try {
                const data = await getInvestigationsWithProgress(user.id);
                setOngoingInvestigations(data);
            } catch (error) {
                console.error("Error fetching investigations with progress:", error);
            }
        };

        fetchAvailableInvestigations();
        fetchOngoingInvestigations();
    }, [user]);

    return (
        <div className="inv-leftpanel-main">
            {(!user || !user.id) ? (
                <div className="left-panel">
                    <h3>User not logged in</h3>
                    <p>Investigations are not available. Please log in.</p>
                </div>
            ) : (
                <>
                    <div
                        className="left-panel"
                        onMouseEnter={() => setShowAvailable(true)}
                        onMouseLeave={() => setShowAvailable(false)}
                    >
                        <h3>Available investigations</h3>
                        {showAvailable && (
                            <ul>
                                {availableInvestigations.length > 0 ? (
                                    availableInvestigations.map((investigation) => (
                                        <li key={investigation.id}>{investigation.name}</li>
                                    ))
                                ) : (
                                    <li>No available investigations</li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div
                        className="left-panel"
                        onMouseEnter={() => setShowOngoing(true)}
                        onMouseLeave={() => setShowOngoing(false)}
                    >
                        <h3>Ongoing investigations</h3>
                        {showOngoing && (
                            <ul>
                                {ongoingInvestigations.length > 0 ? (
                                    ongoingInvestigations.map((investigation) => (
                                        <li key={investigation.id}>{investigation.name}</li>
                                    ))
                                ) : (
                                    <li>No ongoing investigations</li>
                                )}
                            </ul>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default LeftInvestigationsPanel;
