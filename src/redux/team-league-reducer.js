import {
    getAllUsersInLeagueThunk,
    getLeaguesIJoinedThunk,
    joinLeagueThunk
} from "../services/team-leagues/team-leagues-thunks";



const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    teamLeagues: [],
    usersInLeague: [],
    loading: false,
    error: null,
};

const myLeaguesSlice = createSlice({
    name: "teamLeagues",
    initialState,
    reducers: {},
    extraReducers: {
        [joinLeagueThunk.rejected]:
            (state, action) => {
                state.error = action.error.message;
            },
        [joinLeagueThunk.fulfilled]:
            (state, {payload}) => {
                state.teamLeagues.push(payload);
            },
        [getLeaguesIJoinedThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teamLeagues = payload
            },
        [getAllUsersInLeagueThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.usersInLeague = payload
            },

    },
});

export default myLeaguesSlice.reducer;