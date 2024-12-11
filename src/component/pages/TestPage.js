import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../../api/context/UserProfile.js";
import { API_BASE_URL } from "../../api/API_BASE_URL.js";
import { useNavigate } from "react-router-dom";
import "../css/TestPage.css";

const TestPage = () => {
    const { testId } = useParams();
    const { user } = useUser();
    const [userId] = useState(user.id);
    const [questions, setQuestions] = useState([]); // Инициализируем как пустой массив
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        const fetchTaskId = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/tests/${testId}`);
                setTaskId(response.data.task.id);  // Извлекаем taskId из ответа
            } catch (error) {
                console.error("Failed to fetch task ID:", error);
                alert("Тест с таким ID не найден.");
            }
        };        
    
        fetchTaskId();
    }, [testId]);
    
    // Получение вопросов для теста
    useEffect(() => {
        const fetchQuestionsWithAnswers = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/tests/${testId}/questions-with-answers`);
                setQuestions(response.data); // Убедитесь, что данные - это массив
            } catch (error) {
                console.error("Failed to fetch questions:", error);
            }
        };

        fetchQuestionsWithAnswers();
    }, [testId]);

    // Обработчик выбора ответа
    const handleAnswerSelect = (questionId, answerId) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

const handleSubmit = async () => {
    let correctAnswers = 0;

    const unansweredQuestions = questions.filter(
        question => !answers.hasOwnProperty(question.id)
    );
    if (unansweredQuestions.length > 0) {
        alert("Пожалуйста, ответьте на все вопросы перед отправкой.");
        return;
    }

    questions.forEach(question => {
        const correctAnswer = question.answers.find(answer => answer.correct);
        if (correctAnswer && answers[question.id] === correctAnswer.id) {
            correctAnswers += 1;
        }
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(percentage);

    try {
        const result = {
            test: { id: testId }, // Отправляем ID теста
            user: { id: userId }, // Отправляем ID пользователя
            successPercentage: percentage,
        };

        await axios.post(`${API_BASE_URL}/tests/save-result`, result); // Отправка объекта

        const progress = {
            userId,
            taskId, 
            progress: 100,
        };


        await axios.post(`${API_BASE_URL}/progress/update`, progress); // Обновляем прогресс
        setIsSubmitted(true);
    } catch (error) {
        console.error("Error submitting test result:", error);
    }
};

        

    if (isSubmitted) {
        navigate('/investigations')
        alert(`Ваш ${score} результат!`)
    }

    return (
        <div className="test-page">
            <div className="title-container">
                <h2>A test for verification knowledge</h2>
            </div>
            <div className="ans-quest-container">
            {Array.isArray(questions) && questions.length > 0 ? (
                questions.map(question => (
                    <div key={question.id} className="main-container">
                        <div className="question">
                            <h3>{question.textRu}</h3>
                        </div>
                        <ul>
                            {question.answers.map(answer => (
                                <li key={answer.id}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            value={answer.id}
                                            checked={answers[question.id] === answer.id}
                                            onChange={() => handleAnswerSelect(question.id, answer.id)}
                                        />
                                        <div className="answer">
                                        {answer.textRu}
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
            <div className="bottom">
                <button onClick={handleSubmit}><p>Finish</p></button>
            </div>
        </div>
    );
};

export default TestPage;
