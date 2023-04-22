import {getFollowers, getFollowing} from "../../services/follows/follows-service";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useParams} from "react-router";

function ProfileFollowsComponent({uid}) {

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [showFollowers, setShow] = useState(false);
    const [showFollowing, setShowF] = useState(false);
    const [hideAll, setHide] = useState(false);
    const fetchFollowers = async () =>{
        const response = await getFollowers(uid)
        setFollowers(response)
    }

    const handleHide = () => {
        setHide(true)
    }

    const handleShowFollowing = () =>{
        setShowF(true)
        setShow(false)
        setHide(false);

    }
    const handleShowFollowers = () =>{
        setShowF(false)
        setShow(true)
        setHide(false);

    }

    const fetchFollowing = async () =>{
        const response = await getFollowing(uid)
        setFollowing(response)
    }

    useEffect(() =>{
        fetchFollowing();
        fetchFollowers();
    }, [uid]);

    return (
        <div>
            <div className="list-group override-no-borders mt-3 mb-3">
                <div className="list-group-item override-blue-dark-my-team fw-bold ">
                     <span className="text-white">
                         <span className="pe-4"
                         onClick={()=>handleShowFollowing()}>Following: {following.length}</span>
                         <span className=""
                         onClick={()=>handleShowFollowers()}>Followers: {followers.length}</span>

                         <button className="btn btn-dark float-end rounded-pill" onClick={()=>handleHide()}>Hide</button>
                     </span>
                </div>
                {showFollowing && !hideAll && (<>
                    <li className="list-group-item override-blue-light-my-team fw-bold">
                        All Following
                    </li>
                    {following.map((followed) =>
                        (
                            <Link to={`/profile/${followed.followed._id}`} className="list-group-item override-blue-light-my-team" key={followed._id}>
                                <div className="d-flex">
                                    <img className="wd-logo-pic-small"
                                       src={followed.followed.image}/>

                                    <div className="ps-3">
                                        <div>
                                            {followed.followed.firstName}
                                        </div>
                                        <div className="fs-6 fw-light">
                                            {followed.followed.username}
                                        </div>
                                    </div>

                                </div>


                            </Link>
                        ) )}</>)}
                {!hideAll && showFollowers && (<>
                    <li className="list-group-item override-blue-light-my-team fw-bold">
                        All Followers
                    </li>
                    {followers.map((follower) =>
                        (
                            <Link to={`/profile/${follower.follower._id}`} className="list-group-item override-blue-light-my-team" key={follower._id}>
                                <div className="d-flex mb-2">
                                    <img className="wd-logo-pic-small mt-2 rounded"
                                         src={follower.follower.image}/>

                                    <div className="ps-3">
                                        <div>
                                            {follower.follower.firstName}
                                        </div>
                                        <div className="fs-6 fw-light">
                                            {follower.follower.username}
                                        </div>
                                    </div>

                                </div>

                            </Link>
                        ) )}


                </>)}

            </div>
        </div>
    )


}

export default ProfileFollowsComponent;