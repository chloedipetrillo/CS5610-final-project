import React, {useState} from "react";

const DraftPerson = (
    {
        person,
        onDraftBoolHandler
    }
) => {

    const [showStats, setShow] = useState(false)

    const showHideHandler = () =>{
        setShow(!showStats)
    }

    return(
        <>
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-3"onClick={() => showHideHandler()} >
                        <img className="rounded-circle wd-small-team-icon"
                             src={person.image}/>
                    </div>
                    <div className="col-9">
                        { person.drafted ?
                            <button className="btn btn-danger float-end"
                                    onClick={() => onDraftBoolHandler(person)}>Un Draft</button>
                            :
                            <button className="btn btn-success float-end"
                                    onClick={() => onDraftBoolHandler(person)}>Draft</button>
                        }

                        <div className="fw-bold" onClick={() => showHideHandler()}>{person.name}</div>
                        <div> Team: {person.team} </div>
                        { showStats ?
                            <div onClick={() => showHideHandler()}>
                                <div> Position: {person.position} </div>
                                <div> Age: {person.age} </div>
                                <div> Height: {person.height} </div>
                                <div> Season Goals: {person.seasonGoals} </div>
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