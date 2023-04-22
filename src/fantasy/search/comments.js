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

    const getCommenter = async () =>{
        const writer = await findUserById(c.user);
        setCommented(writer.username)

    }

    useEffect(() =>{
        if(c.user){
            getCommenter()

        }

    });
    const comment = () => {
        // //console.log(user)
        // let toDisplay = ""
        // if (userComment.length === undefined){
        //     setToDisplay(userComment.username +": " + c.comment)
        // } else  {
        //     setToDisplay(c.comment)
        // }
    console.log(userComment)
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
        <li className="list-group-item pt-2 override-search-light-grey override-border-radius mb-2">
            <div className="row">
                <div className="col-9">
                    <div>
                        {c.user ?
                                <Link className="text-decoration-none fw-bold text-black" to={`../../profile/${c.user}`}>
                                    {userComment + ": "}
                                </Link>
                                : <span className="fw-bold"> Anon:  </span>
                        }

                    </div>
                    <span className="text-black" > { c.comment}</span>
                </div>
                <div className="text-muted col-3">
                    {handleDate()}
                </div>
            </div>


        </li>
    );
}

export default CommentComponent;