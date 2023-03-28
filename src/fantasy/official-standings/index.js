import standings from "./standings.json"
import StandingItem from "./standing-item";
const StandingsComponent = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">Premier League Standings </li>
            {
                standings.map(standing => <StandingItem
                    key={standing._id}
                    standing={standing}/>)
            }
        </ul>
    );
};
export default StandingsComponent;