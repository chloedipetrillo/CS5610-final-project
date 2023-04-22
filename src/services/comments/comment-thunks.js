import * as commentServices from "./comment-services.js";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const findAllCommentsThunk = createAsyncThunk(
    'chat/findAll', async () =>
        await commentServices.findAllComments()
)

export const findCommentsThunk = createAsyncThunk(
    "chat/findByPid",
    async (pid) => {
        const response = await commentServices.findComments(pid);
        return response.data;
    }
);
//
export const createChatThunk = createAsyncThunk(
    "chat/create",
    async (chat) => {
        const response = await commentServices.createChat(chat);
        return response.data;
    }
);

export const updateChatThunk = createAsyncThunk(
    "chat/update",
    async (chat) => {
        await commentServices.updateChat(chat);
        return chat;
    }
);
//
// export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
//     await userService.deleteUser(id);
//     return id;
// });
//
// export const loginThunk = createAsyncThunk("users/login", async (user) => {
//     const response = await userService.login(user);
//     return response.data;
// });
//
// export const logoutThunk = createAsyncThunk("users/logout", async () => {
//     await userService.logout();
// });
//
// export const registerThunk = createAsyncThunk(
//     "users/register",
//     async (user) => {
//         const response = await userService.register(user);
//         return response.data;
//     }
// );
//
// export const profileThunk = createAsyncThunk("users/profile", async () => {
//     const response = await userService.profile();
//     return response.data;
// });