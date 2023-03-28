import React from "react";
import SearchItem from "../../search/search-item";
import TeamDraftPlayer from "./my-team-draft";



function TeamDraftComponent(
    {
        draftList
    }
) {

    return (
        <div className="row mt-2">
            <div className="col-1">
            </div>
            <div className="col-11">
                <ul className="list-group">
                    <li className="list-group-item">My Drafted Players</li>
                    {
                        draftList.map(player => <TeamDraftPlayer
                            key={player._id}
                            person={player}/>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default TeamDraftComponent;