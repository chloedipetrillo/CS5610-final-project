import * as followsServices from "./follows-service.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const followUserThunk = createAsyncThunk(
    "follows/followUser",
    async (userID) => {
        const response = await followsServices.followUser(userID);
        return response.data;
    }
);

export const unfollowUserThunk = createAsyncThunk(
    'follows/unfollow',
    async (followed) => {
        await followsServices.unfollowPerson(followed)
        return followed
    })

