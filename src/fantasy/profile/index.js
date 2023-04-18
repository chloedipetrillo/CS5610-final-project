import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk} from "../../services/users/users-thunks.js";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";

import {createPostThunk, findAllPostsThunk} from "../../services/wall/wall-thunks";

import WallPostComponent from "./wall-posts";
import {createChatThunk} from "../../services/comments/comment-thunks";
const ProfileComponent = () => {

    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [showInfo, setInfo] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShow = () => {
        setInfo(!showInfo)
    }
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    const [toPost, setComment] = useState("")

    const {wall, loading} = useSelector(state => state.wall)

    useEffect( () => {
        getUser();
        dispatch(findAllPostsThunk())
    }, []);

    console.log(profile)

    const getAccountType =()=>{
        if (profile.userType === "manager"){
            return "Manager";
        }
        else if (profile.userType === "admin"){
            return "Admin";
        }
        else {
            return "Commissioner";
        }
    }

    const searchValue = (val)=>{
        setComment(val)
    }
    //
    function clearInput() {
        document.getElementById("Form").reset();
    }

    const handleComment = () => {
        let sending = {
            "uid" : profile._id,
            "cid": profile._id,
            "post" : toPost,
        }
        dispatch(createPostThunk(sending));
        clearInput()

    }




    return(
        <div className="mb-5">
            {profile ? (

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

                                        <img className="wd-profile-icon" src = {profile.image}/>
                                        IMAGE
                                    </div>

                                    <div className="col-6 col-md-5 pt-5">
                                        <div className="wd-inner-profile-box">
                                            <div className="wd-inner-profile-box-font ">
                                                User: <span className="wd-inner-profile-box-font-2"> {getAccountType()}</span>
                                            </div>
                                            <div className="wd-inner-profile-box-font">
                                                Status: <span className="wd-inner-profile-box-font-2"> {profile.status}</span>
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

                                {showInfo ?
                                    <>
                                        <li className="list-group-item override-pink-dark-information fw-bold"
                                        onClick={()=>handleShow()}>
                                            Hide Personal Information
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
                                                    Phone Number:
                                                </div>
                                                <div className="col-9 wd-private-info">
                                                    {profile.phone}
                                                </div>
                                            </div>
                                        </li>
                                    </>


                                    :
                                    <li className="list-group-item override-pink-dark-information fw-bold"
                                        onClick={()=>handleShow()}>
                                        Show Personal Information
                                        <Link to="/edit-profile">
                                            <button className="btn btn-dark border-dark rounded-pill w-85 float-end ">
                                                Edit Profile
                                            </button>
                                        </Link>
                                    </li>

                                }

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
                            <div className="wd-comment-box overflow-auto">
                                <ul className="list-group override-no-borders ">
                                    <li className="list-group-item override-purple-dark-my-wall fw-bolder">
                                        My Wall
                                    </li>

                                    { wall.filter(e => e.uid === profile._id).length > 0 ?
                                        wall.filter(e => e.uid === profile._id).map(post=> <WallPostComponent
                                            key={post._id}
                                            post={post}/>)
                                        :
                                        <li className="list-group-item override-purple-light-my-wall">
                                            No comments to display... Be the first to leave a comment!
                                        </li>
                                    }

                                </ul>
                            </div>
                            <li className="list-group-item override-purple-dark-my-wall fw-bolder">
                                <div className="d-flex justify-content-between mt-1">
                                    <form id="Form" className="w-100 pe-3">
                                        <input className="form form-control" placeholder="Comment...."
                                               onChange={(event) => searchValue(event.target.value)}/>
                                    </form>
                                    <button className="btn override-button"
                                            onClick={()=>handleComment()}>Comment</button>
                                </div>
                            </li>



                        </div>

                    </div>
                </>
            ) :
                <div>
                    {navigate("../login-signup")}
                </div>
            }

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