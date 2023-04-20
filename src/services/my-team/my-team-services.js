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
    return response.data.team;
};

export const updateTeam = (pid, team) => {
    return api.put(`${USERS_API_URL}/${pid}`, team);
};

export const deleteTeam = (pid) => {
    return api.delete(`${USERS_API_URL}/${pid}`);
};


