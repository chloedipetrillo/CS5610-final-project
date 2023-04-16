import {useParams} from "react-router";
import fakeArray from "./fakePerson.json"
import {useEffect, useState} from "react";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {createChatThunk, findAllCommentsThunk, findCommentsThunk} from "../../services/comments/comment-thunks";

import CommentComponent from "./comments";

const USERS_API_URL = "http://localhost:4000/api/search";
const CHAT_API_URL = "http://localhost:4000/api/chat";


const SearchPersonComponent = () => {
    const {pid} = useParams()

    const [player, setPlayer] = useState({})
    //  const [comments, setComments] = useState({})
    //
    const searchPlayers = async () => {
        let request = USERS_API_URL + "/:" + pid;
        const res = await fetch(request);
        const data = await res.json();
        //alert(request)
        setPlayer(data)
        return data;
    }
    //
    // const searchComments = async () => {
    //     let request = CHAT_API_URL + "/" + pid;
    //     const res = await fetch(request);
    //     const data = await res.json();
    //     setComments(data);
    // }
    //
    // console.log(comments)
    // //
    // // getList()
    // //
    // // const person = player[0]
    // // console.log(person)
    // useEffect(() => {
    //
    //         searchPlayers();
    //         searchComments();
    //
    // }, []);
    //  let person = fakeArray[0]
    //
    const [toComment, setComment] = useState("")
    const searchValue = (val)=>{
        setComment(val)
    }
    //
    function clearInput() {
        document.getElementById("Form").reset();
    }
    // const handleComment = () => {
    //      let currentUser = "";
    //     let toSend = "";
    //     if (!currentUser){
    //         toSend ="Anon: " + toComment
    //     }else{
    //         toSend = currentUser + ": " + toComment
    //     }
    //     alert(toSend)
    //     setComments(comments.push(toSend));
    //     console.log("NEW")
    //     console.log(comments)
    //     clearInput()
    //      alert(toComment)
    //
    // }
    //
    const handleComment = () => {
        let userID = ""; //currentUser._id
        let currentUser =""; // THIS WILL BE SOMETHING
        let toSend = "";
        if (!currentUser){
            toSend ="Anon: " + toComment

        }else{
            toSend = toComment
        }
        alert(toSend)
        let sending = {
            "pid": player._id,
            "comment" : toSend,
            "user" : userID,
            "date": (new Date()).getTime()
        }
        dispatch(createChatThunk(sending));
        clearInput()
        // setComment('')

    }
    const {comments, loading} = useSelector(state => state.comments)
    const dispatch = useDispatch();
    useEffect(() => {
        searchPlayers();
        dispatch(findAllCommentsThunk())
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
                        <h3>
                            Comments:
                        </h3>
                        <div className="wd-comment-box overflow-auto">

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
                        <div className="d-flex justify-content-between mt-1">
                            <form id="Form" className="w-75">
                                <input className="form form-control" placeholder="Comment...."
                                       onChange={(event) => searchValue(event.target.value)}/>
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