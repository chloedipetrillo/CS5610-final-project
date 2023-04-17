import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./users-services";

export const loginThunk = createAsyncThunk(
    "userz/login",
    async (credentials) => {
        const user = await userService.login(credentials);
        return user;
    }
);

export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (user) => {
        const status = await userService.updateUser(user);
        return user;
    }
);

export const logoutThunk = createAsyncThunk("users/logout", async () => {
    const status = await userService.logout();
    return status;
});


export const profileThunk = createAsyncThunk("users/profile", async () => {
    const user = await userService.profile();
    return user;
});

export const registerThunk = createAsyncThunk(
    "users/register",
    async (credentials) => {
        const user = await userService.register(credentials);
        return user;
    }
);