
import {followUserThunk, unfollowUserThunk} from "../services/follows/follows-thunk";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    followers: [],
    loading: false,
    error: null,
};

const followersSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {},
    extraReducers: {
        // [findFollowersThunk.pending]:
        //     (state) => {
        //         state.loading = true
        //         state.followers = []
        //     },
        // [findFollowersThunk.fulfilled]:
        //     (state, { payload }) => {
        //         state.loading = false
        //         state.followers = payload
        //     },
        // [findFollowersThunk.rejected]:
        //     (state, action) => {
        //         state.loading = false
        //         state.error = action.error
        //     },
        [followUserThunk.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [unfollowUserThunk.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        // [createPostThunk.fulfilled]:
        //     (state, {payload}) => {
        //         state.loading = false;
        //         state.wall.push(payload);
        //     },
        // [deletePostThunk.fulfilled] :
        //     (state, { payload }) => {
        //         state.loading = false
        //         state.wall = state.wall.filter(p => p._id !== payload)
        //     },

    },
});

export default followersSlice.reducer;