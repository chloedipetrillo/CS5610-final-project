import {createTeamThunk} from "../services/my-team/my-team-thunks";

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
            }
    },
});

export default myTeamSlice.reducer;