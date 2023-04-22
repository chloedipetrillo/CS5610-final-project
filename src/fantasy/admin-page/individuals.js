import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";



const IndividualComponent = (
    {
        person
    }
) => {

    const [showInfo, setInfo] = useState(false);
    const handleShow = () => {
        setInfo(!showInfo)
    }
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

        <li className="list-group-item override-search-light-grey" onClick={()=>handleShow()}>
            <div className="d-flex justify-content-start">
                <div className="">
                    <img src={person.image} className="rounded-circle wd-logo-pic-small"/>
                </div>
                { showInfo ?
                    <Link to={`../profile/${person._id}`} className="ps-5 text-decoration-none text-black">
                        <div className="fw-bold">
                            {person.firstName} {person.lastName}
                        </div>
                        <div>
                                Username:
                            <span className="fw-light ps-1">
                                {person.username}
                            </span>

                        </div>
                        <div>
                            E-mail:
                            <span className="fw-light ps-1">
                                {person.email}
                            </span>

                        </div>
                        <div>
                            Phone:

                            <span className="fw-light ps-1">
                                {person.phone}
                            </span>


                        </div>

                        <div>
                            Password:

                            <span className="fw-light ps-1">
                                {person.password}
                            </span>


                        </div>
                        <div>
                            Account Type:

                            <span className="fw-light ps-1">
                                {getAccountType()}
                            </span>

                        </div>
                    </Link>
                    :

                    <Link to={`../profile/${person._id}`} className="ps-5 text-decoration-none text-black">
                        <div className="fw-bold">
                            {person.firstName} {person.lastName}
                        </div>
                        <div>
                            Username: {person.username}
                        </div>
                    </Link>
                }









            </div>




        </li>
    );
}

export default IndividualComponent;