import React, { useState, useEffect } from "react";
import "../css/InvestigationList.css"
import Header from "./Header";
import { getInvestigationsWithProgress } from "../../api/InvestigationsService";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../api/context/UserProfile.js";

const InvestigationList = () => {
    const { user } = useUser();
    const [availableInvestigations, setAvailableInvestigations] = useState([]);

    useEffect(() => {
    if (!user || !user.id) {
        return;
    }

        // Загружаем доступные дела
        const fetchInvestigationsWithProgress = async () => {
            try {
                const data = await getInvestigationsWithProgress(user.id);
                setAvailableInvestigations(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching available investigations:", error);
            }
        };

        fetchInvestigationsWithProgress();
}, [user]);

    const navigate = useNavigate();
    
    // const invests = [
    //     {
    //         id: 1,
    //         name: 'Investigation in a bank',
    //         level: 'beginner',
    //         desc: 'Lorem inpsum adil prikol kuat bomba Lorem inpsum adil prikol kuat bomba Lorem inpsum adil prikol kuat bomba Lorem inpsum adil prikol kuat bomba',
    //         progress: 62
    //     },
    //     {
    //         id: 2,
    //         name: 'Investigation in a web company',
    //         level: 'middle',
    //         desc: 'Lorem inpsum adil prikol kuat bomba',
    //         progress: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Investigation in IT-company',
    //         level: 'professional',
    //         desc: 'Lorem inpsum adil prikol kuat bomba',
    //         progress: 100
    //     },
    //   ];
    
      const handleInvestListClick = () => {    
        navigate("/investigations");
    }    

    const handleStartClick = (investigationId) => {
        navigate(`/tasks/${investigationId}`);
    };
    

    return (
        <>
        <Header />
        {(!user || !user.id) ? (
            alert('User not logged in. Investigations not available')
            ) : (  
        <div className="investigations-page">
            <div className="main-container">
                <div className="title-container">
                    <h1>CITY I: Corruption</h1>
                    <div className="menu">
                        <button className="menu-inv-list" onClick={handleInvestListClick}><p>Investigations list</p></button>
                        <button className="menu-vid-mat"><p>Video materials</p></button>
                        <button className="menu-achiv"><p>Achievements</p></button>
                    </div>
                </div>
                <div className='investigations-list'>
                    {availableInvestigations.map((invest, index) => (
                        <div key={index} className="row">
                            <div className="investigation-name">
                                <h3>Investigation #{invest.investigation.id}</h3>
                                <h3>{invest.investigation.name}</h3>  
                            </div>
                            <div className={`investigation-level ${invest.investigation.level}`}>
                                    <h5>Level: {invest.investigation.level}</h5>
                            </div>
                            <div className="investigation-info-panel">
                                <div className="panel-title">
                                    <h5>About Investigation</h5>
                                </div>
                                <div className="panel-info">
                                    <h5>{invest.investigation.description}</h5>
                                </div>
                            </div>
                            <div className="investigation-progress-panel">
                                    <h4>Progress</h4>
                                    {(invest.progress) ? (
                                        <h3>0/100</h3>
                                    ) : (
                                        <h3>{invest.progress}/100</h3>
                                    )} 
                            </div>
                            <button className="inv-start" 
                            onClick={() => handleStartClick(invest.investigation.id)}><p>START</p></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            ) }

        
        </>
    )
}

export default InvestigationList;