import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/wall";


export const findAllWallPosts = async () => {
    const response = await axios.get(`${USERS_API_URL}`);
    return response.data;
};

export const createPost = async (post) => {
    const response = await axios.post(USERS_API_URL, post);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios
        .delete(`${USERS_API_URL}/${id}`)
    return response.data
}