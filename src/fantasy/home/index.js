import React, {useEffect, useState} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findAllLeaguesThunk} from "../../services/my-leagues/my-league-thunks";
import {findAllLeagues} from "../../services/my-leagues/my-league-services";
import {findAllPostsThunk} from "../../services/wall/wall-thunks";
import {profileThunk} from "../../services/users/users-thunks";
import {findTeams} from "../../services/my-team/my-team-services";
import {Link} from "react-router-dom";



const HomeComponent = (

) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const navigate = useNavigate();

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }
    const signUpHandler = () => {
        (navigate("../login-signup"))

    }

    const { myLeagues, loading} = useSelector((state) => state.myLeagues);
    const [allLeagues, setAll] = useState(myLeagues)
    const getList = async () => {
        const prof = getUser();
        await dispatch(findAllLeaguesThunk());
        const all = await findAllLeagues();
        setAll(all);
    }

    const {wall, l} = useSelector(state => state.wall)

    useEffect(() => {
        getList();
        findTeam();

    }, []);

    const newestLeague = allLeagues[allLeagues.length -1]

    const { myTeam, load} = useSelector((state) => state.myTeam);
    const [team, setTeam] = useState(myTeam)
    const [newestMember, setNewest] = useState('')
    const findTeam = async () => {
        const prof = await getUser();

        if (prof){
            const t = await findTeams(prof._id);
            if (t){

                setTeam(t.team)
                console.log("TEAM")
                console.log(t.team)
                const newest = t.team[t.team.length -1]
                console.log(newest)
                setNewest(newest)
            }

        }

    }






    return (
        <>
            <div className=" row" >
                <div className=" d-none d-md-block col-12 wd-home-page fw-bolder mb-3 ">
                    Fantasy Premier League
                </div>
                <div className="col-12 d-md-none wd-home-page fw-bolder mb-3 ">
                    Fantasy <br></br>
                    Premier League
                </div>
            </div>

            <div className="row mb-2 wd-background-home">

                {/*this only looks good in full screen*/}
                <div className="col-12">
                    <div className="">
                        <div className="slider position-relative">
                            <span id="slide-1"></span>
                            <span id="slide-2"></span>
                            <span id="slide-3"></span>
                            <div className="image-container  ">
                                <img src="https://resources.premierleague.com/premierleague/photo/2017/08/04/776ffd6c-8531-4241-9a47-b7cf51e442d6/GettyImages-605696572.jpg"
                                     className="slide wd-width-height wd-img" />
                                <img src="https://resources.premierleague.com/premierleague/photo/2016/11/17/d6105a4c-d7a7-4c19-b51f-9a0e0b54005c/GettyImages-619482788.jpg"
                                     className="slide wd-width-height wd-img"/>
                                <img src="https://i0.wp.com/sportmuse.net/wp-content/uploads/2019/01/stadium.jpeg"
                                     className="slide wd-width-height wd-img"/>

                            </div>
                            <div className="buttons">
                                <span className="pe-2">  <a href="#slide-1"></a> </span>
                                <span className="pe-2">  <a href="#slide-2"></a> </span>

                                <a  href="#slide-3"></a>
                            </div>

                            {currentUser !== null ?
                                <div className="wd-welcome-nudge d-none d-lg-block">
                                    Welcome, {currentUser.firstName}!
                                </div> :
                                <div className="wd-welcome-nudge d-none d-lg-block">
                                    Welcome!
                                </div>}

                            {currentUser !== null ?
                                <div className=" d-none d-sm-block d-lg-none wd-welcome-nudge-md">
                                    Welcome, {currentUser.firstName}!
                                </div> :
                                <div className="d-lg-none wd-welcome-nudge-md">
                                    Welcome!
                                </div>}

                            {currentUser !== null ?
                                <div className="d-sm-none wd-welcome-nudge-xs">
                                    Welcome, <br></br>{currentUser.firstName}!
                                </div> :
                                ''}

                        </div>



                    </div>


                </div>

            </div>





            <div className="row">
                {/*<div className="d-none d-md-block col-3"></div>*/}

                {currentUser === null ?
                    <>
                        <div className="col-2">

                        </div>
                        <div className="center col-8 wd-home-register-box mt-2">
                            Register to play Fantasy Premier League!

                            <button className="d-none d-lg-block btn rounded-pill float-end wd-sign-up mt-2"
                                    onClick={() => signUpHandler()}>

                                Log In/Sign Up
                            </button>

                            <div className="fw-lighter wd-font-register">
                                Create your own team, join leagues, and play against your friends!
                            </div>

                            <button className="d-lg-none btn rounded-pill wd-sign-up"
                                    onClick={() => signUpHandler()}>

                                Log In/Sign Up
                            </button>

                        </div>

                        <div className="col-2">

                        </div>
                    </> :
                    <>
                        <div className="col-2">

                        </div>
                        <div className="center col-8 wd-home-register-box mt-2">
                            <div>How do you like your newest team member, {newestMember.first_name} {newestMember.second_name}?</div>
                            <div className="fw-lighter wd-font-register">
                                <span className="pe-2"> Want to leave him some words of encouragement? Head to </span>
                                <Link to={`../details/${newestMember._id}`}
                                      className="btn override-log rounded-pill">Player Page</Link>
                            </div>
                            <div className="fw-lighter wd-font-register">
                                <span className="pe-2"> Want to switch things up? Head to </span>

                                <Link to={`../my-league/draft/${newestMember.first_name}/${newestMember.second_name}`}
                                      className="btn override-log rounded-pill">Draft</Link>
                            </div>
                        </div>

                        <div className="col-2">

                        </div>
                    </>
                }


                {currentUser === null ?
                    <>
                        <div className="col-2">

                        </div>
                        {newestLeague && (
                            <div className="center col-8 wd-home-register-box-pink mt-2">
                                Checkout our newest leagues to join!

                                <button className="d-none d-lg-block btn rounded-pill float-end wd-sign-up mt-2"
                                        onClick={() => signUpHandler()}>

                                    Log In/Sign Up
                                </button>

                                <div className="fw-lighter wd-font-register">
                                    The
                                    <span className="fw-bold"> {newestLeague.leagueName} </span>league has just been made! Create an account or sign in to join!
                                </div>

                                <button className="d-lg-none btn rounded-pill wd-sign-up"
                                        onClick={() => signUpHandler()}>

                                    Log In/Sign Up
                                </button>

                            </div>
                        )}


                        <div className="col-2">

                        </div>
                    </> :
                    <>
                    </>
                }









                {/*<div className="d-none d-md-block col-3"></div>*/}

            </div>




        </>



    );
};
export default HomeComponent;