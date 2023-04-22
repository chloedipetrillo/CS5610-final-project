import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../../services/users/users-thunks";
import {Link} from "react-router-dom";



const LeaderboardComponent = (

) => {

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

    return(
        <div>
            {profile && (
                <>
                    LEADER BOARD STUFF FOR LOGGED IN
                </>
            )

            }

        </div>
    );
};

export default LeaderboardComponent;