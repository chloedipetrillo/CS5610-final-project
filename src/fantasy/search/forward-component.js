
const ForwardComponent = (
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
        </>
    );
}

export default ForwardComponent;