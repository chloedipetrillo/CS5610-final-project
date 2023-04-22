import axios from "axios"

const LEAGUES_URL = "http://localhost:4000/api/teamLeagues"

const api = axios.create({
    withCredentials: true,
})


export const joinALeague = async (newJoin) =>{
    const response = await api.post(`${LEAGUES_URL}`, newJoin)
    return response.data
};


export const getLeaguesIJoined = async (userId) => {
    const response = await api.get(`${LEAGUES_URL}/${userId}`)
    return response.data
}

export const getAllUsersInLeague = async (leagueId) => {
    // console.log("inside here for test")
    console.log("the api hitting here is: " + `${LEAGUES_URL}/users/${leagueId}`)
    const response = await api.get(`${LEAGUES_URL}/users/${leagueId}`)
    return response.data
}

// export const findAllLeagues = async () =>{
//     const response = await api.get(LEAGUES_URL)
//     return response.data
// };
//
// export const findAllLeagues = async () =>{
//     const response = await api.get(LEAGUES_URL)
//     return response.data
// };