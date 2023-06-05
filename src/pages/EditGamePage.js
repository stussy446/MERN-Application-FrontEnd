import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import TableHead from "../components/TableHead";

function EditGamePage({gameToEdit}) {
    console.log(gameToEdit);
    const [title, setTitle] = useState(`${gameToEdit.title}`);
    const [hoursToBeat, setHoursToBeat] = useState(`${gameToEdit.hoursToBeat}`);
    const [releaseDate, setReleaseDate] = useState(`${gameToEdit.releaseDate}`);

    const redirect = useNavigate()

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                hoursToBeat: hoursToBeat,
                releaseDate: releaseDate
            }),
            headers: {'Content-Type': 'application/json'}
        });
        
        if(response.status === 200) {
            alert('game sucessfully updated.')
        } else {
            const errMessage = await response.json();
            alert(`The game failed to updated with status ${response.status} and message ${errMessage.Error}`);
        }
        redirect('/games');
    };

    
    return (
        <>
        <article>
            <h2>Update Game Entry</h2>
            <p>On this page you can update the information of the selected game.</p>
        </article>
            <table id="gamesTable">
                <caption>Update {gameToEdit.title} from the collection.</caption>
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
            <button class="wait" onClick={editGame}>Update Game</button>
        </>
    )
}

export default EditGamePage;