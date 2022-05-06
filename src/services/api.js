import axios from "axios";

const API_URL = 'http://localhost:3001'

export const createActivity = async (data) => {
    const res = await axios.post(`${API_URL}/create`, data)

    return res
}

export const getActivities = async () => {
    try {
        const res = await axios.get(`${API_URL}/activities`)

        return res
    } catch (err) {
        return {
            data: []
        }
    }
}

export const getTotalDistance = async () => {
    const res = await axios.get(`${API_URL}/total`)

    return res
}

export const getLongestActivities = async () => {
    const res = await axios.get(`${API_URL}/longest`)

    return res
}