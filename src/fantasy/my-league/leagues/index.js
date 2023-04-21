import SearchLeaguesComponent from "./search-leagues-component";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {profileThunk} from "../../../services/users/users-thunks";

const LeaguesComponent = () => {

    const dispatch = useDispatch();
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }
    useEffect( () => {
        getUser();
    }, []);
    return (

    <>
        {profile && (
            <div className="row mt-2">
                <div className="d-12 col-md-6">
                    SEARCH FUNCITONALITY TO SEARCH ALL  LEAGUES (WILL HAVE NAME CANT CLICK UNLESS U JOIN IT)
                    <SearchLeaguesComponent/>
                </div>
                <div className="col-12 col-md-6">
                    LIST OF ALL YOUR LEAGUES IF YOU CLICK ONE IT WILL LINK TO THE LEADERBOARD
                </div>
            </div>
        )}

    </>



    );
}

export default LeaguesComponent;