import React, {useState} from "react";
import "./index.css"

const SignUpComponent = (

) => {

    function getRadioValue()
    {
        if (document.getElementById('radio-manager').checked)
        {
            alert(document.getElementById('radio-manager').value)
            return document.getElementById('radio-manager').value;

        }
        else if (document.getElementById('radio-commissioner').checked)
        {
            alert(document.getElementById('radio-commissioner').value)
            return document.getElementById('radio-commissioner').value;
        }
        else if (document.getElementById('radio-admin').checked)
        {
            alert(document.getElementById('radio-admin').value)
            return document.getElementById('radio-admin').value;
        }
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");

    const handleSignUp = () => {
        if (password == confPassword) {
            let type = getRadioValue()
            alert(username + password + first + last + email );
        } else {
            alert("passwords dont match! try again");
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