import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ManageUsersComponent from "./view-users";
import ManageScoresComponent from "./manage-scores";
import {useNavigate} from "react-router";
import {profileThunk} from "../../services/users/users-thunks";
import "./index.css";



const AdminComponent = (

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


    let start = true;
    const [seeUsers, setSee] = useState(start)

    const viewUsersHandler = () => {
        setSee(true)
    }
    const viewPointsHandler = () => {
        setSee(false)
    }
    return (
        <>
            { profile && profile.userType === "admin" ?
                <div className="row mt-2">
                    <div className="d-none d-md-block col-3">
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center">
                            <span className="pe-2"> <button className="btn override-log pe-2 mb-1" onClick={() => viewUsersHandler()}>View Users</button> </span>
                            <button className="btn override-log mb-1" onClick={() => viewPointsHandler()}>Manage Scores</button>
                        </div>

                        {seeUsers ? <ManageUsersComponent/> : <ManageScoresComponent/>}


                    </div>

                    <div className="d-none d-md-block col-3">

                    </div>

                </div>
                :
                <div className="mt-5">
                    <div className="mt-5 center wd-access-blocked">
                        <i className="bi bi-lock-fill fs-5"></i>
                        <div>
                            ADMIN ACCESS ONLY, PAGE BLOCKED.
                        </div>
                        <div>
                            USER TYPE MUST BE AN ADMIN.
                        </div>

                    </div>

                </div>
            }
        </>



    );
};
export default AdminComponent;