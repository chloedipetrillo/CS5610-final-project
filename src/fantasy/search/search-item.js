import React, {useState} from "react";
import "./index.css"

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
                        <img className="rounded-circle wd-small-team-icon"
                             src={person.image}/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold">{person.name}</div>
                        <div> Team: {person.team} </div>
                        <div> Position: {person.position} </div>
                        <div> Age: {person.age} </div>
                        <div> Height: {person.height} </div>
                        <div> Season Goals: {person.seasonGoals} </div>


                    </div>
                </div>
            </li>
        :
            <li className="list-group-item" onClick={() => showHandler()} >
                <div className="row">
                    <div className="col-3">
                        <img className="rounded-circle wd-small-team-icon"
                             src={person.image}/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold">{person.name}</div>
                        <div> Team: {person.team} </div>


                    </div>
                </div>
            </li>
        }

        </>



    );
};

export default SearchItem;