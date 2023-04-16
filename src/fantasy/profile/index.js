import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk, logoutThunk } from "../../services/users/users-thunks.js";
import { useNavigate } from "react-router";
import profileArray from "./profile.json";
import teamArray from "./my-team.json";
import wallArray from "./wall.json";
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = profileArray[0];
    const team = teamArray[0];
    const wall = wallArray[0];
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return(
        <div className="mb-5">
            <div className="row">
                <div className="col-12 col-md-5 pt-3 ">
                    <div className="wd-profile fw-bold">
                        My Profile
                    </div>

                    <div className="wd-profile-info-box mt-2 pb-3">
                        <div className="row">
                            <div className="col-4">
                                <div className="pt-2 fw-bolder wd-profile-name-font">
                                    {user.firstName} {user.lastName}
                                </div>

                                <img className="wd-profile-icon" src = {user.image}/>
                            </div>

                            <div className="col-6 col-md-5 pt-5">
                                <div className="wd-inner-profile-box">
                                    <div className="wd-inner-profile-box-font ">
                                        User: <span className="wd-inner-profile-box-font-2"> {user.type }</span>
                                    </div>
                                    <div className="wd-inner-profile-box-font">
                                        Status: <span className="wd-inner-profile-box-font-2"> {user.status}</span>
                                    </div>
                                </div>


                            </div>
                            <div className="col-3">

                            </div>
                        </div>



                    </div>

                </div>

                <div className="col-12 col-md-7 pt-3">
                    <ul className="list-group override-no-borders">
                        <li className="list-group-item override-pink-dark-information fw-bold">
                            Show Personal Information
                            <Link to="/edit-profile">
                                <button className="btn btn-dark border-dark rounded-pill w-85 float-end ">
                                    Edit Profile
                                </button>
                            </Link>
                        </li>
                        <li className="list-group-item override-pink-light-information">
                            <div className="row">
                                <div className="col-3 fw-bolder">
                                    Email:
                                </div>
                                <div className="col-9 wd-private-info">
                                    {user.email}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 fw-bolder">
                                    Username:
                                </div>
                                <div className="col-9 wd-private-info">
                                    {user.username}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 fw-bolder">
                                    Password:
                                </div>
                                <div className="col-9 wd-private-info">
                                    {user.password}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 fw-bolder">
                                    Birthday:
                                </div>
                                <div className="col-9 wd-private-info">
                                    {user.DOB}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-5 pt-3">
                    <ul className="list-group override-no-borders">
                        <li className="list-group-item override-blue-dark-my-team fw-bold ">
                            My Team
                        </li>
                        <li className="list-group-item override-blue-light-my-team">
                            <div className="row">
                                <div className = "col-4">
                                    <img className="wd-team-icon" src = {team.image}/>
                                </div>

                                <div className="col-8">
                                    <div className="fw-bolder">
                                       Name: <span className="fw-lighter wd-team-details-font">{team.name} <br></br> </span>
                                        Team: <span className="fw-lighter wd-team-details-font">{team.team} <br></br></span>
                                        Position: <span className="fw-lighter wd-team-details-font">{team.position} <br></br></span>
                                    </div>

                                </div>
                            </div>

                        </li>

                    </ul>
                </div>

                <div className="col-12 col-md-7 pt-3">
                    <ul className="list-group override-no-borders">
                        <li className="list-group-item override-purple-dark-my-wall fw-bolder">
                            My Wall
                            </li>

                        <li className="list-group-item override-purple-light-my-wall">
                            <div className="row">
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <img className="rounded-circle wd-wall-profile-pic" src={wall.image}/>
                                    </div>
                                    <div className="ps-2">
                                        <span className="fw-bold pe-2">
                                            <span className="pe-1 ">{wall.name}</span>

                                        </span>
                                        <span className="text-secondary">
                                            {wall.commenter} • {wall.time}
                                        </span> <br></br>

                                        <span>
                                            {wall.comment}
                                        </span>


                                    </div>
                                </div>

                            </div>
                        </li>


                    </ul>


                </div>

            </div>

        </div>
    );
};
export default ProfileComponent;