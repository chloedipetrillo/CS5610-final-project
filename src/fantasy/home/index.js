import React from "react";
import "./index.css"
import {useSelector} from "react-redux";


const HomeComponent = (

) => {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <>
            <div className="p-outer row" >
                <div className="d-none d-md-block col-3"></div>
                <div className="col-12 col-md-6">
                    {currentUser === null ?
                    "component1 and component 2" : `Hi ${currentUser.firstName}`}

                </div>
                <div className="d-none d-md-block col-3"></div>

            </div>
        </>



    );
};
export default HomeComponent;