import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk, logoutThunk } from "../../services/users/users-thunks.js";
import { useNavigate } from "react-router";
const ProfileComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return(
        <div>

            {currentUser == null ? "hi" : currentUser.firstName}
        </div>
    );
};
export default ProfileComponent;