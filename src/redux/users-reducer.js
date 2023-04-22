import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk,
    updateUserThunk, findAllUsersThunk,
} from "../services/users/users-thunks";

const initialState = {
    usersData: [],
    loading: false,
    error: null,
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
        [registerThunk.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [findAllUsersThunk.pending]: (state, action) => {
            state.loading = true;
            state.usersData = [];
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.usersData = action.payload;
        },
        [findAllUsersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export default userSlice.reducer;
export const { updateCurrentUser } = userSlice.actions;