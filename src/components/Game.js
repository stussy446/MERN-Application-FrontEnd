import React from "react";
import {HiMinusCircle, HiPencilAlt} from 'react-icons/hi';


function Game({game, onEditGame, onDeleteGame}) {

    return (
        <tr>
            <td>{game.title}</td>
            <td>{game.hoursToBeat}</td>
            <td>{game.releaseDate.slice(0,10)}</td>
            <td><HiPencilAlt onClick={() => onEditGame(game)} /></td>
            <td><HiMinusCircle onClick={() => onDeleteGame(game._id)} /></td>
        </tr>
    )
}

export default Game;
