import axios from "axios";

const API_URL = 'http://localhost:1306/main/';

export async function login(newUser) {
    try {
        const response = await axios.post(API_URL + 'login', newUser);
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            return { success: false, error: error.response.data };
        } else if (error.request) {
            return { success: false, error: "No response from server. Please try again later." };
        } else {
            return { success: false, error: "An error occurred. Please try again." };
        }
    }
}