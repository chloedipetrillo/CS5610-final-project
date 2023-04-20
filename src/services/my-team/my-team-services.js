import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/myTeam";

export const createTeam = (team) => {
    return axios.post(USERS_API_URL, team);
};

export const findTeams = async (pid) => {
    const response = await axios.get(`${USERS_API_URL}/${pid}`);
    return response.data;
};

export const updateTeam = (pid, team) => {
    return axios.put(`${USERS_API_URL}/${pid}`, team);
};

export const deleteTeam = (pid) => {
    return axios.delete(`${USERS_API_URL}/${pid}`);
};


