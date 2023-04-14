import React, {useEffect, useState} from "react";
import SearchItem from "./search-item";
import personArray from "./fakedata.json"
import "./index.css"
import {useNavigate} from "react-router";
import {findPlayerSearchThunk} from "../../services/search/search-thunks.js";
import {useDispatch} from "react-redux";
import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/players";

const SearchComponent = (

) => {
    // const dispatch = useDispatch()
    const [toSearch, setSearch] = useState("")
    //
    const [people, setPeople] = useState({})
    //

    const getList = async () => {
        let request = USERS_API_URL + "/:" +toSearch;
        const res = await fetch(request);
        const data = await res.json();
        console.log(data)
        setPeople(data)
        return data
    }
    const searchHandler = () => {
        let p = getList();
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
                { people.length > 0 ?
                    people.map(person => <SearchItem
                        key={person._id}
                        person={person}/>) : ''
                }
            </ul>
        </div>


    );
};
export default SearchComponent;