import React, {useEffect, useState} from "react";
import {findUserById} from "../../services/users/users-services";
import {findUserByIdThunk} from "../../services/users/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import {findAllCommentsThunk} from "../../services/comments/comment-thunks";
import {Link} from "react-router-dom";


const CommentComponent = (
    {
        c
    }
) => {

    const [userComment, setCommented] = useState([])
    const [toDisplay, setToDisplay] = useState("")

    const getCommenter = async () =>{
        const writer = await findUserById(c.user);
        setCommented(writer)

    }

    useEffect(() =>{
        if(c.user){
            getCommenter()

        }
        comment()
    });
    const comment = async () => {
        //console.log(user)
        let toDisplay = ""
        if (userComment.length === undefined){
            setToDisplay(userComment.username +": " + c.comment)
        } else  {
            setToDisplay(c.comment)
        }

    }

    return (
        <li className="list-group-item pt-2">
            <>
                {
                    userComment.length === undefined ?
                        <Link to={`profile/${userComment._id}`}>
                            {userComment.username + ": "}
                        </Link>
                         : ''
                }

            </>
            <span className="text-muted" > { c.comment}</span>
        </li>
    );
}

export default CommentComponent;