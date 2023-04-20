import React, {useEffect, useState} from "react";
import "../../componentSearch/index.css"
import TeamDraftComponent from "../my-team-draft";
const USERS_API_URL = "http://localhost:4000/api/myTeam";

const MyTeamComponent = (
    {TeamList}
) => {
    const [team, setTeam] = useState({})

    const searchHandler = () => {
        // let p = getList();
        console.log(team)
    }
    useEffect(() => {
            searchHandler();
            setTeam({})
    }, []);

    return(
        <div>
            my team page
        </div>
    );
};

export default MyTeamComponent;