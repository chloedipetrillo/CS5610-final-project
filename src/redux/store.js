import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users-reducer.js";
import commentsReducer from "./comments-reducer";
import wallReducer from "./wall-reducer.js";
import followsReducer from "./follows-reducer";
import myTeamReducer from "./my-team-reducer";
import myLeagueReducer from "./leagues-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer, commentData: commentsReducer, wall: wallReducer, followers: followsReducer,
        myTeam: myTeamReducer, myLeagues: myLeagueReducer,
    },
});

export default store;