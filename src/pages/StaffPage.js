import React, {useState} from "react";
import StaffRow from "../components/StaffRow";

function StaffPage() {
    const [results, setResults] = useState([]);
    const url = 'https://randomuser.me/api/?results=10';

    const fetchRandomStaff = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {setResults(data.results); 
        })
        .catch((err) => {
            alert("Sorry it looks like there is an issue, the error is " + err)
        })
    }

    return (
        <>
        <h2>Random Staff</h2>
            <article id="staff">
                <p>
                    On this page, you will be able to generate random users from this <a href="https://randomuser.me/">random user generator</a>,
                    click either button below to get started!
                </p>
                <button onClick={fetchRandomStaff}>Generate Ten Staff Members</button>
                <table>
                    <caption>Table of Your Random Users</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="generateUser">
                       {results.map((person, i) => <StaffRow person={person} key={i}/>)}
                    </tbody>
                </table>
            </article>
        </>
    )
}

export default StaffPage;