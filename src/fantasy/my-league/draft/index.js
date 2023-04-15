import React, {useEffect, useState} from "react";
import DraftPerson from "./draft-person";
import playerArray from "../../componentSearch/fakedata.json"
import "../../componentSearch/index.css"
import TeamDraftComponent from "../my-team-draft";
import SearchItem from "../../componentSearch/search-item";
const USERS_API_URL = "http://localhost:4000/api/players";

const DraftComponent = (

) => {

    // const dispatch = useDispatch()
    const [toSearch, setSearch] = useState("")
    //
    const [people, setPeople] = useState({})
    //

    const getList = async () => {
        if (toSearch) {
            let request = USERS_API_URL + "/:" +toSearch;
            const res = await fetch(request);
            const data = await res.json();
            console.log(data)
            setPeople(data)
        }else{
            setPeople({})
        }

    }
    const searchHandler = () => {
        let p = getList();
        console.log(people)
    }


    const searchValue = (val)=>{
        setSearch(val)
    }

    // load from user
    const [team, setTeam] = useState([])


    useEffect(() => {
        if (toSearch) {
            searchHandler();
        }else{
            setPeople({})
        }
    }, [toSearch]);




    const onDraftBoolHandler = (player, bool) => {
        if (bool) {
            team.push(player);
            setTeam(team)
            searchHandler()
        } else {
            setTeam(team.filter(member => member._id !== player._id));
        }
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
                        { people.length > 0 ?
                            people.map(person => <DraftPerson team={team} onDraftBoolHandler={onDraftBoolHandler}

                                                              key={person._id}
                                                              person={person}/>)
                            :
                            <li className="list-group-item">
                                No results to display...
                            </li>
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