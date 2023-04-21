import React, {useState} from "react";
import SearchItemComponent from "./search-result-item";

function SearchLeaguesComponent() {



    const [toSearch, setSearch] = useState("")
    const searchHandler = () => {
        alert("trying to search a league")
    }

    const searchValue = (val)=>{
        setSearch(val)
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-11">
                    <div className="position-relative pe-2">
                        <input id="search" className="ps-5 form-control rounded-pill override-fc border-1 pe-5"
                               onChange={(event) => searchValue(event.target.value)}
                               placeholder="Search leagues..."/>
                        <span className="p-search-icon">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                </div>
                <div className="col-1">
                    <button onClick={() => searchHandler()} className="btn override-button float-end ps-2">Go</button>
                </div>
            </div>




            <ul className="list-group mt-2">
                <li className="list-group-item override-pink-dark-information text-white fw-bold wd-font-size-larger">League Results</li>
                <SearchItemComponent/>

            </ul>
        </div>
    );
}

export default SearchLeaguesComponent;