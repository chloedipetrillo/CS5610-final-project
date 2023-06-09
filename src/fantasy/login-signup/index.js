import React, {useState} from "react";
import LogInComponent from "../log-in";
import SignUpComponent from "../sign-up";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";





const LogInSignUp = (



) => {
    const { currentUser } = useSelector((state) => state.users);
    let loggedIn = currentUser !== null;

    let start = true;
    const [log, setLogin] = useState(start)

    const loginHandler = () => {
        setLogin(true)
    }
    const signUpHandler = () => {
        setLogin(false)
    }
    return (
        <div className="row mt-2">
            <div className="d-none d-md-block col-3">
            </div>

            <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center">
                    <span className="pe-2"> <button className="btn override-log pe-2 mb-1" onClick={() => loginHandler()}>Log In</button> </span>
                    <button className="btn override-log mb-1" onClick={() => signUpHandler()}>Sign Up</button>
                </div>

                {log ? <LogInComponent/> : <SignUpComponent/>}


            </div>

            <div className="d-none d-md-block col-3">

            </div>

        </div>


    );
};
export default LogInSignUp;