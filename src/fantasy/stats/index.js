import React from "react";
import SearchComponent from "../search";


function StatsComponent() {
    return (
        <div className="row mt-2">
            <div className="d-none d-md-block col-3">
            </div>
            <div className="col-12 col-md-6">
                <SearchComponent/>
            </div>

            <div className="d-none d-md-block col-3">
            </div>

        </div>
    );
}

export default StatsComponent;