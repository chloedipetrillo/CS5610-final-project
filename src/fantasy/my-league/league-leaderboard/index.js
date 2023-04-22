import {useParams} from "react-router";
import {findAllLeaguesThunk} from "../../../services/my-leagues/my-league-thunks";
import {getAllUsersInLeague} from "../../../services/team-leagues/team-leagues-services";
import {findTeams} from "../../../services/my-team/my-team-services";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {findUserById} from "../../../services/users/users-services";
import UserScoreComponent from "./indiv-score";

const LeagueLeaderboardComponent = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("")

    const [userScores, setUserScores] = useState(null)

    const getListOfUsers = async (l) => {
        const fullList = []
        // console.log("users for league : " + l.leagueName)
        await dispatch(findAllLeaguesThunk(leagueId));
        const users = await getAllUsersInLeague(leagueId);
        // console.log("all users for league " + l.leagueName + "are : " + JSON.stringify(users))
        for (const user of users) {
            setName(user.leagueName)
            const u = await findUserById(user.userId)
            // const t = await findTeams(prof._id);
            const t = await findTeams(user.userId)
            const obj = {firstName: u.firstName, lastName: u.lastName, image: u.image, username: u.username, totalScore: t.totalScores, thisWeek: t.scoresThisWeek,
            _id: u._id}
            fullList.push(obj)
            // allUsers

        }
        fullList.sort((a, b) => b.totalScore- a.totalScore);
        return fullList
        // console.log("the users here are : " + allUsers)
    }

    const setList = async () =>{
        const l = await getListOfUsers();
        setUserScores(l)
    }

    useEffect(() => {
        setList();
    }, []);

    const {leagueId} = useParams();

    return(
        <>
            {userScores && (
                <div className="row">
                    <div className="d-none d-md-block col-2"></div>
                    <div className="col-12 col-md-8">

                        <div className="list-group">
                            <div className="list-group-item override-border-radius override-purple-dark-my-wall fw-bold text-white wd-larger-font">
                                {name} Leaderboard
                            </div>
                            <li className="list-group-item override-search-light-grey center">
                                <div className="row">
                                    <div className="col-2">
                                    </div>
                                    <div className="col-4">
                                        <div className="fw-bold"> User Info</div>
                                    </div>
                                    <div className="col-3">
                                        <div className="fw-bold">Score This Week</div>
                                    </div>
                                    <div className="col-3">
                                        <div  className="fw-bold">Total Score</div>
                                    </div>

                                </div>
                            </li>
                            {
                                userScores.map((p) => <UserScoreComponent person={p} key={p._id}/>)
                            }
                        </div>

                    </div>

                    <div className="d-none d-md-block col-2"></div>
                </div>
            )}


        </>

    );
};
export default LeagueLeaderboardComponent;