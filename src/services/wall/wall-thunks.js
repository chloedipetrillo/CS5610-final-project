import * as wallServices from "./wall-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const findAllPostsThunk = createAsyncThunk(
    'wall/findAll', async () =>
        await wallServices.findAllWallPosts());


export const createPostThunk = createAsyncThunk(
    "wall/create",
    async (post) => {
        const response = await wallServices.createPost(post);
        return response.data;
    }
);
