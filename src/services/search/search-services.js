import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/players";

export const findPlayerSearch = (search) => {
    return axios.get(`${USERS_API_URL}/:${search}`).then((response) => response.data);
};