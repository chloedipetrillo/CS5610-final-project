import React, {useEffect, useState} from "react";
import SearchItemComponent from "./search-result-item";
import {findAllLeagues} from "../../../services/my-leagues/my-league-services";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "../../../services/users/users-thunks";
import {findAllLeaguesThunk} from "../../../services/my-leagues/my-league-thunks";

function SearchLeaguesComponent() {

    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload;
    }


    const [toSearch, setSearch] = useState("")
    const { myLeagues, loading} = useSelector((state) => state.myLeagues);
    const [allLeagues, setAll] = useState(myLeagues)
    const searchHandler = async () => {
        await getList();
        alert("trying to search a league")
    }

    const searchValue = (val)=>{
        setSearch(val)
    }

    const getFilteredList = (list) => {
        return list.filter((l) => l.leagueName.toLowerCase().startsWith(toSearch.toLowerCase()))
    }

    const getList = async () => {

        await dispatch(findAllLeaguesThunk());
        const all = await findAllLeagues();
        setAll(all);

       // const all = await findAllLeagues();
       // console.log("ALL")
       //  console.log(all)
       //  console.log("GETTING LIST")
       //  console.log(allLeagues)
       //  alert("hi")
       // if (toSearch){
       //     console.log("to search")
       //     all.filter((l) => l.leagueName.toLowerCase().startsWith(toSearch.toLowerCase()))
       //     setAll(all);
       // }else {
       //     setAll(all)
       // }
       //
       // console.log("GETTING LIST")
       //  console.log(allLeagues)
    }

    useEffect(() => {
        getList();
    }, []);

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



            {/*
                const isJoined = () =>{
                    let arr = team.filter(member => member._id === person._id);
                    return arr.length > 0
                }

        check if youre already part of a league and filter using that

            */}
            <ul className="list-group mt-2">
                <li className="list-group-item override-pink-dark-information text-white fw-bold wd-font-size-larger">League Results</li>


                    {
                        allLeagues.map((leg) => <SearchItemComponent leg={leg} userId={profile._id} key={leg._id}/>)
                    }



            </ul>
        </div>
    );
}

export default SearchLeaguesComponent;