import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../../api/context/UserProfile.js";
import { API_BASE_URL } from "../../api/API_BASE_URL.js";
import { useNavigate } from "react-router-dom";

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

    // Отправка результата теста
    const handleSubmit = async () => {
        let correctAnswers = 0;
    
        // Подсчёт правильных ответов
        questions.forEach(question => {
            const correctAnswer = question.answers.find(answer => answer.correct);
            if (correctAnswer && answers[question.id] === correctAnswer.id) {
                correctAnswers += 1;
            }
        });
    
        const totalQuestions = questions.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        setScore(percentage);
    
        // Отправка результата на сервер в формате TestResult
        try {
            const result = {
                test: { id: testId },  // Отправляем ID теста
                user: { id: userId },  // Отправляем ID пользователя
                successPercentage: percentage,
            };
    
            await axios.post(`${API_BASE_URL}/tests/save-result`, result); // Отправка объекта

            const progress = {
                userId,
                taskId,  // Мне нужен таскАйди
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
        <div>
            <h2>Тест</h2>
            {Array.isArray(questions) && questions.length > 0 ? (
                questions.map(question => (
                    <div key={question.id}>
                        <h3>{question.textRu}</h3>
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
                                        {answer.textRu}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleSubmit}>Finish</button>
        </div>
    );
};

export default TestPage;
