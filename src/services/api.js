import axios from "axios";

const API_URL = 'http://localhost:3001'

export const createActivity = (data) => {
    axios.post(`${API_URL}/create`, data)
}

export const getActivities = async () => {
    const res = await axios.get(`${API_URL}/activities`)

    return res
}

export const getTotalDistance = async () => {
    const res = await axios.get(`${API_URL}/total`)

    return res
}

export const getLongestActivities = async () => {
    const res = await axios.get(`${API_URL}/longest`)

    return res
}