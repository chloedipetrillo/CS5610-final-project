import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk} from "../../services/users/users-thunks.js";
import {useNavigate, useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";
const ProfileComponent = () => {

    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [reviews, setReviews] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect( () => {
        getUser();
    }, []);

    console.log(profile)
//     const{uid} = useParams();
//     console.log(uid)
//     const [usersPage, setUser] = useState([])
//
//
//     const getUser = async () =>{
//         const user = await findUserById(uid);
//         setUser(user)
//
//     }
//
//     useEffect(() =>{
//         if(uid){
//             getUser()
//
//         }
//     });
// console.log(usersPage)
//     const { currentUser } = useSelector((state) => state.users);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     useEffect(() => {
//         dispatch(profileThunk());
//     }, []);


    return(
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>

                </div>
            )}
            <buton
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}
                className="btn btn-danger"
            >
                Logout
            </buton>
            <button onClick={save} className="btn btn-primary float-end">
                Save
            </button>
        </div>
    );
};
export default ProfileComponent;