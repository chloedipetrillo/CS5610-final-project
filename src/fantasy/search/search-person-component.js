import {useNavigate, useParams} from "react-router";
import fakeArray from "./fakePerson.json"
import {useEffect, useState} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {createChatThunk, findAllCommentsThunk, findCommentsThunk} from "../../services/comments/comment-thunks";

import CommentComponent from "./comments";
import {profileThunk} from "../../services/users/users-thunks";
import ForwardComponent from "./forward-component";
import DefenderComponent from "./defender-component";
import GoalkeeperComponent from "./goalkeeper-component";
import {findTeams} from "../../services/my-team/my-team-services";
import {Link} from "react-router-dom";

const USERS_API_URL = "http://localhost:4000/api/search";
const CHAT_API_URL = "http://localhost:4000/api/chat";


const SearchPersonComponent = () => {
    const {pid} = useParams()
    const [player, setPlayer] = useState({})
    const searchPlayers = async () => {
        let request = USERS_API_URL + "/:" + pid;
        const res = await fetch(request);
        const data = await res.json();
        //alert(request)
        setPlayer(data)
        return data;
    }

    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const getUser = async () =>{
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        return payload
    }

    const handleDate = (news_date) => {
        let parts = news_date.split("-")
        let year = parts[0]
        let m = parts[1]
        let moreParts = parts[2].split("T")
        let day = moreParts[0]
        const date = new Date()
        date.setMonth(m-1)
        let month = date.toLocaleString('en-US', { month: 'long' });
        return month +" " + day +", " + year
    }



    const [toComment, setComment] = useState("")
    const commentValue = (val)=>{
        setComment(val)
    }
    function clearInput() {
        document.getElementById("Form").reset();
    }
    const handleComment = () => {
        if (toComment){
            let userID = "";
            if (profile){
                userID = profile._id;
            }
            let sending = {
                "pid": player._id,
                "comment" : toComment,
                "user" : userID,
                "date": (new Date()).getTime()
            }
            dispatch(createChatThunk(sending));
            clearInput()
        }

    }

    const checkIfPlayerDrafted = () => {
        return team.filter((p) => p._id === player._id).length > 0
    }

    const { myTeam, loading} = useSelector((state) => state.myTeam);
    const [team, setTeam] = useState(myTeam)

    const findTeam = async () => {
        const prof = await getUser();

        if (prof){
            const t = await findTeams(prof._id);
            if (t){

                setTeam(t.team)
            }

        }

    }
    const {comments, load} = useSelector(state => state.commentData)
    const dispatch = useDispatch();


    useEffect(() => {
        searchPlayers();
        findTeam();
        dispatch(findAllCommentsThunk());

    }, [])


    return(
        <div>
            <div >
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img src={player.photo}/>
                        <div className="row">
                            <div className="col-7">
                                <div className="mt-2 mb-2 ps-4 wd-player-name-box">{player.first_name} {player.second_name}</div>
                            </div>

                        </div>

                        {player.news ?
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-7">
                                        <div className=" wd-purple-onteam ps-3 mt-2">News</div>
                                        <ul className="list-group override-border-radius">
                                            <li className=" list-group-item override-search-light-grey override-border-radius">{player.news} • {handleDate(player.news_added)}</li>
                                        </ul>
                                    </div>

                                </div>


                            </div>
                            :

                            ''}

                        <div className="row">
                            <div className="col-9">
                                <div className="ps-3 wd-stats-box">Stats</div>
                                <ul className="list-group override-no-borders override-border-radius">
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Position:
                                            </div>
                                            <div className="col-6">
                                                {player.position}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Minutes:
                                            </div>
                                            <div className="col-6">
                                                {player.minutes}
                                            </div>
                                        </div>
                                    </li>

                                    {player.position === "Midfielder" ||
                                        player.position === "Forward" && (
                                        <ForwardComponent player={player}/>
                                    )}

                                    {player.position === "Defender" && (
                                            <DefenderComponent player={player}/>
                                        )}

                                    {player.position === "Goalkeeper" && (
                                        <GoalkeeperComponent player={player}/>
                                    )}

                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Yellow Cards:
                                            </div>
                                            <div className="col-6">
                                                {player.yellow_cards}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Red Cards:
                                            </div>
                                            <div className="col-6">
                                                {player.red_cards}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Threat:
                                            </div>
                                            <div className="col-6">
                                                {player.threat}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Influence:
                                            </div>
                                            <div className="col-6">
                                                {player.influence}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-6 fw-bold">
                                                Chance of playing next round:
                                            </div>
                                            <div className="col-6">
                                                {player.chance_playing_next_round}
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>

                        </div>


                    </div>
                    <div className="col-12 col-lg-6 mt-2">
                        { profile && (
                            <div className="mb-5">

                                { checkIfPlayerDrafted() ?

                                    <div className="wd-purple-onteam ps-3 mt-2">
                                        You have {player.first_name} on your team!
                                    </div>
                                    :

                                    <div className="wd-purple-onteam ps-3 mt-2" >
                                        You don't have {player.first_name} on your team!
                                    </div>

                                }

                                <div className="wd-draft-change-things ps-3 pt-2">
                                    Want to change things up? Navigate to: <Link to={`../../my-league/draft/${player.first_name}/${player.second_name}`}
                                                                                 className="btn override-button wd-sign-up">Draft</Link>
                                </div>
                            </div>
                        )}


                        <div className="mt-5 ps-3 wd-comment-format text-white fw-bolder wd-font-comment-size">
                            Comments
                        </div>

                        {load &&
                        <h3> loading </h3>
                        }
                        {comments && (

                            <ul className="wd-comment-no-border-box override-border-radius overflow-auto list-group override-no-borders ">

                                { comments.filter(e => e.pid === pid).length > 0 ?
                                    comments.filter(e => e.pid === pid).map(com=> <CommentComponent
                                        key={com._id}
                                        c={com}/>)
                                    :
                                    <li className="list-group-item text-black override-border-radius override-no-borders override-search-light-grey">
                                        No comments to display... Be the first to leave a comment!
                                    </li>
                                }
                            </ul>

                        )}

                        <div className="d-flex justify-content-between mt-1">
                            <form id="Form" className="w-100 pe-3">
                                <input className="form form-control" placeholder="Comment...."
                                       onChange={(event) => commentValue(event.target.value)}/>
                            </form>
                            <button className="btn override-button"
                                    onClick={()=>handleComment()}>Comment</button>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    )
}
export default SearchPersonComponent;