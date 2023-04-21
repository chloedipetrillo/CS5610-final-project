import React, {useEffect, useState} from "react";
import "../../componentSearch/index.css"
import TeamDraftComponent from "../my-team-draft";
import {findTeamThunk} from "../../../services/my-team/my-team-thunks";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../../services/users/users-thunks";
import {findTeams} from "../../../services/my-team/my-team-services";
import standings from "../../official-standings/standings.json";
import StandingItem from "../../official-standings/standing-item";
import PlayerIndvComponent from "../get-player/player-indv";
import {Link} from "react-router-dom";
const USERS_API_URL = "http://localhost:4000/api/myTeam";
const PLAYERS_API_URL = "http://localhost:4000/api/search";
const MyTeamComponent = (
) => {
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }

    useEffect( () => {
        findTeam();
    }, []);

    const { myTeam, loading} = useSelector((state) => state.myTeam);
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


    const searchHandler = () => {
        // let p = getList();
        console.log(team)
    }

    return(
        <div className="row">
            <div className="d-none d-md-block col-3">
            </div>
            <div className="col-12 col-md-6">
                {profile && team  && (
                    <>
                        my team page NEHA DO ThiS
                        {console.log(profile)}
                        <ul className="list-group">
                            {/*{*/}
                            {/*    team.map((member) => <PlayerIndvComponent*/}
                            {/*        key={member._id}*/}
                            {/*        person={member}/>)*/}
                            {/*}*/}

                            {
                                team.map((person) =>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-3">
                                                <img className=" wd-logo-pic-bigger mt-1 ps-2"
                                                     src={person.photo}/>
                                            </div>
                                            <Link to={`../../details/${person._id}`} className="col-9 text-decoration-none text-black">
                                                <div className="fw-bold">{person.first_name} {person.second_name}</div>
                                                <div> Team: {person.team_name} </div>
                                                <div> Position: {person.position} </div>
                                                <div> Value: {person.value} </div>
                                            </Link>
                                        </div>
                                    </li>)
                            }
                        </ul>



                    </>

                )}
            </div>



            <div className="d-none d-md-block col-3">
            </div>

        </div>
    );
};

export default MyTeamComponent;