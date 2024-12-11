import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/TasksPage.css"; // Добавьте стили при необходимости
import { getTasksWithProgress } from "../../api/TasksService";
import Header from "./Header";
import { useUser } from "../../api/context/UserProfile.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../api/API_BASE_URL.js";

const TaskPage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { investigationId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user || !user.id) {
            setError("User not logged in");
            return;
        }

        const fetchTasks = async () => {
            try {
                const data = await getTasksWithProgress(investigationId, user.id);
                setTasks(data);
            } catch (err) {
                setError("Failed to load tasks.");
                console.error(err);
            }
        };

        fetchTasks();
    }, [investigationId, user]);

    if (error) {
        return <div>{error}</div>;
    }

    const fetchTestId = async (taskId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/tests/task/${taskId}`);
            if (response.data && response.data.length > 0) {
                return response.data[0].id; // Возвращаем id первого теста
            } else {
                console.error("No test found for this task.");
            }
        } catch (error) {
            console.error("Failed to fetch test ID:", error);
        }
    };
    
    
    // Вызовите fetchTestId при нажатии кнопки
    const handleStartTest = async (taskId) => {
        const testId = await fetchTestId(taskId);
        if (testId) {
            navigate(`/tests/${testId}`);
        } else {
            console.error("Test ID is not available for this task.");
        }
    };
    return (
        <>
            <Header />
            <div className="tasks-page">
                <div className="tasks-page-title">
                <h1>Tasks for Investigation #{investigationId}</h1>
                </div>
                <div className="tasks-list">
                    {tasks.map((task, index) => (
                        task.taskType === 'video' ? (
                            // <div key={index}>
                            //     <h3>Video Task: {task.name}</h3>
                            //     <p>{task.description}</p>
                            //  </div>

                            <div className="video-main-panel">
                                <div className="video-main-title">
                                    <h2>Task One</h2>
                                    <h2>{task.name}</h2>
                                </div> 
                                <div className="video-description-panel">
                                    <div className="panel-title">
                                        <h4>Theoretical video</h4>
                                    </div>
                                    <div className="panel-info">
                                        <h4>{task.description}</h4>
                                    </div>
                                </div>
                                <div className="video-completed-panel">
                                    <div className="panel-title">
                                        <h4>Completed?</h4>    
                                    </div>
                                    <div className="checkbox">
                                    {task.progress === 100 ? (
                                        <button className="completed?"><i className='bx bx-check'></i></button>
                                    ) : (
                                        <button className="completed?"><i className='bx bx-x'></i></button>
                                    )}
                                    </div>
                                </div>
                                {task.progress !== 100 && (
                                    <button className="inv-start"><p>START</p></button>
                                )}
                            </div>
                        ) :
                        task.taskType === 'test' ? (
                            <div className="video-main-panel">
                                <div className="video-main-title">
                                    <h2>Task Two</h2>
                                    <h2>{task.name}</h2>
                                </div> 
                                <div className="video-description-panel">
                                    <div className="panel-title">
                                        <h4>A test for verification knowledge</h4>
                                    </div>
                                    <div className="panel-info">
                                        <h4>{task.description}</h4>
                                    </div>
                                </div>
                                <div className="video-completed-panel">
                                    <div className="panel-title">
                                        <h4>Completed?</h4>    
                                    </div>
                                    <div className="checkbox">
                                    {task.progress === 100 ? (
                                        <button className="completed?"><i className='bx bx-check'></i></button>
                                    ) : (
                                        <button className="completed?"><i className='bx bx-x'></i></button>
                                    )}
                                    </div>
                                </div>
                                <div className="result-panel">
                                    <div className="panel-title">
                                        <h4>Your score</h4>    
                                    </div>
                                    <div className="result">
                                        <h4>100/100</h4> {/* vremenno */}
                                    </div>
                                </div>
                                {task.progress !== 100 && (
                                    <button className="inv-start" onClick={() => handleStartTest(task.id)}><p>START</p></button> //при нажатии начать тест
                                )}
                            </div>

                        ) :
                        task.taskType === 'reflexio' ? (
                            <div className="video-main-panel">
                                <div className="video-main-title">
                                    <h2>Task three</h2>
                                    <h2>{task.name}</h2>
                                </div> 
                                <div className="video-description-panel">
                                    <div className="panel-title">
                                        <h4>Reflections on this investigation</h4>
                                    </div>
                                    <div className="panel-info">
                                        <h4>{task.description}</h4>
                                    </div>
                                </div>
                                {task.progress !== 100 && (
                                    <button className="inv-start"><p>START</p></button>
                                )}
                            </div>
                        ) : (
                            <div></div>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default TaskPage;
