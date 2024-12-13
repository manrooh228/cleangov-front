import React, { useState, useEffect } from "react";
import { getAvailableInvestigations, getTasksWithProgress } from "../../api/InvestigationsService";
import "../css/LeftInvestigationsPanel.css";
import { useUser } from "../../api/context/UserProfile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const LeftInvestigationsPanel = () => {
    const { t } = useTranslation();
    const navigate  = useNavigate();
    const { user } = useUser(); // Получаем данные пользователя из контекста
    const [availableInvestigations, setAvailableInvestigations] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    const [showOngoing, setShowOngoing] = useState(false);

    useEffect(() => {
        if (!user || !user.id) {
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
                const data = await getTasksWithProgress(user.id);
                setOngoingTasks(data);
            } catch (error) {
                console.error("Error fetching investigations with progress:", error);
            }
        };

        fetchAvailableInvestigations();
        fetchOngoingInvestigations();
    }, [user]);
    const handleStartClick = (investigationId) => {
        navigate(`/tasks/${investigationId}`);
    };
    return (
        <div className="inv-leftpanel-main">
            {(!user || !user.id) ? (
                alert('User not logged in. Investigations not available')
            ) : (
                <>
                    <div
                        className="left-panel"
                        onMouseEnter={() => setShowAvailable(true)}
                        onMouseLeave={() => setShowAvailable(false)}
                    >
                        <h3>{t("left-panel.avail")}</h3>
                        {showAvailable && (
                            <ul>
                                {availableInvestigations.length > 0 ? (
                                    availableInvestigations.map((investigation) => (
                                        <li onClick={() => handleStartClick(investigation.id)} key={investigation.id}>{investigation.name}</li>
                                    ))
                                ) : (
                                    <li>{t("left-panel.no-avail")}</li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div
                        className="left-panel"
                        onMouseEnter={() => setShowOngoing(true)}
                        onMouseLeave={() => setShowOngoing(false)}
                    >
                        <h3>{t("left-panel.ong")}</h3>
                        {showOngoing && (
                            <ul>
                                {ongoingTasks.length > 0 ? (
                                    ongoingTasks.map((task) => (
                                        <li key={task.id}>{task.name}</li>
                                    ))
                                ) : (
                                    <li>{t("left-panel.no-ong")}</li>
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
