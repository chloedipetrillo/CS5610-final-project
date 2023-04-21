import React, {useState} from "react";
import "../index.css"
import "./index.css"
import {Link, useLocation} from "react-router-dom";
import {useSelector, useDisptach, useDispatch} from "react-redux";
import {logoutThunk} from "../../services/users/users-thunks";
import {useNavigate} from "react-router";



const NavComponent = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.users);
    let loggedIn = currentUser !== null;
    let start = false
    const [showDrop, setDrop] = useState(start)
    const handleDropdown =() => {
        setDrop(!showDrop)
    }
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[ paths.length-1];
    const handleLogout = () => {
        dispatch(logoutThunk());
        navigate("/login-signup")
        console.log("hi")


    };


    return (
        <div>
            <div className="row">
                <div className="col-12 p-nav-bar">
                    <div className="d-none d-md-block">
                        <Link to="../home" className="text-decoration-none text-black">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1024px-Soccerball.svg.png"
                            className="wd-logo-pic mt-1"/>
                        </Link>
                            <div className="float-end mt-2 mb-2">
                                <ul className="nav nav-pills">
                                    <li className="nav-item ">
                                        <Link to="../search" htmlFor="search" className={active === "search" ?
                                            "nav-link text-black active override-active-nav fw-bold"
                                            :
                                            "nav-link text-white fw-bold"
                                        }><i className="bi bi-search"></i> </Link>
                                    </li>

                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <Link to="../my-league" className={active === "my-team" || active === "draft"
                                            || active==="leaderboard" || active === "my-league" ?
                                                "nav-link text-black active override-active-nav fw-bold"
                                                :
                                                "nav-link text-white fw-bold"
                                            }

                                            >MyLeague</Link>
                                            <div className="dropdown-content">
                                                <div className="list-group">
                                                    <div className="list-group-item override-lgi-nav-below">
                                                        <Link to="../my-league/my-team" className="text-decoration-none fw-bold text-white"
                                                        >MyTeam</Link>
                                                    </div>
                                                    <div className="list-group-item override-lgi-nav-below">
                                                        <Link to="../my-league/draft" className="text-decoration-none fw-bold text-white"
                                                        >Draft</Link>
                                                    </div>
                                                    <div className="list-group-item override-lgi-nav-below">
                                                        <Link to="../my-league/leagues" className="text-decoration-none fw-bold text-white"
                                                        >Leagues</Link>
                                                    </div>
                                                    <div className="list-group-item override-lgi-nav-below">
                                                        <Link to="../my-league/leaderboard" className="text-decoration-none fw-bold text-white"
                                                        >Leaderboard</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="../how-to-play" className=
                                            {active === "how-to-play" ?
                                                "nav-link text-black active override-active-nav fw-bold"
                                                :
                                                "nav-link text-white fw-bold"
                                            }
                                        >How to Play</Link>
                                    </li>
                                    { loggedIn ? '' :
                                        <li className="nav-item">

                                            <Link to="../login-signup" className=
                                                {active === "login-signup" ?
                                                    "nav-link text-black active override-active-nav fw-bold"
                                                    :
                                                    "nav-link text-white fw-bold"
                                                }
                                            >Login/Sign-up</Link>


                                        </li>}

                                    {
                                        loggedIn && currentUser.userType === "admin" ?
                                            <li className="nav-item">
                                                <Link to="../admin-page" className=
                                                    {active === "admin-page" ?
                                                        "nav-link text-black active override-active-nav fw-bold"
                                                        :
                                                        "nav-link text-white fw-bold"
                                                    }
                                                >Admin</Link>
                                            </li>
                                            : ''
                                    }
                                    {
                                        loggedIn && currentUser.userType === "commissioner" ?
                                            <li className="nav-item">
                                                <Link to="../league-commissioner" className=
                                                    {active === "league-commissioner" ?
                                                        "nav-link text-black active override-active-nav fw-bold"
                                                        :
                                                        "nav-link text-white fw-bold"
                                                    }
                                                >Commissioner</Link>
                                            </li>
                                            : ''
                                    }

                                    <li className="nav-item">
                                        <Link to="../profile" className=
                                            {active === "profile" ?
                                                "nav-link text-black active override-active-nav fw-bold"
                                                :
                                                "nav-link text-white fw-bold"
                                            }
                                        ><i className="bi bi-person-fill"></i></Link>
                                    </li>

                                    {loggedIn ?
                                        <li className="nav-item">
                                            <div onClick={() => handleLogout()} className="nav-link text-white fw-bold">
                                                <i className="bi bi-power"></i>
                                            </div>
                                        </li>
                                        : ''
                                    }

                                </ul>
                            </div>
                        </div>
                    <div className="col-12 d-md-none">
                        <ul className="list-group override-lg-nav">
                            <li className="list-group-item override-lgi-nav">
                                <Link to="../home" className="text-decoration-none text-black">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1024px-Soccerball.svg.png"
                                         className="wd-logo-pic-small mt-1"/>
                                </Link>
                            </li>

                            <li className="list-group-item override-lgi-nav">
                                <Link to="../search" htmlFor="search" className={active === "search" ?
                                    "list-group-item override-lgi-nav-selected fw-bold"
                                    :
                                    "list-group-item override-lgi-nav text-white"
                                }><i className="bi bi-search"></i> </Link>
                            </li>


                            <li className={active === "my-league" ?
                                "list-group-item override-lgi-nav-selected fw-bold"
                                :
                                "list-group-item override-lgi-nav"
                            }>
                                <Link to="my-league" className={
                                    active === "my-league" ?
                                        "text-decoration-none fw-bold text-black position-relative"
                                        :
                                        "text-decoration-none fw-bold text-white position-relative"
                                }>MyLeague




                                </Link>
                            </li>
                            <li className={active === "how-to-play" ?
                                "list-group-item override-lgi-nav-selected fw-bold"
                                :
                                "list-group-item override-lgi-nav"
                            }>
                                <Link to="../how-to-play" className={
                                    active === "how-to-play" ?
                                        "text-decoration-none fw-bold text-black"
                                        :
                                        "text-decoration-none fw-bold text-white"
                                }>How to Play</Link>
                            </li>

                            <li className={active === "login-signup" ?
                                "list-group-item override-lgi-nav-selected fw-bold"
                                :
                                "list-group-item override-lgi-nav"
                            }>

                                <Link to="../login-signup" className={
                                    active === "login-signup" ?
                                        "text-decoration-none fw-bold text-black"
                                        :
                                        "text-decoration-none fw-bold text-white"
                                } >Login/Sign-up</Link>


                            </li>

                            {loggedIn && currentUser.userType === "admin" && (
                                <li className={active === "admin-page" ?
                                    "list-group-item override-lgi-nav-selected fw-bold"
                                    :
                                    "list-group-item override-lgi-nav"
                                }>

                                    <Link to="../login-signup" className={
                                        active === "admin-page" ?
                                            "text-decoration-none fw-bold text-black"
                                            :
                                            "text-decoration-none fw-bold text-white"
                                    } >Admin</Link>


                                </li>)
                            }

                            {loggedIn && currentUser.userType === "commissioner" && (
                                <li className={active === "league-commissioner" ?
                                    "list-group-item override-lgi-nav-selected fw-bold"
                                    :
                                    "list-group-item override-lgi-nav"
                                }>

                                    <Link to="../league-commissioner" className={
                                        active === "league-commissioner" ?
                                            "text-decoration-none fw-bold text-black"
                                            :
                                            "text-decoration-none fw-bold text-white"
                                    } >Commissioner</Link>


                                </li>)
                            }

                            <Link to="../profile" className={active === "profile" ?
                                "list-group-item override-lgi-nav-selected fw-bold"
                                :
                                "list-group-item override-lgi-nav"
                            }>
                                <Link to="../profile" className={
                                    active === "profile" ?
                                        "text-decoration-none fw-bold text-black"
                                        :
                                        "text-decoration-none fw-bold text-white"
                                }><i className="bi bi-person-fill"></i></Link>
                            </Link>



                            {loggedIn ?
                                <li className="list-group-item override-lgi-nav">
                                    <div onClick={() => handleLogout()} className="text-decoration-none fw-bold text-white">
                                        <i className="bi bi-power"></i>
                                    </div>
                                </li>
                                : ''
                            }

                        </ul>
                    </div>

                    </div>


            </div>


        </div>

    );
};
export default NavComponent;