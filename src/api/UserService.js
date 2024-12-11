import axios from "axios";
import { API_BASE_URL } from "./API_BASE_URL";

export async function login(newUser) {
    try {
        const response = await axios.post(API_BASE_URL + '/main/login', newUser);
        return { success: true, user: response.data };
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