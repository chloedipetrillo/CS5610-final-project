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
            console.log("the user is : " + player._id);
            // let team = findTeamThunk()
            // console.log("the team is : " + team);
            let num = (randomNumberInRange(-5, 50));
            console.log("score for the user is : " + num);
            const t = await findTeams(player._id);
            if (t != null) {
                console.log("team here is: " + JSON.stringify(t))
                // alert("Updating your drafted team!")
                // updateTeam(teamEntry)
                // console.log("totalscores are : " + t.totalScores)
                let total_scores = parseInt(t.totalScores) + num
                console.log("updated scores are : " + total_scores)
                const updatedEntry = {...t, scoresThisWeek: num, totalScores: total_scores}
                console.log("updated entry is : " + JSON.stringify(updatedEntry))
                dispatch(updateTeamThunk(updatedEntry))
            }
        }
    }
    const handleClick = () => {
        setScores();
    };

    return (

        <div className="center mt-2">
           Ajit to put stuff here
            <div >
                <button className="btn btn-danger" onClick={handleClick}>
                    Update Scores
                </button>
                {/*<h2>number is: {num}</h2>*/}
                {/*<h3>users are : {JSON.stringify(usersData)}</h3>*/}
            </div>
        </div>


    );
}
export default ManageScoresComponent;

