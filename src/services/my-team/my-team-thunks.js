import * as myTeamServices from "./my-team-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createTeamThunk = createAsyncThunk(
    "myTeam/create",
    async (team) => {
        const response = await myTeamServices.createTeam(team);
        return response.data;
    }
);
