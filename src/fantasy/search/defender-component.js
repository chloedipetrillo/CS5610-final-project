
const DefenderComponent = (
    {
        player
    }
) =>{
    return (
        <>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6 fw-bold">
                        Goals:
                    </div>
                    <div className="col-6">
                        {player.goals_scored}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6 fw-bold">
                        Assists:
                    </div>
                    <div className="col-6">
                        {player.assists}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6 fw-bold">
                        Clean Sheets:
                    </div>
                    <div className="col-6">
                        {player.clean_sheets}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6 fw-bold">
                        Own Goals:
                    </div>
                    <div className="col-6">
                        {player.own_goals}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6 fw-bold">
                        Goals Conceded:
                    </div>
                    <div className="col-6">
                        {player.goals_conceded}
                    </div>
                </div>
            </li>

        </>
    );
}

export default DefenderComponent;