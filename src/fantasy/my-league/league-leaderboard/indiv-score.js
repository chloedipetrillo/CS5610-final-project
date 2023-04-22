import {Link} from "react-router-dom";

const UserScoreComponent = ({
                  person
                             }) => {
    return(
        <Link to={`../../../profile/${person._id}`} className="list-group-item override-search-light-grey center">
            <div className="row">
                <div className="col-2">
                    <img src={person.image} className="wd-logo-pic-small rounded"/>
                </div>
                <div className="col-4">
                    <div className="fw-bold"> {person.firstName} {person.lastName}</div>
                    <div>@{person.username}</div>
                </div>
                <div className="col-3">
                    <div>{person.thisWeek}</div>
                </div>
                <div className="col-3">
                    <div>{person.totalScore}</div>
                </div>

            </div>
        </Link>
    );
};
export default UserScoreComponent;