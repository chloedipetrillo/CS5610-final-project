import React, {useState} from "react";
import SearchItem from "./search-item";
import personArray from "./fakedata.json"
import "./index.css"

const SearchComponent = (

) => {
    const [people, setPeople] = useState(personArray)

    const [toSearch, setSearch] = useState("")

    const searchHandler = () => {
        setPeople(personArray.filter(person => person.name.toUpperCase().includes(toSearch.toUpperCase()) ||
            person.team.toUpperCase().includes(toSearch.toUpperCase()) || person.position.toUpperCase().includes(toSearch.toUpperCase())));

    }

    const searchValue = (val)=>{
        setSearch(val)
    }


    return (
        <div >
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
                    people.map(person => <SearchItem
                        key={person._id}
                        person={person}/>)
                }
            </ul>
        </div>


    );
};
export default SearchComponent;