import {useEffect, useState} from "react";
import {findAllCommentsThunk} from "../../../services/comments/comment-thunks";

const PLAYERS_API_URL = "http://localhost:4000/api/search";
const PlayerIndvComponent = (
    {
        person
    }
) => {


    // const [player, setPlayer] = useState({})
    // const fetchPlayerInfo = async () => {
    //     let request = PLAYERS_API_URL + "/:" + person;
    //     const res = await fetch(request);
    //     const data = await res.json();
    //     //alert(request)
    //     setPlayer(data)
    //     console.log(data)
    //     return data;
    // }
    //
    // useEffect(() => {
    //     fetchPlayerInfo();
    //
    // }, [])

    return(
        <li className="list-group-item">
            <br></br>
            {person}
            {person.first_name} {person.second_name}
        </li>
    );
};

export default PlayerIndvComponent;