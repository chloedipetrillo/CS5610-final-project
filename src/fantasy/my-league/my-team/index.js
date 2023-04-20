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
const USERS_API_URL = "http://localhost:4000/api/myTeam";

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
            console.log(prof._id)
            const t = await findTeams(prof._id);
            console.log("PAYLOAD")
            console.log(t)
            setTeam(t)
        }

    }

    const searchHandler = () => {
        // let p = getList();
        console.log(team)
    }

    return(
        <div>
            {profile && (
               <>
                   my team page
                   {console.log(profile)}

                   {
                       team.map((member, i) => <PlayerIndvComponent
                           key={i}
                           player={member}/>)
                   }
               </>

            )}

        </div>
    );
};

export default MyTeamComponent;