import React, { useState } from 'react';
import StaffRow from '../components/StaffRow';

function StaffPage(){
    const [results, setResults] = useState([]);
    const handleSubmit = (event) =>{
        fetchAPIData(event);
    }

    const fetchAPIData = async function(event){
        event.preventDefault();
        const url = 'https://randomuser.me/api/?results=10';
        const messageBox = document.getElementById('boxMessage')
        try{
            const apiData = await fetch(url);
            const jsonData = await apiData.json();
            setResults(jsonData.results)
            const table = document.getElementById('staffTable')
            table.style.visibility = 'visible'
            const successMessage = document.getElementById('message1')
            messageBox.style.visibility = 'visible'
            successMessage.innerHTML = "Data successfully retrieved";
        } catch(err){
            err.message = "Request failed"
            const errorMessage = document.getElementById('message2')
            messageBox.style.visibility = 'visible'
            errorMessage.innerHTML = `${err.message}`
        }

    }

    return(
        <>
        <h2>Staff</h2>
                <article>
                    <aside id="boxMessage">
                        <h3>Request status:</h3>
                        <p id="message1"></p>
                        <p id="message2"></p>
                    </aside>
                    <p>
                        On this page you can load data for 10 users from a random user generator.
                        The data comes from this <a href="https://randomuser.me/documentation">Random User Generator</a> API.
                        After clicking the "Get data" button, a message will appear saying if the request
                        was successful or not.
                    </p>
                    <button onClick={handleSubmit} id="dataFromAPI">Get data</button>
                    <table id="staffTable">
                        <caption></caption>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name/Email</th>
                                <th>Phone number</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody id="fillTable">
                        {results.map((person, index) => <StaffRow person={person} key={index} /> )}
                      
                        </tbody>
                    </table>
                </article>
        </>
    )
}

export default StaffPage;