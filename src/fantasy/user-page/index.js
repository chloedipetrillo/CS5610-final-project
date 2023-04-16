import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {findUserById} from "../../services/users/users-services";


function UserComponent() {
    let {uid} = useParams();
    console.log(uid)
    const [usersPage, setUser] = useState([])


    const getUser = async () =>{
        const user = await findUserById(uid);
        setUser(user)

    }

    useEffect(() =>{
        if(uid){
            getUser()

        }
    });
    return (
        <div className=" mt-2">
            HI
            {usersPage.firstName}


        </div>
    );
}

export default UserComponent;