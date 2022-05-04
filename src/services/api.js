import axios from "axios";

const API_URL = 'http://localhost:3001'

export const createActivity = (data) => {
    axios.post(`${API_URL}/create`, data)
}