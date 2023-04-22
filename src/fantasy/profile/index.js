import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk} from "../../services/users/users-thunks.js";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";

import {createPostThunk, findAllPostsThunk} from "../../services/wall/wall-thunks";

import WallPostComponent from "./wall-posts";
import {createChatThunk} from "../../services/comments/comment-thunks";
import ProfileFollowsComponent from "./followers";
import {findTeams} from "../../services/my-team/my-team-services";
import TeamMemberComponent from "../team-member";

const ProfileComponent = () => {

    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [showInfo, setInfo] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShow = () => {
        setInfo(!showInfo)
    }
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }

    const { myTeam, l} = useSelector((state) => state.myTeam);
    const [team, setTeam] = useState(myTeam)

    const findTeam = async () => {
        const prof = await getUser();

        if (prof){
            const t = await findTeams(prof._id);
            if (t){

                setTeam(t.team)
            }

        }

    }

    const [showTeam, setShowTeam] = useState(false)


    const showHideHandler = () => {
        setShowTeam(!showTeam)
    }


    const [toPost, setComment] = useState("")

    const {wall, loading} = useSelector(state => state.wall)

    useEffect( () => {
        findTeam();
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
        if (toPost){
            let sending = {
                "uid" : profile._id,
                "cid": profile._id,
                "post" : toPost,
            }
            dispatch(createPostThunk(sending));
            clearInput()
        }


    }




    return(
        <div className="mb-5">
            {profile ? (

                    <>
                        <div className="row">
                            <div className="col-12 col-lg-5 ">
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

                                <ProfileFollowsComponent uid={profile._id}/>

                                <ul className="list-group override-no-borders mt-3 mb-3">
                                    <li className="list-group-item override-purple-dark-my-wall fw-bold ">
                                   <span className="text-white fs-4">
                                       My Team
                                   </span>
                                        {
                                            showTeam ?
                                                <button className="btn btn-dark rounded-pill float-end"
                                                        onClick={()=>showHideHandler()}>Hide Team</button>
                                                :
                                                <button className="btn btn-dark rounded-pill float-end"
                                                        onClick={()=>showHideHandler()}>Show Team</button>
                                        }
                                    </li>
                                    {showTeam && team ?
                                        <TeamMemberComponent team={team}/> : ''
                                    }

                                </ul>

                            </div>

                            <div className="col-12 col-lg-7">
                                <ul className="list-group override-no-borders">

                                    {showInfo  ?
                                        <>
                                            <li className="list-group-item override-pink-dark-information fw-bold wd-font-white"
                                                onClick={()=>handleShow()}>
                                            <span className="wd-font-white">
                                                Hide Personal Information
                                            </span>

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
                                        <li className="list-group-item override-pink-dark-information fw-bold wd-font-white"
                                            onClick={()=>handleShow()}>
                                        <span className="text-white">
                                            Show Personal Information
                                        </span>

                                            <Link to="/edit-profile">
                                                <button className="btn btn-dark border-dark rounded-pill w-85 float-end ">
                                                    Edit Profile
                                                </button>
                                            </Link>
                                        </li>

                                    }

                                </ul>
                                <div className="ps-3 mt-3 wd-wall-format wd-font-white fw-bolder">
                                    My Wall
                                </div>
                                {/*</li>*/}
                                <div className="wd-comment-box-grey overflow-auto">
                                    <ul className="list-group override-no-borders ">
                                        {/*<li className="list-group-item override-purple-dark-my-wall fw-bolder">*/}
                                        {/*    <div className=" wd-font-white">*/}
                                        {/*        My Wall*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}

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
                                <li className="list-group-item fw-bolder">
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
                <div className="wd-access-blocked mt-5 center">
                    <div className="mb-3">NOT SIGNED IN</div>
                    <Link to="../login-signup">
                        <button className="btn override-log">
                            Log-In/Sign-Up
                        </button>
                    </Link>
                </div>
            }

        </div>
    );
};
export default ProfileComponent;