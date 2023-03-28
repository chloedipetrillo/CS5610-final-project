import React from "react";
import "./index.css"


const HomeComponent = (

) => {
    const loggedInRn = false
    return (
        <>
            <div className="p-outer row" >
                <div className="d-none d-md-block col-3"></div>
                <div className="col-12 col-md-6">
                    {loggedInRn ?
                    "component1 and component 2" : "component1"}

                </div>
                <div className="d-none d-md-block col-3"></div>

            </div>
        </>



    );
};
export default HomeComponent;