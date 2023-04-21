import React from "react";
import {joinALeague} from "../../../services/team-leagues/team-leagues-services";
import {useDispatch} from "react-redux";
import {getLeaguesIJoinedThunk, joinLeagueThunk} from "../../../services/team-leagues/team-leagues-thunks";

const SearchItemComponent = ({
    leg, userId
                             }) => {

    const dispatch = useDispatch()


    const handleJoin = async () =>{

        if (userId){
            const newJoin = {
                leagueId: leg._id,
                leagueName: leg.leagueName,
                userId: userId
            }
            const action = await dispatch(joinLeagueThunk(newJoin))
            if (action.error){
                alert("You are aready a part of this league!")
            }
        }
    }
    return (
        <>

                    <li className="list-group-item override-search-light-grey override-border-radius fw-bold">
                        {leg.leagueName}

                        <button className="btn btn-success float-end"
                        onClick={()=>handleJoin()}>Join</button>
                    </li>

        </>
    );
}

export default SearchItemComponent;