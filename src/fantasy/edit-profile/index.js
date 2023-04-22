import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {loginThunk, profileThunk, updateUserThunk} from "../../services/users/users-thunks";
import "./index.css"


function EditProfileComponent() {
    const { currentUser, load } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect( () => {
        getUser();
    }, []);

    //console.log(profile)

    const saveChangesHandler = async () => {
        await dispatch(updateUserThunk(profile));
        (navigate("../profile"))

    }
    const updateNameHandler = (target) => {
        setProfile({...profile, firstName: target})
    }

    const updatePasswordHandler = (target) => {
        setProfile({...profile, password: target})
    }

    const updateLastNameHandler = (target) => {
        setProfile({...profile, lastName: target})
    }

    const UpdateStatusHandler = (target) => {
        setProfile({...profile, status: target})
    }


    const UpdateEmailHandler = (target) => {
        setProfile({...profile, email: target})
    }

    const UpdateImageHandler = (target) => {
        setProfile({...profile, image: target})
    }

    const UpdatePhoneHandler = (target) => {
        setProfile({...profile, phone: target})
    }

    return (
        <div>
            {profile && (
                <>
                    <div className="row">
                        <div className = "col-1">
                            <Link to="../profile">
                                <div className= "pt-3">
                                    <i className="bi bi-x-lg text-black fs-5"></i>
                                </div>
                            </Link>
                        </div>
                        <div className = "col-8">
                            <div className="fw-bold wd-profile-font mt-3">
                                Edit Profile
                            </div>
                        </div>

                        <div className="col-3">
                            <div >
                                <button className="btn btn-dark rounded-pill w-85 float-end mt-1 me-2 mb-2"
                                        onClick={() => saveChangesHandler()}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="position-relative ">
                            <img className="wd-profile-pg-pic wd-nudge-edit mb-2 wd-prof-edit-pic" src={profile.image}/>
                            <div className="mb-3 position-relative">
                                <label htmlFor="name" className="wd-label-nudge text-muted fs-6"> Change Image Link</label>
                                <input className="form-control pt-4 w-100"
                                       value={profile.image}
                                       id="name"
                                       onChange={(event) => UpdateImageHandler(event.target.value)}>
                                </input>
                            </div>


                        </div>
                    </div>

                    <div className="mb-3 position-relative">
                        <label htmlFor="first-name" className="wd-label-nudge text-muted fs-6"> First Name</label>
                        <input className="form-control pt-4 w-100"
                               value={profile.firstName}
                               id="first-name"
                               onChange={(event) => updateNameHandler(event.target.value)}>
                        </input>
                    </div>

                    <div className="mb-3 position-relative">
                        <label htmlFor="last-name" className="wd-label-nudge text-muted fs-6"> Last Name</label>
                        <input className="form-control pt-4 w-100"
                               value={profile.lastName}
                               id="last-name"
                               onChange={(event) => updateLastNameHandler(event.target.value)}>
                        </input>
                    </div>

                    <div className="mb-3 position-relative">
                        <label className="wd-text-area-nudge text-muted fs-6" htmlFor="bio"> Status </label>
                        <textarea className="form-control w-100 pt-4"
                                  value={profile.status}
                                  id="bio"
                                  onChange={(event) => UpdateStatusHandler(event.target.value)}>
                    </textarea>
                    </div>


                    <div className="position-relative mt-3">
                        <div className=" wd-tuit-grey wd-label-nudge">
                            Password
                        </div>
                        <input className="form-control pt-4" value={profile.password}
                               onChange = {(event) => updatePasswordHandler(event.target.value)}></input>

                    </div>


                    <div className="position-relative mt-3">
                        <div className="wd-tuit-grey wd-label-nudge">
                            Email
                        </div>
                        <input className="form-control pt-4" value={profile.email}
                               onChange = {(event) => UpdateEmailHandler(event.target.value)}></input>

                    </div>

                    <div className="position-relative mt-3">

                        <div className=" wd-tuit-grey wd-label-nudge">
                            Phone Number
                        </div>
                        <input type ="phone" className="form-control pt-4" value={profile.phone}
                               onChange = {(event) => UpdatePhoneHandler(event.target.value)}></input>

                    </div>
                </>

            )}




        </div>
    );
}

export default EditProfileComponent;