import * as myLeagueServices from "./my-league-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createLeagueThunk = createAsyncThunk(
    "myLeague/create",
    async (league) => {
        const response = await myLeagueServices.createLeague(league);
        return response;
    }
);

export const findMyLeaguesThunk = createAsyncThunk(
    "myLeague/find",
    async (id) => {
        const response = await myLeagueServices.findLeaguesManaged(id);
        return response;
    }
);
// export const createTeamThunk = createAsyncThunk(
//     "myTeam/create",
//     async (team) => {
//         const response = await myTeamServices.createTeam(team);
//         return response.data;
//     }

