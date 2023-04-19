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

        <li className="list-group-item" onClick={()=>handleShow()}>
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
                            Username: {person.username}
                        </div>
                        <div>
                            E-mail: {person.email}
                        </div>
                        <div>
                            Phone: {person.phone}
                        </div>

                        <div>
                            Password: {person.password}
                        </div>
                        <div>
                            Account Type: {getAccountType()}
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