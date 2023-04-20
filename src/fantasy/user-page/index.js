import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";
import WallPostComponent from "../profile/wall-posts";
import {createPostThunk, findAllPostsThunk} from "../../services/wall/wall-thunks";
import {useDispatch, useSelector} from "react-redux";
import {followUser} from "../../services/follows/follows-service";
import {profileThunk} from "../../services/users/users-thunks";
import FollowComponent from "../follow/follow-component";
import {followUserThunk, unfollowUserThunk} from "../../services/follows/follows-thunk";


function UserComponent() {
    let {uid} = useParams();



    const [usersPage, setUser] = useState([])

    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [toPost, setComment] = useState("")
    const getUser = async () =>{
        const user = await findUserById(uid);

        setUser(user)

    }
    const checkUsers = async () => {
        const user = await findUserById(uid);
        setUser(user)
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        if (user._id === payload._id){
            navigate("../profile")
        }
    }

    const getCurrentUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    const {wall, loading} = useSelector(state => state.wall)

    useEffect( () => {
        // getUser();
        dispatch(findAllPostsThunk());
        // getCurrentUser();
        checkUsers();
    }, [uid]);

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
                "uid" : usersPage._id,
                "cid": profile._id,
                "post" : toPost,
            }
            dispatch(createPostThunk(sending));
            clearInput()
        }


    }

    const handleCommentNoUser = () => {
        alert("You must be logged in to comment! Navigating to login screen.")
        clearInput()
        navigate("../../login-signup")

    }

    const followHandler = () => {
        alert("awww u want to follow me")
    }

    const follow = async () =>{
        const action = await dispatch(followUserThunk(uid));
        console.log(action)
        console.log(action.error)
        if (action.error){
            alert("You are already following " + usersPage.firstName + "!")
        } else {
            alert("You are now following " + usersPage.firstName + "!")
        }

    }

    const unfollow = async () => {
        const action = await dispatch(unfollowUserThunk(uid))
        console.log(action)
        console.log(action.error)
        if (action.error){
            alert("You are not following " + usersPage.firstName +"!")
        } else {
            alert("You have unfollowed " + usersPage.firstName + ".")
        }

    }



    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 pt-3 ">
                    <div className="wd-profile fw-bold d-flex justify-content-between">
                        <span className="pe-2">Profile</span>

                        {profile && (
                            <div className="pe-3">
                                <button className="btn rounded-pill override-log" onClick={()=>follow()}> Follow </button>
                               <span className="ps-2"><button className="btn rounded-pill override-log"
                               onClick={()=>unfollow()}> Unfollow </button> </span>
                            </div>
                        )}


                    </div>
                    <div className="wd-profile-info-box mt-2 pb-3">
                        <div className="row">
                            <div className="col-4">
                                <div className="pt-2 fw-bolder wd-profile-name-font">
                                    {usersPage.firstName}
                                    <div className="fw-light fs-6 mb-2">{usersPage.username}</div>
                                </div>

                                <img className="wd-profile-icon" src = {usersPage.image}/>

                            </div>

                            <div className="col-6 col-lg-5 pt-5">
                                <div className="wd-inner-profile-box">
                                    <div className="wd-inner-profile-box-font ">
                                        User: <span className="wd-inner-profile-box-font-2"> {getAccountType() }</span>
                                    </div>
                                    <div className="wd-inner-profile-box-font">
                                        Status: <span className="wd-inner-profile-box-font-2"> {usersPage.status}</span>
                                        {/*Status: <span className="wd-inner-profile-box-font-2"> {user.status}</span>*/}
                                    </div>
                                </div>


                            </div>
                            <div className="col-3">

                            </div>
                        </div>



                    </div>

                    <br></br>
                    <ul className="list-group override-no-borders">
                        <li className="list-group-item override-blue-dark-my-team fw-bold text-white">
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

                <div className="col-12 col-lg-7 pt-3">
                    <div className="ps-3 wd-wall-format fw-bolder text-white">
                        My Wall
                    </div>
                    <div className="wd-comment-box-grey overflow-auto">
                        <ul className="list-group override-no-borders">
                            {/*<li className="list-group-item override-purple-dark-my-wall fw-bolder text-white">*/}
                            {/*    My Wall*/}
                            {/*</li>*/}

                            { wall.filter(e => e.uid === usersPage._id).length > 0 ?
                                wall.filter(e => e.uid === usersPage._id).map(post=> <WallPostComponent
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

                            {currentUser !== null ?
                                <button className="btn override-button"
                                        onClick={()=>handleComment()}>Comment</button>

                                :

                                <button className="btn override-button"
                                        onClick={()=>handleCommentNoUser()}>Comment</button>

                            }

                        </div>
                    </li>


                </div>

            </div>

            <div className="row">
                <div className="col-12 col-md-5 pt-3">

                </div>



            </div>

        </div>
    );
}

export default UserComponent;