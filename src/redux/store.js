import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users-reducer.js";
import commentsReducer from "./comments-reducer";
import wallReducer from "./wall-reducer.js";

const store = configureStore({
    reducer: {
        users: usersReducer, comments: commentsReducer, wall: wallReducer
    },
});

export default store;