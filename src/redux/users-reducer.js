import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk,
    updateUserThunk,
} from "../services/users/users-thunks";

const initialState = {
    currentUser: null,
};
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateCurrentUser: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.load = false;
            state.currentUser = payload;
        },
        [profileThunk.pending]: (state, { payload }) => {
            state.load = true;
            state.currentUser = null;
        },

        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

export default userSlice.reducer;
export const { updateCurrentUser } = userSlice.actions;