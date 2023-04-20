import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/myTeam";

export const createTeam = (team) => {
    return axios.post(USERS_API_URL, team);
};

