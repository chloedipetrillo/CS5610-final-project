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
                        <h1>{player.first_name} {player.second_name}</h1>
                        {player.news ?
                            <div>
                                <h3>News</h3>
                                <ul>
                                    <li>{player.news} {player.news_added}</li>
                                </ul>
                            </div>
                            :

                            ''}

                        <h3>Stats</h3>
                        <ul>
                            <li>Minutes: {player.minutes}</li>
                            <li>Goals: {player.goals_scored}</li>
                            <li>Assists: {player.assits}</li>
                            <li>Yellow cards: {player.yellow_cards}</li>
                            <li>Red Cards: {player.red_cards}</li>
                            <li>Threat: {player.threat}</li>
                            <li>Influence: {player.influence}</li>

                        </ul>
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

                        <h3 className="mt-5">
                            Comments:
                        </h3>

                        {load &&
                        <h3> loading </h3>
                        }
                        {comments && (

                            <div className="wd-comment-no-border-box border-0 overflow-auto list-group">

                                { comments.filter(e => e.pid === pid).length > 0 ?
                                    comments.filter(e => e.pid === pid).map(com=> <CommentComponent
                                        key={com._id}
                                        c={com}/>)
                                    :
                                    <li className="list-group-item text-muted">
                                        No comments to display... Be the first to leave a comment!
                                    </li>
                                }
                            </div>

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