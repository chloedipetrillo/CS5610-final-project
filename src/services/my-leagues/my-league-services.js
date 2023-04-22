import axios from "axios"

const LEAGUES_URL = "http://localhost:4000/api/myLeagues"

const api = axios.create({
    withCredentials: true,
})


export const createLeague = async (league) =>{
    const response = await api.post(`${LEAGUES_URL}/newLeague`, league)
    return response.data
};


export const findLeaguesManaged = async (id) =>{
    const response = await api.get(`${LEAGUES_URL}/${id}`)
    return response.data
};

export const findLeaguesByLID = async (lid) =>{
    const response = await api.get(`${LEAGUES_URL}/byLeague/${lid}`)
    return response.data
};

export const findAllLeagues = async () =>{
    const response = await api.get(LEAGUES_URL)
    return response.data
};