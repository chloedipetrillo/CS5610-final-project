import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import profileArray from "../profile/profile.json";





function EditProfileComponent() {

    const saveChangesHandler = () => {

        // const dispatch = useDispatch();
        // const profileArray = useSelector((state) => state.profile);
        // const [account, setAccount] = useState(profileArray[0])
    }
    const updateNameHandler = (target) => {
        //setAccount({...account, name: target})
    }

    const UpdateBioHandler = (target) => {
        //setAccount({...account, bio: target})
    }

    const UpdateLocationHandler = (target) => {
        //setAccount({...account, location: target})
    }

    const UpdateWebsiteHandler = (target) => {
        //setAccount({...account, website: target})
    }

    const UpdateDOBHandler = (target) => {
        //setAccount({...account, dateOfBirth: target})
    }
    const user = profileArray[0]
    return (
        <div>
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
                    <Link to="../profile">
                        <button className="btn btn-dark rounded-pill w-85 float-end mt-1 me-2 mb-2"
                                onClick={() => saveChangesHandler()}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row">

                <div className="position-relative ">
                    <img className="wd-profile-pg-pic wd-nudge-edit mb-2" src={user.image}/>


                </div>
            </div>

            <div className="position-relative mt-5">
                <div className=" wd-tuit-grey wd-label-nudge">
                    Name
                </div>
                <input className="form-control pt-4" value={user.firstName}
                       onChange = {(event) => updateNameHandler(event.target.value)}></input>

            </div>

            <div className="position-relative mt-3">
                <div className="wd-tuit-grey wd-label-nudge">
                    Status
                </div>
                <textarea className="form-control pt-4" value={user.status}
                          onChange = {(event) => UpdateBioHandler(event.target.value)}></textarea>

            </div>


            <div className="position-relative mt-3">
                <div className=" wd-tuit-grey wd-label-nudge">
                    Username
                </div>
                <input className="form-control pt-4" value={user.username}
                       onChange = {(event) => UpdateLocationHandler(event.target.value)}></input>

            </div>


            <div className="position-relative mt-3">
                <div className="wd-tuit-grey wd-label-nudge">
                    Email
                </div>
                <input className="form-control pt-4" value={user.email}
                       onChange = {(event) => UpdateWebsiteHandler(event.target.value)}></input>

            </div>

            <div className="position-relative mt-3">

                <div className=" wd-tuit-grey wd-label-nudge">
                    Birthday
                </div>
                <input type ="date" className="form-control pt-4" value={user.DOB}
                       onChange = {(event) => UpdateDOBHandler(event.target.value)}></input>

            </div>


        </div>
    );
}

export default EditProfileComponent;