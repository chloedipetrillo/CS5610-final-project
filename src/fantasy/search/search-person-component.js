import {useNavigate, useParams} from "react-router";
import fakeArray from "./fakePerson.json"
import {useEffect, useState} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {createChatThunk, findAllCommentsThunk, findCommentsThunk} from "../../services/comments/comment-thunks";

import CommentComponent from "./comments";
import {profileThunk} from "../../services/users/users-thunks";

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



    // IS THIS WRONG HOW DO U GET TO ALWAYS UPDATE ?
    const {comments, load} = useSelector(state => state.commentData)
    const dispatch = useDispatch();


    useEffect(() => {
        searchPlayers();
        getUser();
        dispatch(findAllCommentsThunk());

    }, [])


    return(
        <div>
            <div >
                <div className="row">
                    <div className="col-6">
                        <img src={player.photo}/>
                        <div className="row">
                            <div className="col-5">
                                <div className="mt-2 mb-2 ps-4 wd-player-name-box">{player.first_name} {player.second_name}</div>
                            </div>

                        </div>

                        {player.news ?
                            <div>
                                <h3>News</h3>
                                <ul>
                                    <li>{player.news} {handleDate(player.news_added)}</li>
                                </ul>
                            </div>
                            :

                            ''}

                        <div className="row">
                            <div className="col-6">
                                <div className="ps-3 wd-stats-box">Stats</div>
                                <ul className="list-group override-no-borders">
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-3">
                                                Position: {player.position}
                                            </div>
                                            <div className="col-9">
                                                {player.minutes}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">
                                        <div className="row">
                                            <div className="col-3">
                                                Minutes:
                                            </div>
                                            <div className="col-9">
                                                {player.minutes}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item override-search-light-grey">Goals: {player.goals_scored}</li>
                                    <li className="list-group-item override-search-light-grey">Assists: {player.assits}</li>
                                    <li className="list-group-item override-search-light-grey">Yellow cards: {player.yellow_cards}</li>
                                    <li className="list-group-item override-search-light-grey">Red Cards: {player.red_cards}</li>
                                    <li className="list-group-item override-search-light-grey">Threat: {player.threat}</li>
                                    <li className="list-group-item override-search-light-grey">Influence: {player.influence}</li>

                                </ul>
                            </div>

                        </div>


                    </div>
                    <div className="col-6">
                        <div className="mb-5">
                            <h3 >
                                Top Managers with {player.first_name} on their team:
                            </h3>
                            <div>
                                have to have stuff from db here
                            </div>
                        </div>

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