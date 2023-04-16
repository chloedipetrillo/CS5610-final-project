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
    const handleDate = () => {
        let parts = c.date.split("-")
        let year = parts[0]
        let m = parts[1]
        let moreParts = parts[2].split("T")
        let day = moreParts[0]
        const date = new Date()
        date.setMonth(m-1)
        let month = date.toLocaleString('en-US', { month: 'long' });
        return month +" " + day +", " + year
    }



    return (
        <li className="list-group-item pt-2">
            <div className="row">
                <div className="col-9">
                    <div>
                        {
                            userComment.length === undefined ?
                                <Link to={`../../profile/${userComment._id}`}>
                                    {userComment.username  + ": "}
                                </Link>
                                : 'Anon: '
                        }

                    </div>
                    <span className="text-muted" > { c.comment}</span>
                </div>
                <div className="text-muted col-3">
                    {handleDate()}
                </div>
            </div>


        </li>
    );
}

export default CommentComponent;