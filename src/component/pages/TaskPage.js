import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/TasksPage.css"; // Добавьте стили при необходимости
import { getTasksWithProgress } from "../../api/TasksService";
import Header from "./Header";
import { useUser } from "../../api/context/UserProfile.js";

const TaskPage = () => {
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

    return (
        <>
            <Header />
            <div className="tasks-page">
                <h1>Tasks for Investigation #{investigationId}</h1>
                <div className="tasks-list">
                    {tasks.map((task, index) => (
                        task.taskType === 'video' ? (
                            <div key={index}>
                                <h3>Video Task: {task.name}</h3>
                                <p>{task.description}</p>
                             </div>
                        ) :
                        task.taskType === 'test' ? (
                            <div key={index}>
                                <h3>Test Task: {task.name}</h3>
                                <p>{task.description}</p>
                            </div>
                        ) :
                        task.taskType === 'reflexio' ? (
                            <div key={index}>
                                <h3>Reflection Task: {task.name}</h3>
                                <p>{task.description}</p>
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
