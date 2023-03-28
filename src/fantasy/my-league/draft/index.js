import React, {useState} from "react";
import DraftPerson from "./draft-person";
import playerArray from "../../search/fakedata.json"
import "../../search/index.css"
import TeamDraftComponent from "../my-team-draft";

const DraftComponent = (

) => {



    const [people, setPeople] = useState(playerArray)

    const [toSearch, setSearch] = useState("")

    const [team, setTeam] = useState([])
    const searchHandler = () => {
        setPeople(playerArray.filter(person => person.name.toUpperCase().includes(toSearch.toUpperCase()) ||
            person.team.toUpperCase().includes(toSearch.toUpperCase()) || person.position.toUpperCase().includes(toSearch.toUpperCase())));

        console.log(team)
    }

    const searchValue = (val)=>{
        setSearch(val)
    }


    const onDraftBoolHandler = (player) => {
        player.drafted = !player.drafted
        const newTeam = playerArray.map((person)=> {
            if(person._id === player._id){
                return player
            } else {
                return person
            }
        })
        const myTeam = newTeam.filter(person => person.drafted ? person : '')
        console.log(team)
        setTeam(myTeam)
        console.log(team)
    }

    return (
        <div >
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-11">
                            <div className="position-relative pe-2">
                                <input id="search" className="ps-5 form-control rounded-pill override-fc border-1"
                                       onChange={(event) => searchValue(event.target.value)}
                                       placeholder="Search Player by team, name, position..."/>
                                <span className="p-search-icon">
                            <i className="bi bi-search"></i>
                        </span>
                            </div>
                        </div>
                        <div className="col-1">
                            <button onClick={() => searchHandler()} className="btn override-button float-end ">Go</button>
                        </div>
                    </div>
                    <ul className="list-group mt-2">
                        <li className="list-group-item">Search Results</li>
                        {
                            people.map(person => <DraftPerson onDraftBoolHandler={onDraftBoolHandler}

                                key={person._id}
                                person={person}/>)
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <TeamDraftComponent draftList={team}/>
                </div>
            </div>






        </div>


    );
};
export default DraftComponent;