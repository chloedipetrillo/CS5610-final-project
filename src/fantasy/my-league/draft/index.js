import React, {useEffect, useState} from "react";
import DraftPerson from "./draft-person";
import playerArray from "../../componentSearch/fakedata.json"
import "../../componentSearch/index.css"
import TeamDraftComponent from "../my-team-draft";
import SearchItem from "../../componentSearch/search-item";
import {findTeams} from "../../../services/my-team/my-team-services";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../../services/users/users-thunks";
import {useParams} from "react-router";
const USERS_API_URL = "http://localhost:4000/api/players";

const DraftComponent = (

) => {
    const {name, last} = useParams();
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }

    // const dispatch = useDispatch()
    const [toSearch, setSearch] = useState(name + " " + last)
    //
    const [people, setPeople] = useState({})
    //

    const getList = async () => {
        if (toSearch) {
            let request = USERS_API_URL + "/:" +toSearch;
            const res = await fetch(request);
            const data = await res.json();
            setPeople(data)
        }else{
            setPeople({})
        }

    }
    const searchHandler = () => {
        let p = getList();
    }


    const searchValue = (val)=>{
        setSearch(val)
    }

    // load from user
    const [team, setTeam] = useState([])

    // const getCurrTeam = async () => {
    //     await getUser();
    //     const teamEntry = await findTeams(profile._id);
    //     if (teamEntry){
    //         setTeam(teamEntry.team)
    //     }
    // }

    const findTeam = async () => {
        const prof = await getUser();

        if (prof){
            const t = await findTeams(prof._id);
            if (t){
                setTeam(t.team)
            }

        }

    }

    useEffect(() => {
        findTeam();
        if (toSearch) {
            searchHandler();
        }else{
            setPeople({})
        }

    }, []);




    const onDraftBoolHandler = (player, bool) => {
        if (bool) {
            team.push(player);
            setTeam(team)
            searchHandler()
        } else {
            setTeam(team.filter(member => member._id !== player._id));
        }
        console.log(team)
    }

    return (
        <div >
            { profile && (
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-11">
                                <div className="position-relative pe-2">
                                    <input id="search" className="ps-5 form-control rounded-pill override-fc border-1"
                                           onChange={(event) => searchValue(event.target.value)}
                                           placeholder="Search Player by team, name, position..."/>
                                    <span className="p-search-icon">
                            <i className="bi bi-search"></i>
                        </span>
                                </div>
                            </div>
                            <div className="col-1 ps-2">
                                <button onClick={() => searchHandler()} className="btn override-button float-end">Go</button>
                            </div>
                        </div>
                        <ul className="list-group mt-2">
                            <li className="list-group-item override-pink-dark-information text-white fw-bolder">Search Results</li>
                            { people.length > 0 ?
                                people.map(person => <DraftPerson team={team} onDraftBoolHandler={onDraftBoolHandler}

                                                                  key={person._id}
                                                                  person={person}/>)
                                :
                                <li className="list-group-item override-search-light-grey">
                                    No results to display...
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <TeamDraftComponent draftList={team}/>
                    </div>
                </div>
            )}
        </div>


    );
};
export default DraftComponent;