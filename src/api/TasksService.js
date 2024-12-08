import axios from "axios";

const API_BASE_URL = "http://localhost:1306/tasks";

export const getTasksWithProgress = async (investigationId, userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/by-investigation`, {
            params: { investigationId, userId },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks with progress:", error);
        throw error;
    }
};
