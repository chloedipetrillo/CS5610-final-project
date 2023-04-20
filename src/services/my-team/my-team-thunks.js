import * as myTeamServices from "./my-team-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createTeamThunk = createAsyncThunk(
    "myTeam/create",
    async (team) => {
        const response = await myTeamServices.createTeam(team);
        return response.data;
    }
);

export const updateTeamThunk = createAsyncThunk(
    "myTeam/update",
    async (pid, team) => {
        const response = await myTeamServices.updateTeam(pid, team);
        return response.data;
    }
);

export const deleteTeamThunk = createAsyncThunk(
    "myTeam/delete",
    async (pid) => {
        const response = await myTeamServices.deleteTeam(pid);
        return response.data;
    }
);

export const findTeamThunk = createAsyncThunk(
    "myTeam/find",
    async (pid) => {
        const response = await myTeamServices.findTeams(pid);
        return response.data;
    }
);
// export const createTeamThunk = createAsyncThunk(
//     "myTeam/create",
//     async (team) => {
//         const response = await myTeamServices.createTeam(team);
//         return response.data;
//     }

