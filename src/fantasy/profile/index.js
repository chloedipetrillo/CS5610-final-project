import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk, logoutThunk } from "../../services/users/users-thunks.js";
import { useNavigate } from "react-router";
const ProfileComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(async() => {
        const {payload} = await dispatch(profileThunk());
        setProfile(payload)
    }, []);
    return(
        <div>

            {profile == null ? "hi" : profile.firstName}
        </div>
    );
};
export default ProfileComponent;