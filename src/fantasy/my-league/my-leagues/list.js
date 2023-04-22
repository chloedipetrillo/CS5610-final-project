import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "../../../services/users/users-thunks";
import {findAllLeaguesThunk} from "../../../services/my-leagues/my-league-thunks";
import {getLeaguesIJoinedThunk} from "../../../services/team-leagues/team-leagues-thunks";
import {getAllUsersInLeague, getLeaguesIJoined} from "../../../services/team-leagues/team-leagues-services";
import {findAllLeagues, findLeaguesByLID} from "../../../services/my-leagues/my-league-services";
import {Link} from "react-router-dom";
import {findTeams} from "../../../services/my-team/my-team-services";

function ListLeaguesComponent() {

    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload;
    }


    const [toSearch, setSearch] = useState("")
    const { myLeagues, loading} = useSelector((state) => state.myLeagues);
    const [allLeagues, setAll] = useState(myLeagues)
    // const [allUsers, setUsers] = useState(myLeagues)
    const searchHandler = async () => {
        await getList();
        alert("trying to search a league")
    }

    const searchValue = (val)=>{
        setSearch(val)
    }

const getLeagueName= async(id) =>{
        const l = await findLeaguesByLID(id)
    return l.leagueName
}
    const getList = async () => {

        await dispatch(getLeaguesIJoinedThunk(profile._id));
        const all = await getLeaguesIJoined(profile._id);
        // console.log(all)
        setAll(all);
        all.forEach(function(league) {
            // console.log("league name here is : " + league.leagueName);
            getListOfUsers(league);
        });

    }
    let allUsers = []
    const getListOfUsers = async (l) => {
        // console.log("users for league : " + l.leagueName)
        await dispatch(findAllLeaguesThunk(l.leagueId));
        const users = await getAllUsersInLeague(l.leagueId);
        // console.log("all users for league " + l.leagueName + "are : " + JSON.stringify(users))
        for (const user of users) {
            // console.log("user id here is : " + user.userId);
            // const t = await findTeams(prof._id);
            const t = await findTeams(user.userId)
            // console.log("the score for the team is : " + t.totalScores)
            // allUsers
            allUsers.push(user.userId)
        }
        // console.log("the users here are : " + allUsers)
    }

    useEffect(() => {
        getList();
    }, []);


    return (
        <div>
            {allLeagues && (
                <ul className="list-group mt-2">
                    <li className="list-group-item override-pink-dark-information text-white fw-bold wd-font-size-larger">List of My Leagues</li>
                    {allLeagues.map((l)=>
                    <li className="list-group-item override-search-light-grey fw-bold">
                        {l.leagueName}

                        <Link to={`./${l.leagueId}`} className="btn btn-darkbtn btn-dark float-end rounded-pill" >Leaderboard Details</Link>

                    </li>
                    )}



                </ul>
            )}


        </div>
    );
}

export default ListLeaguesComponent;