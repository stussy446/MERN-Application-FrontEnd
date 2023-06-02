import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import GameList from "../components/GameList";

function GamesPage({setGame}) {

    const redirect = useNavigate();
    const [games, setGames] = useState([]);

    // RETRIEVE all games in collection
    const retrieveAllGames = async () => {
        const response = await fetch('/games');
        const games = await response.json();
        setGames(games);
    }

    // EDIT game in collection
    const onEditGame = async game => {
        setGames(game);
        redirect('/games/update')
    }

    // DELETE game in collection
    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, {method: 'DELETE'});
        if (response === 204) {
            const getResponse = await fetch('/games');
            const games = await getResponse.json();
            setGames(games);
        } else {
            console.error(`Failed to delete game with _id = ${_id}, status code = ${response.status}`);
        };
    };

    useEffect(() => {
        retrieveAllGames();
    }, [])
  

    return (
        <>
        <h2>List of Games Beaten</h2>
        <article>
            <p>This page provides a list of video games beaten over the past 12 months. Each game's title, hours to complete, and release date are included.</p>
            <GameList games={games} onEditGame={onEditGame} onDeleteGame={onDeleteGame} />
        </article>
        </>
    );
}

export default GamesPage;
