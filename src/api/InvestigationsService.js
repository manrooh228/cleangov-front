import axios from "axios";

const API_BASE_URL = "http://localhost:1306/api/investigations";

export const getAvailableInvestigations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/available`);
        return response.data;
    } catch (error) {
        console.error("Error fetching available investigations:", error);
        throw error;
    }
};

export const getInvestigationsWithProgress = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/with-progress`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching investigations with progress:", error);
        throw error;
    }
};
