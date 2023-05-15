'use strict'

/**
 * Receives json object about a randomly generated person and adds person's
 * information as a row in the table on the staff page
 * @param {json} user 
 */
function ShowUserInfo(user){
    const tableBody = document.getElementById('generateUser');
    tableBody.innerHTML += `
    <tr>
    <td><img src=${user.picture.thumbnail} alt="Random user"></td>
    <td>
        <a href="mailto:${user.email}">
        ${user.name.first}
        ${user.name.last}</a>
    </td>
    <td>${user.phone}</td>
    <td>${user.location.city}</td>
    </tr> 
    `;
}

/**
 * Generates a random user with either the browser or the server depending on what button the user has clicked
 * @param {event} event 
 */
async function CreateRandomUser(event) {
    event.preventDefault();
    const eventTargetId = event.target.getAttribute('id');

    const url = eventTargetId == 'browserListen' ? "https://randomuser.me/api/"
    : "/generate-person"

    try {
        const res = await fetch(url);
        const data = await res.json();

        if(res.status == 200){
            ShowUserInfo(data.results[0]);
        }
    } catch(error) {
        console.error(error)
    }
}

/* Event Listeners */ 
document.addEventListener('DOMContentLoaded', () => {
    const browserListener = document.getElementById("browserListen");
    browserListener.addEventListener("click", CreateRandomUser);
});

document.addEventListener('DOMContentLoaded', () => {
    const serverListener = document.getElementById("serverListen");
    serverListener.addEventListener("click", CreateRandomUser);
});