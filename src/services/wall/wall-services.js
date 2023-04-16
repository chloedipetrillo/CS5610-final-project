import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/wall";


export const findAllWallPosts = async () => {
    const response = await axios.get(`${USERS_API_URL}`);
    return response.data;
};

export const createPost = (post) => {
    return axios.post(USERS_API_URL, post);
};
