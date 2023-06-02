import React from "react";
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useNavigate } from "react-router-dom";

import Game from "./Game";

function GameList({ games, onEditGame, onDeleteGame }) {
    const redirect = useNavigate();

    const onStartCreate = async () => {
        redirect('/games/create');
    };

    return (
        <>
        <p id="addGameParagraph">Add Game</p> 
        <p><IoIosAddCircleOutline className="gameIcon" onClick={onStartCreate}/></p>
        <table id="games">
            <caption>Add and Edit Games</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Hours To Beat</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) =>
                    <Game
                        game={game}
                        key={i}
                        onEditGame={onEditGame}
                        onDeleteGame={onDeleteGame}
                    />)}
            </tbody>
        </table>
        </>
    )
}

export default GameList;
