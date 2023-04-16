import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk} from "../../services/users/users-thunks.js";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";
const ProfileComponent = () => {

    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [reviews, setReviews] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect( () => {
        getUser();
    }, []);

    console.log(profile)




//     const{uid} = useParams();
//     console.log(uid)
//     const [usersPage, setUser] = useState([])
//
//
//     const getUser = async () =>{
//         const user = await findUserById(uid);
//         setUser(user)
//
//     }
//
//     useEffect(() =>{
//         if(uid){
//             getUser()
//
//         }
//     });
// console.log(usersPage)
//     const { currentUser } = useSelector((state) => state.users);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     useEffect(() => {
//         dispatch(profileThunk());
//     }, []);


    return(
        <div className="mb-5">
            {profile && (

                <>
                    <div className="row">
                        <div className="col-12 col-md-5 pt-3 ">
                            <div className="wd-profile fw-bold">
                                My Profile
                            </div>

                            <div className="wd-profile-info-box mt-2 pb-3">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="pt-2 fw-bolder wd-profile-name-font">
                                            {profile.firstName} {profile.lastName}
                                        </div>

                                        {/*<img className="wd-profile-icon" src = {user.image}/>*/}
                                        IMAGE
                                    </div>

                                    <div className="col-6 col-md-5 pt-5">
                                        <div className="wd-inner-profile-box">
                                            <div className="wd-inner-profile-box-font ">
                                                User: <span className="wd-inner-profile-box-font-2"> {profile.userType }</span>
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
                                            {profile.email}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3 fw-bolder">
                                            Username:
                                        </div>
                                        <div className="col-9 wd-private-info">
                                            {profile.username}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3 fw-bolder">
                                            Password:
                                        </div>
                                        <div className="col-9 wd-private-info">
                                            {profile.password}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-3 fw-bolder">
                                            Birthday:
                                        </div>
                                        <div className="col-9 wd-private-info">
                                            {/*{user.DOB}*/}
                                            DOB
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
                </>
            )}

        </div>





        // <div>
        //     <h1>Profile Screen</h1>
        //     {profile && (
        //         <div>
        //             <div>
        //                 <label>First Name</label>
        //                 <input
        //                     type="text"
        //                     value={profile.firstName}
        //                     onChange={(event) => {
        //                         const newProfile = {
        //                             ...profile,
        //                             firstName: event.target.value,
        //                         };
        //                         setProfile(newProfile);
        //                     }}
        //                 />
        //             </div>
        //             <div>
        //                 <label>Last Name</label>
        //                 <input
        //                     type="text"
        //                     value={profile.lastName}
        //                     onChange={(event) => {
        //                         const newProfile = {
        //                             ...profile,
        //                             lastName: event.target.value,
        //                         };
        //                         setProfile(newProfile);
        //                     }}
        //                 />
        //             </div>
        //             <div>
        //                 <label>Email</label>
        //
        //                 <input
        //                     type="text"
        //                     value={profile.email}
        //                     onChange={(event) => {
        //                         const newProfile = {
        //                             ...profile,
        //                             email: event.target.value,
        //                         };
        //                         setProfile(newProfile);
        //                     }}
        //                 />
        //             </div>
        //
        //         </div>
        //     )}
        //     <buton
        //         onClick={() => {
        //             dispatch(logoutThunk());
        //             navigate("/login");
        //         }}
        //         className="btn btn-danger"
        //     >
        //         Logout
        //     </buton>
        //     <button onClick={save} className="btn btn-primary float-end">
        //         Save
        //     </button>
        //
        // </div>
    );
};
export default ProfileComponent;