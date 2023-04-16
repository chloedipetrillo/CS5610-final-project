import React, {useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";

const SearchItem = (
    {
        person
    }
) => {


    const [showStats, setShow] = useState(false)

    const showHandler = () => {
        setShow(true)
    }

    const hideHandler = () =>{
        setShow(false)
    }

    return(
        <>{ showStats ?
            <li className="list-group-item" onClick={() => hideHandler()}>
                <div className="row">
                    <div className="col-3">
                        <img className="wd-small-team-icon"
                             src={person.photo}/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold">{person.first_name} {person.second_name}</div>
                        <div> Team: {person.team_name} </div>
                        <div> Position: {person.position} </div>
                        <div> Value: {person.value} </div>

                        <Link to={`../details/${person._id}`} className="btn btn-dark rounded-pill mt-2"
                                >More Details</Link>




                    </div>
                </div>
            </li>
        :
            <li className="list-group-item" onClick={() => showHandler()} >
                <div className="row">
                    <div className="col-3">
                        <img className="wd-small-team-icon"
                             src={person.photo}/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold">{person.first_name} {person.second_name}</div>
                        <div> Team: {person.team_name} </div>


                    </div>
                </div>
            </li>
        }

        </>



    );
};

export default SearchItem;