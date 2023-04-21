import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/myTeam";


const api = axios.create({
    withCredentials: true,
})
export const createTeam = (team) => {
    return api.post(USERS_API_URL, team);
};

export const findTeams = async (pid) => {
    const response = await api.get(`${USERS_API_URL}/${pid}`);
    return response.data;
};

export const updateTeam = async (entry) => {
    const response = await api.put(`${USERS_API_URL}/${entry._id}`, entry);
    const status = response.data;
    return status;
};

export const deleteTeam = (pid) => {
    return api.delete(`${USERS_API_URL}/${pid}`);
};


