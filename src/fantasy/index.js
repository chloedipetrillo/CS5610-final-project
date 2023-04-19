import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import HomeComponent from "./home";
import NavComponent from "./navigation";
import LogInSignUp from "./login-signup";

import {configureStore} from "@reduxjs/toolkit";
import HowToPlayComponent from "./how-to-play";
import StatsComponent from "./search";
import MyLeagueComponent from "./my-league";
import ProfileComponent from "./profile";
import store from "../redux/store.js"
import SearchPersonComponent from "./search/search-person-component";
import LoadProfile from "./load-profile-component";
import UserComponent from "./user-page";
import EditProfileComponent from "./edit-profile";
import AdminComponent from "./admin-page";



function Fantasy() {
    return (
        <Provider store={store}>
            <LoadProfile>
                <div className="mb-3"> <NavComponent/> </div>
                <div className="container-fluid mb-5">
                    <Routes>
                        <Route path="/" index element ={<HomeComponent/>}/>
                        <Route path="/home" index element ={<HomeComponent/>}/>
                        <Route path="/search" element ={<StatsComponent/>}/>
                        <Route path="/search/:searched" element ={<StatsComponent/>}/>
                        <Route path="/login-signup" element ={<LogInSignUp/>}/>
                        <Route path="/how-to-play" element ={<HowToPlayComponent/>}/>
                        <Route path="/my-league/*" element={<MyLeagueComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/details/:pid" element={<SearchPersonComponent/>}/>
                        <Route path="/profile/:uid" element={<UserComponent/>}/>
                        <Route path="/edit-profile/" element={<EditProfileComponent/>}/>
                        <Route path="/admin-page/" element={<AdminComponent/>}/>

                    </Routes>
                </div>

            </LoadProfile>
        </Provider>


    );
}

export default Fantasy;