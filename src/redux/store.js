import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users-reducer.js";

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;