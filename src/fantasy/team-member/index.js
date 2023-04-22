import {Link} from "react-router-dom";

const TeamMemberComponent = ({
    team
                             }) => {
    return(
        <>
            {
                team.map((person) =>
                    <li className="list-group-item override-search-light-grey">
                        <div className="row">
                            <div className="col-3">
                                <img className="rounded-circle wd-logo-pic-bigger"
                                     src={person.photo}/>
                            </div>
                            <Link to={`../../details/${person._id}`} className="col-9 text-black text-decoration-none">
                                <div className="fw-bold">{person.first_name} {person.second_name}</div>
                                <div> Team: {person.team_name} </div>
                                <div> Position: {person.position} </div>
                                <div> Value: {person.value} </div>

                                {/*<Link to={`../../details/${person._id}`} className="btn btn-dark rounded-pill mt-2"*/}
                                {/*>More Details</Link>*/}

                            </Link>
                        </div>
                    </li>)
            }
        </>
    );
};
export default TeamMemberComponent;