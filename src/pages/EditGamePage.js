import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

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
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <fieldset>
                    <legend>Which game are you updating?</legend>
                    <label htmlFor="title" className="required">Game title</label>
                    <input
                        type="text"
                        placeholder="Title of the game"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        id="title" />

                    <label htmlFor="hoursToBeat" className="required">Hours to complete</label>
                    <input
                        type="number"
                        value={hoursToBeat}
                        placeholder="0"
                        onChange={e => setHoursToBeat(e.target.value)}
                        id="hoursToBeat" />

                    <label htmlFor="releaseDate" className="required">Release date</label>
                    <input
                        type="date"
                        placeholder="dd-mm-yyyy"
                        value={releaseDate}
                        onChange={e => setReleaseDate(e.target.value)}
                        id="releaseDate" />

                    <label htmlFor="submit">
                        <button
                            type="submit"
                            onClick={editGame}
                            id="submit"
                        >Edit game</button> from the collection</label>
                </fieldset>
            </form>
        </>
    )
}

export default EditGamePage;