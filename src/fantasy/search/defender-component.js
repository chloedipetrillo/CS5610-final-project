
const DefenderComponent = (
    {
        player
    }
) =>{
    return (
        <>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6">
                        Goals:
                    </div>
                    <div className="col-6">
                        {player.goals_scored}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6">
                        Assists:
                    </div>
                    <div className="col-6">
                        {player.assists}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6">
                        Clean Sheets:
                    </div>
                    <div className="col-6">
                        {player.clean_sheets}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6">
                        Own Goals:
                    </div>
                    <div className="col-6">
                        {player.own_goals}
                    </div>
                </div>
            </li>
            <li className="list-group-item override-search-light-grey">
                <div className="row">
                    <div className="col-6">
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