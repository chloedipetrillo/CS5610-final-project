import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllCommentsThunk} from "../../services/comments/comment-thunks";
import {findAllUsersThunk} from "../../services/users/users-thunks";
import {findAllUsers} from "../../services/users/users-services";
import IndividualComponent from "./individuals";


function ManageUsersComponent() {

    const {usersData, load} = useSelector(state => state.users)
    const dispatch = useDispatch();
    const [toSearch, setSearch] = useState("")
    const [people, setPeople] = useState(usersData)
    useEffect(() => {
        dispatch(findAllUsersThunk());

    }, [])




    const searchHandler = () => {
        setPeople(usersData.filter(person => person.firstName.toUpperCase().includes(toSearch.toUpperCase()) ||
            person.userType.toUpperCase().includes(toSearch.toUpperCase()) ||
            person.lastName.toUpperCase().includes(toSearch.toUpperCase()) || person.username.toUpperCase().includes(toSearch.toUpperCase())));
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
                           placeholder="Search users..."/>
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
            <li className="list-group-item override-pink-dark-information text-white fw-bold wd-font-size-larger">User Results</li>
            {
                people.map(person => <IndividualComponent
                    key={person._id}
                    person={person}/>)
            }

        </ul>
    </div>


    );
}
export default ManageUsersComponent;

