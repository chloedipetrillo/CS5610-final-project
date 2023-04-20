
const PlayerIndvComponent = (
    {
        player
    }
) => {

    const fetchPlayerInfo = () =>{
        console.log(player)
    }

    return(
        <li className="list-group-item">
            need a way to fetch the player there is nothing linking to player collection
            <br></br>
            {player}
        </li>
    );
};

export default PlayerIndvComponent;