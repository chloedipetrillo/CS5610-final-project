import React from "react";
import "./index.css"

const LogInComponent = (

) => {
    return (
        <div className="list-group" >
            <div className="list-group-item position-relative">
                <i className="bi bi-person-fill wd-icon-in-box-login"></i>
                <input placeholder="Username" className="form form-control ps-5"/>
            </div>
            <div className="list-group-item position-relative">
                <i className="bi bi-lock-fill wd-icon-in-box-login"></i>
                <input placeholder="Password" className="form form-control ps-5" type="password"/>
            </div>
        </div>


    );
};
export default LogInComponent;