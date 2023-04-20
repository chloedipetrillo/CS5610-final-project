import {getFollowers, getFollowing} from "../../services/follows/follows-service";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useParams} from "react-router";

function FollowComponent() {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[ paths.length-1];
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const fetchFollowers = async () =>{
        const response = await getFollowers(active)
        setFollowers(response)
    }
    const fetchFollowing = async () =>{
        const response = await getFollowing(active)
        setFollowing(response)
    }

    useEffect(() =>{
        fetchFollowing();
        fetchFollowers();
    }, [active]);

    // const alreadyFollowing = () => {
    //     let arr = followers.filter((follower) =>
    //     follower.follower._id === )
    // }

    return (
        <div>

            <h2>
                Followers
            </h2>
            <ul className="list-group">
                {followers.map((follower) =>
                    (
                <li className="list-group-item" key={follower._id}>
                    {follower.follower.username}
                </li>
                    ) )}
            </ul>
            <h2>
                Following
            </h2>
            <div className="list-group">
                <pre>{JSON.stringify(following, null,2)}</pre>
                {following.map((followed) =>
                    (
                        <Link to={`/profile/${followed.followed._id}`} className="list-group-item" key={followed._id}>
                            {followed.followed.image} {followed.followed.firstName}
                        </Link>
                    ) )}
            </div>
        </div>
    )


}

export default FollowComponent;