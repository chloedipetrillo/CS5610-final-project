import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../../services/users/users-thunks";
import {findTeams} from "../../services/my-team/my-team-services";
import {updateTeamThunk} from "../../services/my-team/my-team-thunks";

function ManageScoresComponent() {

    const {usersData} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [])

    // usersData.forEach(function(player) {
    //     console.log("the user is : " + player.username);
    // });
    // const [num, setNum] = useState(0);
    // const [team, setTeam] = useState();
    function randomNumberInRange(min, max) {
        // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const setScores = async () => {

        for (const player of usersData) {
            let num = (randomNumberInRange(-5, 50));
            const t = await findTeams(player._id);
            if (t != null) {
                let total_scores = parseInt(t.totalScores) + num
                const updatedEntry = {...t, scoresThisWeek: num, totalScores: total_scores}
                console.log("updated entry is : " + JSON.stringify(updatedEntry))
                dispatch(updateTeamThunk(updatedEntry))
            }
        }
    }
    const resetScores = async () => {
        console.log("resetting all the scores to 0s! ")
        for (const player of usersData) {
            let num = 0
            const t = await findTeams(player._id);
            if (t != null) {
                let total_scores = 0
                const updatedEntry = {...t, scoresThisWeek: num, totalScores: total_scores}
                dispatch(updateTeamThunk(updatedEntry))
            }
        }
    }
    const handleClick = () => {
        setScores();
    };

    const handleResetClick = () => {
        resetScores();
    };

    return (

        <div className="center mt-2">
            <div >
                <button className="btn btn-danger me-2" onClick={handleResetClick}>
                    Reset Scores
                </button>
                <button className="btn btn-success" onClick={handleClick}>
                    Update Scores
                </button>
            </div>
        </div>


    );
}
export default ManageScoresComponent;

