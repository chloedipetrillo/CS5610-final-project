import React, {useEffect, useState} from "react";
import {findUserById} from "../../services/users/users-services";
import {Link, useLocation} from "react-router-dom";



const WallPostComponent = (
    {
        post
    }
) => {


        const {pathname} = useLocation();
        const parts = pathname.split("/")




    const [userComment, setCommented] = useState([])

    const getCommenter = async () =>{
        const writer = await findUserById(post.cid);
        setCommented(writer)

    }


    useEffect(() =>{
        if(post.cid){
            getCommenter()

        }

    });


    return (

        <li className="list-group-item override-purple-light-my-wall">
            <div className="d-flex">
                <div className="">
                   <img src={userComment.image} className="rounded-circle wd-logo-pic-small"/>
                </div>
                <div className="ps-3">
                    { parts.length > 2 ?
                        <Link to={`../profile/${userComment._id}`} > {userComment.firstName} </Link>
                        :
                        <Link to={userComment._id} > {userComment.firstName} </Link>
                    }
                    <div>
                        {post.post}
                    </div>
                </div>
            </div>




        </li>
    );
}

export default WallPostComponent;