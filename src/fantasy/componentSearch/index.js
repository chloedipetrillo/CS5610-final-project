import React, {useEffect, useState} from "react";
import SearchItem from "./search-item";
import personArray from "./fakedata.json"
import "./index.css"
import {useNavigate, useParams} from "react-router";
import {findPlayerSearchThunk} from "../../services/search/search-thunks.js";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useLocation} from "react-router-dom";
const USERS_API_URL = "http://localhost:4000/api/players";

const SearchComponent = (

) => {
    const {pathname} = useLocation();
    console.log(pathname)
    const navigate = useNavigate();
    const {searched} = useParams();
    console.log(searched)
    // const dispatch = useDispatch()
    const [toSearch, setSearch] = useState(searched)
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
        navigate(`/search/${toSearch}`)
    }


    const searchValue = (e)=>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (searched) {
            searchHandler()
        }else{
            setPeople({})
        }
    }, [toSearch]);

    return (
        <div >
            <div className="row">
                <div className="col-11">
                    <div className="position-relative pe-2">
                        <input id="search" className="ps-5 form-control rounded-pill override-fc border-1"
                               onChange={(event) => searchValue(event)}
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
                <li className="list-group-item fw-bolder fs-4">Search Results</li>
                { people.length > 0 ?
                    people.map(person => <SearchItem
                        key={person._id}
                        person={person}/>) :
                    <li className="list-group-item">
                        No results to display...
                    </li>
                }
            </ul>
        </div>


    );
};
export default SearchComponent;