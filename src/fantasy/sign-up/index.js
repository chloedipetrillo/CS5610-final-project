import React from "react";
import "./index.css"

const SignUpComponent = (

) => {
    return (
        <div className="list-group" >
            <div className="list-group-item">
                <div className="row">
                    <div className="col-6 position-relative">
                        <i className="wd-icon-in-box bi bi-person-fill"></i>
                        <input placeholder="FirstName" className="form form-control ps-5"/>
                    </div>
                    <div className="col-6 position-relative">
                        <i className="wd-icon-in-box bi bi-person-fill"></i>
                        <input placeholder="LastName" className="form form-control ps-5"/>
                    </div>
                </div>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-envelope-at-fill"></i>
                <input className="form form-control ps-5" placeholder="E-mail" />
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-person-fill"></i>
                <input className="form form-control ps-5" placeholder="Username"/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-lock-fill"></i>
                <input className="form form-control ps-5" placeholder="Password" type="password"/>
            </div>
            <div className="list-group-item position-relative">
                <i className="wd-icon-in-box-bottom bi bi-lock-fill"></i>
                <input className="form form-control ps-5" placeholder="Confirm Password" type="password"/>
            </div>
        </div>


    );
};
export default SignUpComponent;