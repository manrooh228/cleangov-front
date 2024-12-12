import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Profile.css"
import "../css/Achievement.css"
import { useUser } from "../../api/context/UserProfile";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "../../api/API_BASE_URL";

const Profile = () => {
    const { user, setUser } = useUser();
    const [showAchievements, setShowAchievements] = useState(false);
    const [achievements, setAchievements] = useState([]);
    const { t } = useTranslation();

    const handleAchievemntClick = () => {
        setShowAchievements((prev) => !prev);
    };

    const handleLogout = () => {
        window.location.href = "/login";
    };
    useEffect(() => {
        // Запросить достижения пользователя с сервера
        const fetchAchievements = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/achievements/${user.id}/achievements`);
                setAchievements(response.data);
            } catch (error) {
                console.error("Error fetching achievements:", error);
            }
        };

        if (user) {
            fetchAchievements();
        }
    }, [user]);

    // Проверка, получил ли пользователь конкретную ачивку
    const hasAchievement = (achievementName) => {
        return achievements.some((ach) => ach.name === achievementName && ach.achieved);
    };

    return (
        <>
            <div className="profile-main-panel">
                <div className="profile-user-panel">
                    <div className="profile-user-pic"><i className='bx bxs-user-circle'></i></div>
                    <div className="progile-user-info">
                        <h2>{user.username}</h2>
                        <h3>{user.name} {user.surname}</h3>
                    </div>
                </div>
                <div className="profile-button" onClick={handleAchievemntClick}>
                    <h2>{t("investigation-list.achivements")}</h2>
                </div>
                <div className="profile-button">
                    <h2>{t("profile.edit")}</h2>
                </div>
                <div className="profile-button">
                    <h2>{t("profile.req")}</h2>
                </div>
                <div className="profile-button" onClick={handleLogout}>
                    <h2>{t("profile.log-out")}</h2>
                </div>
            </div>

            {showAchievements && (
                <div className="achieves-main-panel">
                    <div className="achieves-title-panel">
                        <h1>Achivements</h1>
                    <div className="krestik">    
                        <h1 onClick={handleAchievemntClick}>x</h1>
                        </div>
                    </div>
                    <div className="achieves-list">
                        <div className="achivement-item">
                            <img 
                                src={require(`../img/achievement-1${hasAchievement("The young investigator") ? "-true" : ""}.png`)} 
                                alt="The young investigator" 
                                className="image" 
                            />
                            <h4>The young investigator</h4>
                        </div>
                        <div className="achivement-item">
                            <img 
                                src={require(`../img/achievement-2${hasAchievement("The young geek") ? "-true" : ""}.png`)} 
                                alt="The young geek" 
                                className="image" 
                            />
                            <h4>The young geek</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
