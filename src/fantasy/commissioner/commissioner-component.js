import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "../../services/users/users-thunks";




const CommissionerComponent = (

) => {
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect( () => {
        getUser();

    }, []);


    return (
        <>
            { profile && profile.userType === "commissioner" ?
                <div className="row mt-2">
                    <div className="d-none d-md-block col-3">
                    </div>
                    <div className="col-12 col-md-6">



                        ALL OF THE LEAGUE COMMISSIONER STUFF WILL GO HERE








                    </div>
                    <div className="d-none d-md-block col-3">
                    </div>
                </div>
                :
                <div className="mt-5">
                    <div className="mt-5 center wd-access-blocked">
                        <i className="bi bi-lock-fill fs-5"></i>
                        <div>
                            LEAGUE COMMISSIONER ACCESS ONLY, PAGE BLOCKED.
                        </div>
                        <div>
                            USER TYPE MUST BE A COMMISSIONER.
                        </div>

                    </div>

                </div>
            }
        </>



    );
};
export default CommissionerComponent;