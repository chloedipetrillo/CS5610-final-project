import React, {useEffect, useState} from "react";
import {findUserById} from "../../services/users/users-services";



const WallPostComponent = (
    {
        post
    }
) => {

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
            <div className="row">
                <div className="col-4">
                   <img src={userComment.image}/>
                </div>
            </div>
            {post.post}
            Posted by {userComment.firstName}
        </li>
    );
}

export default WallPostComponent;