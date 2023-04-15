
import "./index.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../../services/users/users-thunks.js";

const LogInComponent = () => {

    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));

             navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="list-group" >
            <div className="list-group-item position-relative">
                <i className="bi bi-person-fill wd-icon-in-box-login"></i>
                <input placeholder="Username" className="form form-control ps-5"
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="list-group-item position-relative">
                <i className="bi bi-lock-fill wd-icon-in-box-login"></i>
                <input placeholder="Password" className="form form-control ps-5" type="password"
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div>
                <button className="btn override-sub float-end mt-1"
                onClick={handleLogin}>Submit</button>
            </div>
        </div>


    );
};
export default LogInComponent;