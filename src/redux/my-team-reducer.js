import {createTeamThunk, findTeamThunk, updateTeamThunk} from "../services/my-team/my-team-thunks";


const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    myTeam: [],
    loading: false,
    error: null,
};

const myTeamSlice = createSlice({
    name: "myTeam",
    initialState,
    reducers: {},
    extraReducers: {
        [createTeamThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.myTeam.push(payload);
            },
        [findTeamThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.myTeam = payload
            },
        [findTeamThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
        // [updateTeamThunk.fulfilled]: (state, { payload }) => {
        //     state.myTeam = payload;
        // },
    },
});

export default myTeamSlice.reducer;