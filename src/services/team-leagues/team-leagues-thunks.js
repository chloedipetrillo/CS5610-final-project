import * as teamLeagueServices from "./team-leagues-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const joinLeagueThunk = createAsyncThunk(
    "teamLeague/join",
    async (newJoin,) => {
        const response = await teamLeagueServices.joinALeague(newJoin);
        return response.data;
    }
);


export const getLeaguesIJoinedThunk = createAsyncThunk(
    "teamLeague/getLeagues",
    async (userId) => {
        const response = await teamLeagueServices.getLeaguesIJoined(userId);
        return response;
    }
);
