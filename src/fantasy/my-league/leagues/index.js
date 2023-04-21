import SearchLeaguesComponent from "./search-leagues-component";

function LeaguesComponent() {
    return (
        <div className="row mt-2">
            <div className="d-12 col-md-6">
                SEARCH FUNCITONALITY TO SEARCH ALL  LEAGUES (WILL HAVE NAME CANT CLICK UNLESS U JOIN IT)
                <SearchLeaguesComponent/>
            </div>
            <div className="col-12 col-md-6">
                LIST OF ALL YOUR LEAGUES IF YOU CLICK ONE IT WILL LINK TO THE LEADERBOARD
            </div>
        </div>
    );
}

export default LeaguesComponent;