import React from "react";
import SearchItem from "../../componentSearch/search-item";
import TeamDraftPlayer from "./my-team-draft";



function TeamDraftComponent(
    {
        draftList
    }
) {

    const saveDraft = ()=> {
        alert("Drafting players!")
    }

    return (
        <div className="row mt-2">
            <div className="col-1">
            </div>
            <div className="col-11">
                <ul className="list-group">
                    <li className="list-group-item override-pink-dark-information text-white fw-bolder">
                        <button className="float-end btn btn-dark rounded-pill"
                        onClick={()=>saveDraft()}> Save </button>
                        <div>Drafted Players</div>

                    </li>
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