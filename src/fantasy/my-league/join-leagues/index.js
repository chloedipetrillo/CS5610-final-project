import SearchLeaguesComponent from "./search-leagues-component";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {profileThunk} from "../../../services/users/users-thunks";

const JoinLeaguesComponent = () => {

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
                <div className="d-none d-md-block col-3"></div>
                <div className="col-12 col-md-6">
                    <SearchLeaguesComponent/>
                </div>
                <div className="d-none d-md-block col-3"></div>

            </div>
        )}

    </>



    );
}

export default JoinLeaguesComponent;