import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import TableHead from '../components/TableHead';

function CreateGamePage() {
    const [title, setTitle] = useState("Game Title");
    const [hoursToBeat, setHoursToBeat] = useState(0);
    const [releaseDate, setReleaseDate] = useState('1111/01/01')

    const redirect = useNavigate()

    const addGame = async () => {
        const newGame = {title, hoursToBeat, releaseDate};

        const response = await fetch('/games', {
            method: "POST",
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.status === 201) {
            alert('game added to collection.');
            redirect('/games');
        } else {
            alert(`game failed to be added with status code ${response.status}, please make sure you have filled out all required fields`);
        };
    };


    return (
        <>
        <article>
            <h2>Create New Game Entry</h2>
            <p>On this page you can add a newly beaten game to the list by providing the game's title, hours to complete, and release date.</p>
            <table id="gamesTable">
                <caption>Add a new game to the collection.</caption>
                <TableHead />
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="title" className="required"></label>
                            <input
                                type="text"
                                placeholder="Title of the game"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                id="title" />
                        </td>
                        <td>
                            <label htmlFor="hoursToBeat" className="required"></label>
                            <input
                               type="number"
                               value={hoursToBeat}
                               placeholder="0"
                               onChange={e => setHoursToBeat(e.target.value)}
                               id="hoursToBeat" />
                        </td>
                        <td>
                            <label htmlFor="releaseDate" className="required"></label>
                            <input
                              type="date"
                              placeholder="dd-mm-yyyy"
                              value={releaseDate}
                              onChange={e => setReleaseDate(e.target.value)}
                              id="releaseDate" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="wait" onClick={addGame}>Add Game</button>
        </article>
        </>
    )
}

export default CreateGamePage;