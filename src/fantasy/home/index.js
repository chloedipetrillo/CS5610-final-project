import React from "react";
import "./index.css"
import {useSelector} from "react-redux";


const HomeComponent = (

) => {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <>
            <div className=" row" >
                <div className="col-12 wd-profile fw-bolder">
                    Premier Fantasy League
                </div>
            </div>
            <div className="row">
                    {currentUser === null ?
                        "component1 and component 2" :
                        <div className="center fw-bolder">
                            <div className="pe-5 fw-bold wd-welcome-font">
                                Welcome,
                            </div>
                            <div className="ps-5 fw-bolder wd-user-name">
                                {currentUser.firstName}!
                            </div>
                        </div>
                    }
            </div>
        </>
    );
};
export default HomeComponent;