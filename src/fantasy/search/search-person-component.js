import {useParams} from "react-router";
import fakeArray from "./fakePerson.json"
import {useEffect, useState} from "react";
const USERS_API_URL = "http://localhost:4000/api/search";

const SearchPersonComponent = () => {
    const [player, setPlayer] = useState({})
    const {pid} = useParams()
    const searchPlayers = async () => {
        let request = USERS_API_URL + "/:" + pid;
        const res = await fetch(request);
        const data = await res.json();
        //alert(request)
        setPlayer(data)
        return data;
    }

    console.log(player)
    //
    // getList()
    //
    // const person = player[0]
    // console.log(person)
    useEffect(() => {
        if (pid) {
            searchPlayers();
        }
    }, [pid]);
     let person = fakeArray[0]
    console.log(player)

    return(
        <div>
            <div >
                <img src={player.photo}/>
                <h1>{player.first_name} {player.second_name}</h1>
                {player.news ?
                    <div>
                        <h3>News</h3>
                        <ul>
                            <li>{player.news} {player.news_added}</li>
                        </ul>
                    </div>
                    :

                ''}

                <h3>Stats</h3>
                <ul>
                    <li>Minutes: {player.minutes}</li>
                    <li>Goals: {player.goals_scored}</li>
                    <li>Assists: {player.assits}</li>
                    <li>Yellow cards: {player.yellow_cards}</li>
                    <li>Red Cards: {player.red_cards}</li>
                    <li>Threat: {player.threat}</li>
                    <li>Influence: {player.influence}</li>

                </ul>
            </div>

        </div>
    )
}
export default SearchPersonComponent;