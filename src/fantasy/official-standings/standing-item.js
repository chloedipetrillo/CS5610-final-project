import "./index.css"
const standingsItem = (
    {
        standing
    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle wd-small-team-icon"
                         src={standing.image}/>
                </div>
                <div className="col-9">
                    <div>
                        <span className="fw-bold">{standing.name}</span>
                        <span className="ps-3">{standing.points}</span>
                    </div>
                    <div className="text-muted">
                        {standing.wins}-{standing.draws}-{standing.losses}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default standingsItem;