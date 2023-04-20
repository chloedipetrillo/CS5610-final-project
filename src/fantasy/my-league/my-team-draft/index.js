import React, {useEffect, useState} from "react";
import SearchItem from "../../componentSearch/search-item";
import TeamDraftPlayer from "./my-team-draft";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../../services/users/users-thunks";
import {
    createTeamThunk,
    deleteTeamThunk,
    findTeamThunk,
    updateTeamThunk
} from "../../../services/my-team/my-team-thunks";

const TeamDraftComponent = (
    {
        draftList
    }
) => {

    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect( () => {
        getUser();
    }, []);

    const createTeam = (playerCodes) => {
        let userID = "";
        if (profile){
            userID = profile._id;
        }
        let sending = {
            "userId": userID,
            "team" : playerCodes,
        }
        dispatch(createTeamThunk(sending));
    }

    const deleteTeam = () => {
        let userID = "";
        if (profile){
            userID = profile._id;
        }
        let sending = {
            "userId": userID,
        }
        dispatch(deleteTeamThunk(sending));
    }

    const updateTeam = (playerCodes) => {
        let userID = "";
        if (profile){
            userID = profile._id;
        }
        let sending = {
            "userId": userID,
            "team" : playerCodes,
        }
        dispatch(updateTeamThunk(sending));
    }

    const findTeam = () => {
        let userID = "";
        if (profile){
            userID = profile._id;
        }
        let sending = {
            "userId": userID,
        }
        dispatch(findTeamThunk(sending));
    }

    console.log("current user is : " + profile)
    const saveDraft = ()=> {

        // alert("Drafting players!" + JSON.stringify(draftList))
        let no_of_gk = 0
        let no_of_def = 0
        let no_of_mid = 0
        let no_of_att = 0
        let playerCodes = []
        draftList.forEach(function(player) {
            playerCodes.push(player._id)
            if(player.position === "Goalkeeper"){
                no_of_gk++
            }
            if(player.position === "Defender"){
                no_of_def++
            }
            if(player.position === "Midfielder"){
                no_of_mid++
            }
            if(player.position === "Forward"){
                no_of_att++
            }
        });
        let total_players = no_of_gk + no_of_def + no_of_mid + no_of_att;
        console.log("find team result is : " + findTeam())
        if(no_of_gk > 1 || no_of_def > 4 || no_of_mid > 3 || no_of_att > 3 || total_players > 11 || total_players === 0) {
            alert("no of gk is : " + no_of_gk + "no of def is : " + no_of_def + "no of mid is : " + no_of_mid + "no of att is : " + no_of_att)
        } else if(findTeam()){
            updateTeam(playerCodes)
        }
        else{
            createTeam(playerCodes)
            // alert("profile id is : " + profile._id + "\nplayers are : " + playerCodes)
        }
    }

    return (
        <div className="row mt-2">
            <div className="col-1">
            </div>
            <div className="col-11">
                <ul className="list-group">
                    <li className="list-group-item override-pink-dark-information text-white fw-bolder">
                        <button className="float-end btn btn-dark rounded-pill"
                        onClick={()=>saveDraft()}> Save </button>
                        <div>Drafted Players</div>

                    </li>
                    {
                        draftList.map(player => <TeamDraftPlayer
                            key={player._id}
                            person={player}/>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default TeamDraftComponent;