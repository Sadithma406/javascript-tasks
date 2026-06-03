import { useState } from 'react';

function Task16() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(18);
    const [gender, setGender] = useState("Male");
    const [registered, setRegistered] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);

    function printAnswers(event) {
        event.preventDefault();
        setShowAnswers(true);
    }

    return (
        <>
            <form onSubmit={printAnswers}>
                <input type="text" placeholder="Enter the name" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
                <select value={gender} onChange={(event) => setGender(event.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Registered?</label>
                <input type="radio" name="registered" checked={registered === true} onChange={(event) => setRegistered(true)}></input>
                <label for="registered">Yes</label>
                <input type="radio" name="registered" checked={registered === false} onChange={(event) => setRegistered(false)}></input>
                <label for="registered">No</label>
                <button type="submit">Submit</button>
            </form>
            {showAnswers && (
                <div>
                    <h3>Results:</h3>
                    <p>
                        Your Name is: {name} <br />
                        Your Age is: {age} <br />
                        Your Gender is: {gender} <br />
                        Are you registered?: {registered ? "Yes" : "No"} <br />
                    </p>
                </div>
            )}


        </>
    );
}
export default Task16;