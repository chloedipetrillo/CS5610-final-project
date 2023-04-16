import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users-reducer.js";
import commentsReducer from "./comments-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer, comments: commentsReducer
    },
});

export default store;