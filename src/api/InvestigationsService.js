import axios from "axios";
import { API_BASE_URL } from "./API_BASE_URL";

export const getAvailableInvestigations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/investigations/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching available investigations:", error);
        throw error;
    }
};

export const getTasksWithProgress = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/investigations/progress`, {
            params: { userId },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks with progress:", error);
        throw error;
    }
};

export const getInvestigationsWithProgress = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/investigations/all-with-progress`, {
            params: { userId },
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching investigations with progress:", error);
        throw error;
    }
};

