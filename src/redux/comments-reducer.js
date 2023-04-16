const { createSlice } = require("@reduxjs/toolkit");
const {
   findCommentsThunk,
    findAllCommentsThunk
} = require("../services/comments/comment-thunks.js");

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: {
        [findAllCommentsThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [findAllCommentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.comments = payload
            },
        [findAllCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
});

export default commentsSlice.reducer;