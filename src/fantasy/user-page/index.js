import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
import {Link} from "react-router-dom";
import WallPostComponent from "../profile/wall-posts";
import {createPostThunk, findAllPostsThunk} from "../../services/wall/wall-thunks";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";


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


    // const getCurrentUser = async () =>{
    //     const { payload } = await dispatch(profileThunk());
    //     setProfile(payload);
    // }

    const {wall, loading} = useSelector(state => state.wall)

    useEffect( () => {
        getUser();
        dispatch(findAllPostsThunk());
        // getCurrentUser();
    }, []);

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

    const searchValue = (val)=>{
        setComment(val)
        console.log(currentUser)
        console.log("hi")
    }
    //
    function clearInput() {
        document.getElementById("Form").reset();
    }

    const handleComment = () => {
        let sending = {
            "uid" : usersPage._id,
            "cid": profile._id,
            "post" : toPost,
        }
        dispatch(createPostThunk(sending));
        clearInput()

    }

    const handleCommentNoUser = () => {
        alert("You must be logged in to comment! Navigating to login screen.")
        clearInput()
        navigate("../../login-signup")

    }

    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 pt-3 ">
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

                            <div className="col-6 col-lg-5 pt-5">
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

                    <br></br>
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

                <div className="col-12 col-lg-7 pt-3">
                    <ul className="list-group override-no-borders">
                        <li className="list-group-item override-purple-dark-my-wall fw-bolder">
                            My Wall
                        </li>

                        { wall.filter(e => e.uid === usersPage._id).length > 0 ?
                            wall.filter(e => e.uid === usersPage._id).map(post=> <WallPostComponent
                                key={post._id}
                                post={post}/>)
                            :
                            <li className="list-group-item override-purple-light-my-wall">
                                No comments to display... Be the first to leave a comment!
                            </li>
                        }

                        <li className="list-group-item override-purple-dark-my-wall fw-bolder">
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


                    </ul>


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