import { createSlice } from "@reduxjs/toolkit";
import data from './fakedata.json';

const searchSlice = createSlice({
    name: 'searchData',
    initialState: data,
    reducers: {
        likeTuit(state, action) {
            const likeIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[likeIndex].liked = true;
            state[likeIndex].likes += 1;

        },

        unlikeTuit(state, action) {
            const unlikeIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[unlikeIndex].liked = false;
            state[unlikeIndex].likes -= 1;

        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },


    }
});

export const {likeTuit, unlikeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;