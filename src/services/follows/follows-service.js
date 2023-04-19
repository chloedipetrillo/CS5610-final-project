import axios from "axios"

const FOLLOW_URL = "http://localhost:4000/api/follows"

const api = axios.create({
    withCredentials: true,
})


export const followUser = async (userID) =>{
    const response = await api.post(`${FOLLOW_URL}/${userID}`)

    return response.data
};


export const getFollowers = async (followed) =>{
    const response = await api.get(`${FOLLOW_URL}/followers/${followed}`)
    return response.data
};

export const getFollowing = async (follower) =>{
    const response = await api.get(`${FOLLOW_URL}/following/${follower}`)
    return response.data
};


export const unfollowPerson = async (followed) =>{
    const response = await api.delete(`${FOLLOW_URL}/${followed}`)
    return response.data
};