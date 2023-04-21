import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "../../services/users/users-thunks";
import {createChatThunk} from "../../services/comments/comment-thunks";
import {createLeague, findLeaguesManaged} from "../../services/my-leagues/my-league-services";
import {findTeams} from "../../services/my-team/my-team-services";
import {createLeagueThunk, findMyLeaguesThunk} from "../../services/my-leagues/my-league-thunks";




const CommissionerComponent = (

) => {
    const { currentUser, load} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload;
    }

    useEffect( () => {
        findLeagues();

    }, []);

    const [name, setName] = useState("")
    const nameValue = (val)=>{
        setName(val)
    }

    const handleName = async() => {
        if (name){
            const league = {commissionerId: profile._id, leagueName: name}
            const action = await dispatch(createLeagueThunk(league));
            if (action.error) {
                alert("This league name has already been registered!");
            }
            else{
                alert("League \"" + name + "\" successfully created!")
            }
        }


    }

    const { myLeagues, loading} = useSelector((state) => state.myLeagues);
    const [managed, setManaged] = useState(myLeagues)

    const [seeLeagues, setSee] = useState(true)

    const viewLeaguesHandler = () => {
        setSee(true)
        setManaged(myLeagues)
    }
    const createLeagueHandler = () => {
        setSee(false)
    }

    const findLeagues = async () => {
        const prof = await getUser();
        await dispatch(findMyLeaguesThunk(prof._id))
        // if (prof){
        //     const action = await dispatch(findMyLeaguesThunk(prof._id));
        //
        // }
        const l = await findLeaguesManaged(prof._id)
        setManaged(l)



    }



    return (
        <>
            { profile && profile.userType === "commissioner" ?
                <div className="row mt-2">
                    <div className="d-none d-md-block col-3">
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center">
                            <span className="pe-2"> <button className="btn override-log pe-2 mb-1" onClick={() => viewLeaguesHandler()}>View myLeagues</button> </span>
                            <button className="btn override-log mb-1" onClick={() => createLeagueHandler()}>Create League</button>
                        </div>


                        { seeLeagues ?
                            <>
                                <div className="fw-bolder fs-4 wd-pink-myteam text-white mt-2">Leagues I Manage</div>
                                <ul className="list-group override-border-radius">
                                    { managed && (
                                        managed.map((leg) =>
                                            <li className="list-group-item override-search-light-grey override-border-radius fw-bold">
                                                {leg.leagueName}
                                            </li>
                                        )
                                    )
                                    }
                                </ul>
                            </>
                            :
                            <div className="d-flex justify-content-between mt-1">
                                <form id="Form" className="w-100 pe-3">
                                    <input className="form form-control" placeholder="Enter new league name...."
                                           onChange={(event) => nameValue(event.target.value)}/>
                                </form>
                                <button className="btn override-button"
                                        onClick={()=>handleName()}>Create</button>
                            </div>
                        }

                    </div>
                    <div className="d-none d-md-block col-3">
                    </div>
                </div>
                :
                <div className="mt-5">
                    <div className="mt-5 center wd-access-blocked">
                        <i className="bi bi-lock-fill fs-5"></i>
                        <div>
                            LEAGUE COMMISSIONER ACCESS ONLY, PAGE BLOCKED.
                        </div>
                        <div>
                            USER TYPE MUST BE A COMMISSIONER.
                        </div>

                    </div>

                </div>
            }
        </>



    );
};
export default CommissionerComponent;