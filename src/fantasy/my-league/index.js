import React, {useState} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import MyTeamComponent from "./my-team";
import DraftComponent from "./draft";
import LeaderboardComponent from "./leaderboard";
import "../index.css"


const MyLeagueComponent = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2]
    console.log(active)


    return(
        <div>

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

            <Routes>
                <Route path="/" index element={<MyTeamComponent/>}/>
                <Route path="my-team" element={<MyTeamComponent/>}/>
                <Route path="draft" element={<DraftComponent/>}/>
                <Route path="leaderboard" element={<LeaderboardComponent/>}/>
            </Routes>
        </div>
    );
};

export default MyLeagueComponent;