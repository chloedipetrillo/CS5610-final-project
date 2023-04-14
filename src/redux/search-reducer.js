const { createSlice } = require("@reduxjs/toolkit");
const {
    findPlayerSearchThunk,
} = require("../services/search/search-thunks.js");

const initialState = {
    players: [],
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: "players",
    initialState,
    reducers: {},
    extraReducers: {
        [findPlayerSearchThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findPlayerSearchThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.playerList = action.payload;
        }
    },
});

export default searchSlice.reducer;