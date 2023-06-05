import React from "react";
import {HiMinusCircle, HiPencilAlt} from 'react-icons/hi';


function Game({game, onEditGame, onDeleteGame}) {

    return (
        <tr>
            <td>{game.title}</td>
            <td>{game.hoursToBeat}</td>
            <td>{game.releaseDate.slice(0,10)}</td>
            <td><HiMinusCircle className="gameIcon" onClick={() => onDeleteGame(game._id)} /></td>
            <td><HiPencilAlt className="gameIcon" onClick={() => onEditGame(game)} /></td>
        </tr>
    )
}

export default Game;
