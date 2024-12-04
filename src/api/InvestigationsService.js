import axios from "axios";

const API_BASE_URL = "http://localhost:1306/investigations";

export const getAvailableInvestigations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/all`);
        return response.data;
    } catch (error) {
        console.error("Error fetching available investigations:", error);
        throw error;
    }
};

export const getTasksWithProgress = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/progress`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks with progress:", error);
        throw error;
    }
};
