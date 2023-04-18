import React, {useState} from "react";
import "./index.css"
import {registerThunk} from "../../services/users/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const SignUpComponent = (

) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getRadioValue()
    {
        if (document.getElementById('radio-manager').checked)
        {
            return document.getElementById('radio-manager').value;

        }
        else if (document.getElementById('radio-commissioner').checked)
        {
            return document.getElementById('radio-commissioner').value;
        }
        else if (document.getElementById('radio-admin').checked)
        {
            return document.getElementById('radio-admin').value;
        }
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSignUp = async () => {
        let userType = getRadioValue()
        console.log(userType)
        if (password !== confPassword){
            alert("Passwords do not match. Try Again!");
        }
        else if ( !(firstName.trim().length > 0 && lastName.trim().length > 0 && username.trim().length > 0
            && password.trim().length > 0 && email.trim().length > 0 && userType))  {
            alert("Invalid User Registration. All Fields are Required. Try Again!");
        } else {
            try {
                await dispatch(registerThunk({ firstName, lastName, email, phone, username, password, userType}));
                navigate("/profile");
            } catch (err) {
                console.log(err);
            }
        }

    }



    return (
        <div className="list-group" >
            <div className="list-group-item">
                <div className="row">
                    <div className="col-6 position-relative">
                        <i className="wd-icon-in-box bi bi-person-fill"></i>
                        <input placeholder="FirstName" className="form form-control ps-5"
                               onChange={(event) => setFirst(event.target.value)}/>
                    </div>
                    <div className="col-6 position-relative">
                        <i className="wd-icon-in-box bi bi-person-fill"></i>
                        <input placeholder="LastName" className="form form-control ps-5"
                               onChange={(event) => setLast(event.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-envelope-at-fill"></i>
                <input className="form form-control ps-5" placeholder="E-mail"
                       onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-phone"></i>
                <input className="form form-control ps-5" placeholder="Phone Number"
                       onChange={(event) => setPhone(event.target.value)}/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-person-fill"></i>
                <input className="form form-control ps-5" placeholder="Username"
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-lock-fill"></i>
                <input className="form form-control ps-5" placeholder="Password" type="password"
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-lock-fill"></i>
                <input className="form form-control ps-5" placeholder="Confirm Password" type="password"
                       onChange={(event) => setConfPassword(event.target.value)}/>
            </div>


            <div className="list-group-item position-relative d-none d-lg-block">
                <span>Account Type:</span><br></br>
                <span className="pe-3">
                    <input type="radio" value="manager"
                           name="radio-type" id="radio-manager" />
                    <label htmlFor="radio-manager" className="ps-1">Manager</label>
                </span>
                <span className="pe-3">
                    <input type="radio" value="commissioner"
                           name="radio-type" id="radio-commissioner" />
                    <label htmlFor="radio-commissioner" className="ps-1">League Commissioner</label>
                </span>
                <span>
                    <input type="radio" value="admin"
                           name="radio-type" id="radio-admin"/>
                    <label htmlFor="radio-admin" className="ps-1">Admin</label>
                </span>


            </div>

            <div className="list-group-item position-relative d-lg-none">
                <span>Account Type:</span><br></br>
                <div className="pe-3">
                    <input type="radio" value="manager"
                           name="radio-type" id="radio-manager" />
                    <label htmlFor="radio-manager" className="ps-1">Manager</label>
                </div>
                <div className="pe-3">
                    <input type="radio" value="commissioner"
                           name="radio-type" id="radio-commissioner" />
                    <label htmlFor="radio-commissioner" className="ps-1">League Commissioner</label>
                </div>
                <div>
                    <input type="radio" value="admin"
                           name="radio-type" id="radio-admin"/>
                    <label htmlFor="radio-admin" className="ps-1">Admin</label>
                </div>


            </div>

            <div>
                <button className="btn override-sub float-end mt-1"
                        onClick={handleSignUp}>Submit</button>
            </div>


        </div>


    );
};
export default SignUpComponent;