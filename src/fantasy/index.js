import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import HomeComponent from "./home";
import NavComponent from "./navigation";
import LogInSignUp from "./login-signup";

import {configureStore} from "@reduxjs/toolkit";
import HowToPlayComponent from "./how-to-play";
import StatsComponent from "./stats";
import MyLeagueComponent from "./my-league";


function Fantasy() {
    return (

        <div>
            <div className=""> <NavComponent/> </div>


            <Routes>
                <Route path="/" index element ={<HomeComponent/>}/>
                <Route path="/home" index element ={<HomeComponent/>}/>
                <Route path="/stats" element ={<StatsComponent/>}/>
                <Route path="/login-signup" element ={<LogInSignUp/>}/>
                <Route path="/how-to-play" element ={<HowToPlayComponent/>}/>
                <Route path="/my-league/*" element={<MyLeagueComponent/>}/>
            </Routes>
        </div>

    );
}

export default Fantasy;