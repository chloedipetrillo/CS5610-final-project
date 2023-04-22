import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "../../../services/users/users-thunks";
import {findAllLeaguesThunk} from "../../../services/my-leagues/my-league-thunks";
import {getLeaguesIJoinedThunk} from "../../../services/team-leagues/team-leagues-thunks";
import {getLeaguesIJoined} from "../../../services/team-leagues/team-leagues-services";
import {findAllLeagues, findLeaguesByLID} from "../../../services/my-leagues/my-league-services";

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
        console.log(all)
        setAll(all);
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div>
            {allLeagues && (
                <ul className="list-group mt-2">
                    <li className="list-group-item override-pink-dark-information text-white fw-bold wd-font-size-larger">List of My Leagues</li>
                    {console.log(allLeagues)}

                    {allLeagues.map((l)=>
                    <li className="list-group-item override-search-light-grey ">
                        {l.leagueName}
                    </li>
                    )}



                </ul>
            )}


        </div>
    );
}

export default ListLeaguesComponent;