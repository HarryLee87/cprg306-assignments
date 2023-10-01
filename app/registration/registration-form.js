"use client";

import { useState } from "react";

export default function Registration() {

    const [username, setUsername] = useState("");

    const regFormSubmit = (event) => {
        event.preventDefault();

        alert(`Your username is ${username}`);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        //console.dir(event);
    };


    return (
        <div>
            <header>
                <h1>Registration</h1>
            </header>
            <form onSubmit={regFormSubmit}>

                <div>
                    <label>User Name:</label>
                    <input type="text" className="text-black" required onChange={handleUsernameChange} value={username} />
                </div>

                <div>
                    <input type="submit" value="Submit Registration" />
                </div>

            </form>

        </div>

    );
}