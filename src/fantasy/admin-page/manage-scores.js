import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllCommentsThunk} from "../../services/comments/comment-thunks";
import {findAllUsersThunk} from "../../services/users/users-thunks";
import {findAllUsers} from "../../services/users/users-services";
import IndividualComponent from "./individuals";


function ManageScoresComponent() {

    return (

        <div className="center mt-2">
           Ajit to put stuff here
            <div >
                <button className="btn btn-danger">
                    Update Scores
                </button>
            </div>
        </div>


    );
}
export default ManageScoresComponent;

