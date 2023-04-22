import {createAsyncThunk} from "@reduxjs/toolkit";
import * as searchService from "./search-services.js";



export const findPlayerSearchThunk = createAsyncThunk(
    "players/findBySearch",
    async (search) => {
        const response = await searchService.findPlayerSearch(search);
        return response.data;
    }
);
