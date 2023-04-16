import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";


function UserComponent() {
    let {uid} = useParams();
    console.log(uid)
    const [usersPage, setUser] = useState([])


    const getUser = async () =>{
        const user = await findUserById(uid);
        setUser(user)

    }

    const getAccountType =()=>{
        if (usersPage.userType === "manager"){
            return "Manager";
        }
        else if (usersPage.userType === "admin"){
            return "Admin";
        }
        else {
            return "Commissioner";
        }
    }

    useEffect(() =>{
        if(uid){
            getUser()

        }
    });
    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-12 col-md-5 pt-3 ">
                    <div className="wd-profile fw-bold">
                        {usersPage.username}'s Profile
                    </div>

                    <div className="wd-profile-info-box mt-2 pb-3">
                        <div className="row">
                            <div className="col-4">
                                <div className="pt-2 fw-bolder wd-profile-name-font">
                                    {usersPage.firstName} {usersPage.lastName}
                                </div>

                                {/*<img className="wd-profile-icon" src = {user.image}/>*/}
                                IMAGE
                            </div>

                            <div className="col-6 col-md-5 pt-5">
                                <div className="wd-inner-profile-box">
                                    <div className="wd-inner-profile-box-font ">
                                        User: <span className="wd-inner-profile-box-font-2"> {getAccountType() }</span>
                                    </div>
                                    <div className="wd-inner-profile-box-font">
                                        Status: <span className="wd-inner-profile-box-font-2"> NEED STATUS</span>
                                        {/*Status: <span className="wd-inner-profile-box-font-2"> {user.status}</span>*/}
                                    </div>
                                </div>


                            </div>
                            <div className="col-3">

                            </div>
                        </div>



                    </div>

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
                                    {/*<img className="wd-team-icon" src = {team.image}/>*/}
                                    IMAGE
                                </div>

                                <div className="col-8">
                                    <div className="fw-bolder">
                                        Name: <span className="fw-lighter wd-team-details-font">team name <br></br> </span>
                                        Team: <span className="fw-lighter wd-team-details-font"> team <br></br></span>
                                        Position: <span className="fw-lighter wd-team-details-font"> position <br></br></span>
                                        {/*Name: <span className="fw-lighter wd-team-details-font">{team.name} <br></br> </span>*/}
                                        {/*Team: <span className="fw-lighter wd-team-details-font">{team.team} <br></br></span>*/}
                                        {/*Position: <span className="fw-lighter wd-team-details-font">{team.position} <br></br></span>*/}
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
                                        {/*<img className="rounded-circle wd-wall-profile-pic" src={wall.image}/>*/}
                                        IMAGE
                                    </div>
                                    <div className="ps-2">
                                        <span className="fw-bold pe-2">
                                            {/*<span className="pe-1 ">{wall.name}</span>*/}
                                            wall name

                                        </span>
                                        <span className="text-secondary">
                                            {/*{wall.commenter} • {wall.time}*/}
                                        </span> <br></br>

                                        <span>
                                            {/*{wall.comment}*/}
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
}

export default UserComponent;