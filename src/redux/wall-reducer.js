import {deletePostThunk} from "../services/wall/wall-thunks";

const { createSlice } = require("@reduxjs/toolkit");
const {
    findAllPostsThunk,
    createPostThunk
} = require("../services/wall/wall-thunks.js");

const initialState = {
    wall: [],
    loading: false,
    error: null,
};

const commentsSlice = createSlice({
    name: "wall",
    initialState,
    reducers: {},
    extraReducers: {
        [findAllPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.wall = []
            },
        [findAllPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.wall = payload
            },
        [findAllPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createPostThunk.fulfilled]:
            (state, {payload}) => {
            state.loading = false;
            state.wall.push(payload);
        },
        [deletePostThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.wall = state.wall.filter(p => p._id !== payload)
            },

    },
});

export default commentsSlice.reducer;