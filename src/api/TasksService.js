import axios from "axios";
import { API_BASE_URL } from "./API_BASE_URL";

export const getTasksWithProgress = async (investigationId, userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasks/by-investigation`, {
            params: { investigationId, userId },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks with progress:", error);
        throw error;
    }
};
