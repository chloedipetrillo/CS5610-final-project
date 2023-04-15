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



function Fantasy() {
    return (
        <Provider store={store}>
            <div>
                <div className=""> <NavComponent/> </div>
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" index element ={<HomeComponent/>}/>
                        <Route path="/home" index element ={<HomeComponent/>}/>
                        <Route path="/search" element ={<StatsComponent/>}/>
                        <Route path="/login-signup" element ={<LogInSignUp/>}/>
                        <Route path="/how-to-play" element ={<HowToPlayComponent/>}/>
                        <Route path="/my-league/*" element={<MyLeagueComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/search/:pid" element={<SearchPersonComponent/>}/>

                    </Routes>
                </div>

            </div>
        </Provider>


    );
}

export default Fantasy;