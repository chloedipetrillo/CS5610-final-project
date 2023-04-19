import React, {useEffect, useState} from "react";
import {findUserById} from "../../services/users/users-services";
import {Link, useLocation} from "react-router-dom";
import {deletePostThunk} from "../../services/wall/wall-thunks";
import {useDispatch} from "react-redux";



const WallPostComponent = (
    {
        post
    }
) => {

    const {pathname} = useLocation();
    const parts = pathname.split('/')
    const active = parts[ parts.length-1];
    const dispatch = useDispatch();
    const [userComment, setCommented] = useState([])


    const getCommenter = async () =>{
        const writer = await findUserById(post.cid);
        setCommented(writer)

    }

    const onDeleteHandler = (id) => {
        dispatch(deletePostThunk(id));
    }

    useEffect(() =>{
        if(post.cid){
            getCommenter()

        }

    });


    return (

        <li className="list-group-item override-purple-light-my-wall">

            < div className="row">
                <div className="col-11">
                    <div className="d-flex">
                        <div className="">
                            <img src={userComment.image} className="rounded-circle wd-logo-pic-small"/>
                        </div>
                        <div className="ps-3">
                            { parts.length > 2 ?
                                <Link to={`../profile/${userComment._id}`}
                                className="text-decoration-none fw-bold text-black"> {userComment.firstName} </Link>
                                :
                                <Link to={userComment._id} className="text-decoration-none fw-bold text-black">
                                    {userComment.firstName} </Link>
                            }
                            <div>
                                {post.post}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-1">
                    { active === "profile" ?
                        <div className="float-end">
                            <i className="bi bi-x fs-4"
                            onClick={() => onDeleteHandler(post._id)}></i>
                        </div>
                    :

                    ''}

                </div>
            </div>

        </li>
    );
}

export default WallPostComponent;