import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/chat";

export const findComments = async (pid) => {
    const response = await axios.get(`${USERS_API_URL}/${pid}`);
    return response.data;
};

export const findAllComments = async () => {
    const response = await axios.get(`${USERS_API_URL}`);
    return response.data;
};
//
// export const findUserById = (id) => {
//     return axios.get(`${USERS_API_URL}/${id}`).then((response) => response.data);
// };
//
export const createChat = (chat) => {
    return axios.post(USERS_API_URL, chat);
};
//
export const updateChat = (chat) => {
    return axios.put(`${USERS_API_URL}/${chat.id}`, chat);
};
//
// export const deleteUser = (id) => {
//     return axios.delete(`${USERS_API_URL}/${id}`);
// };
//
// export const login = (user) => {
//     return axios.post(`${USERS_API_URL}/login`, user);
// };
//
// export const logout = () => {
//     return axios.post(`${USERS_API_URL}/logout`);
// };
//
// export const register = (user) => {
//     return axios.post(`${USERS_API_URL}/register`, user);
// };
//
// export const profile = () => {
//     return axios.get(`${USERS_API_URL}/profile`);
// };