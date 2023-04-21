import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import MyTeamComponent from "./my-team";
import DraftComponent from "./draft";
import LeaderboardComponent from "./leaderboard";
import "../index.css"
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";
import {findAllPostsThunk} from "../../services/wall/wall-thunks";


const MyLeagueComponent = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2]

    const dispatch = useDispatch();
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }
    useEffect( () => {
        getUser();
    }, []);


    return(
        <div>
            {profile ?
                <ul className="nav nav-tabs mt-2 mb-2">
                    <li className="nav-item">
                        <Link className=
                                  {active===undefined || active === "my-team" ?
                                      "nav-link fw-bold text-decoration-none text-black override-link"
                                      :
                                      "nav-link fw-bold text-decoration-none text-black"
                                  }

                              to="./my-team">MyTeam</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={active === "draft" ?
                            "nav-link fw-bold text-decoration-none text-black override-link"
                            :
                            "nav-link fw-bold text-decoration-none text-black"
                        } to="./draft">Draft</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={active === "leaderboard" ?
                            "nav-link fw-bold text-decoration-none text-black override-link"
                            :
                            "nav-link fw-bold text-decoration-none text-black"
                        } to="./leaderboard">Leaderboard</Link>
                    </li>
                </ul>
                :

                <div className="wd-access-blocked mt-5 center">
                    <div className="mb-3">NOT SIGNED IN</div>
                    <Link to="../login-signup">
                        <button className="btn override-log">
                            Log-In/Sign-Up
                        </button>
                    </Link>
                </div>
            }


            <Routes>
                <Route path="/" index element={<MyTeamComponent/>}/>
                <Route path="my-team" element={<MyTeamComponent/>}/>
                <Route path="draft" element={<DraftComponent/>}/>
                <Route path="draft/:name/:last" element={<DraftComponent/>}/>
                <Route path="leaderboard" element={<LeaderboardComponent/>}/>
            </Routes>




        </div>
    );
};

export default MyLeagueComponent;