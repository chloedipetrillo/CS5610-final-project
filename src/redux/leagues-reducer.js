import {createLeagueThunk, findAllLeaguesThunk, findMyLeaguesThunk} from "../services/my-leagues/my-league-thunks";


const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    myLeagues: [],
    loading: false,
    error: null,
};

const myLeaguesSlice = createSlice({
    name: "myLeagues",
    initialState,
    reducers: {},
    extraReducers: {
        [createLeagueThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.myLeagues.push(payload);
            },
        [createLeagueThunk.rejected]:
            (state, action) => {
                state.error = action.error.message;
            },
        [findMyLeaguesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.myLeagues = payload
            },
        [findMyLeaguesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
        [findAllLeaguesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.myLeagues = payload
            },

    },
});

export default myLeaguesSlice.reducer;