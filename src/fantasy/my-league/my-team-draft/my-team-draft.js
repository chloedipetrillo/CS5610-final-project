import React from "react";



function TeamDraftPlayer(
    {
        person
    }
) {
    return (
        <>
            {person._id === undefined ? '' :
                <li className="list-group-item" >
                    <div className="row">
                        <div className="col-3">
                            <img className="rounded-circle wd-small-team-icon"
                                 src={person.photo}/>
                        </div>
                        <div className="d-none d-md-block col-md-9 ">
                            <div className="fw-bold" >{person.first_name} {person.second_name}</div>
                            <div> Team: {person.team_name} </div>
                        </div>
                    </div>
                </li>

            }

        </>
    );
}

export default TeamDraftPlayer;