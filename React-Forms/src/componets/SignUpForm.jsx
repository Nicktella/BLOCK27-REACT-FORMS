// SignUpForm.jsx
import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            console.log(result);
            setToken(result.token); // Set the token received from the API
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="form">
                <label>
                    Username:
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                </label>

                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
}
