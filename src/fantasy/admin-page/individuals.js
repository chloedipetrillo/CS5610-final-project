import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";



const IndividualComponent = (
    {
        person
    }
) => {

    const getAccountType =()=>{
        if (person.userType === "manager"){
            return "Manager";
        }
        else if (person.userType === "admin"){
            return "Admin";
        }
        else {
            return "Commissioner";
        }
    }

    return (

        <li className="list-group-item">
            <div className="d-flex">
                <div className="">
                    <img src={person.image} className="rounded-circle wd-logo-pic-small"/>
                </div>
                <Link to={`../profile/${person._id}`} className="ps-3 text-decoration-none">
                    <div>
                        {person.firstName} {person.lastName}
                    </div>
                    <div>
                        {person.email}
                    </div>
                    <div>
                        {person.phone}
                    </div>
                    <div>
                        {person.username}
                    </div>
                    <div>
                        {person.password}
                    </div>
                    <div>
                        {getAccountType()}
                    </div>
                </Link>
            </div>




        </li>
    );
}

export default IndividualComponent;