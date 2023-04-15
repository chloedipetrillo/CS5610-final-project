import React, {useState} from "react";

const DraftPerson = (
    {
        person,
        onDraftBoolHandler, team
    }
) => {


    const [showStats, setShow] = useState(false)

    const showHideHandler = () =>{
        setShow(!showStats)
    }

    const isDrafted = () =>{
        let arr = team.filter(member => member._id === person._id);
        return arr.length > 0
    }

    const [drafted, setDrafted] = useState(isDrafted())

    const handler = () =>{
        let now = !drafted
        setDrafted(now)
        onDraftBoolHandler(person, now);
    }

    return(
        <>
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-3"onClick={() => showHideHandler()} >
                        <img className="rounded-circle wd-small-team-icon"
                             src={person.photo}/>
                    </div>
                    <div className="col-9">

                        {drafted ?
                            <button className="btn btn-danger float-end"
                                    onClick={() => handler()}>X</button>
                            :

                            <button className="btn btn-success float-end"
                                    onClick={() => handler()}>Draft</button>}


                        <div className="fw-bold" onClick={() => showHideHandler()}>{person.first_name} {person.second_name}</div>
                        <div> Team: {person.team_name} </div>
                        { showStats ?
                            <div onClick={() => showHideHandler()}>
                                <div> Position: {person.position} </div>
                                <div> Value: {person.value} </div>
                                <div> Chance Playing Next Round: {person.chance_playing_next_round} </div>
                                <div> Minutes: {person.minutes}</div>
                                {person.position === "Goalkeeper" || person.position === "Defender"?
                                    <div>
                                        <div>Clean Sheets: {person.clean_sheets}</div>
                                        {person.position === "Goalkeeper" ?
                                            <div> Saves: {person.saves}</div> :'' }
                                        <div> Goals Conceded: {person.goals_conceded}</div>
                                    </div> :

                                    <div>
                                        <div>Goals Scored: {person.goals_scored}</div>
                                        <div>Assists: {person.assists}</div>
                                    </div>

                                }
                            </div>

                        :
                            ''
                        }

                    </div>
                </div>
            </li>

        </>



    );
};

export default DraftPerson;