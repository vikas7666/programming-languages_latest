import { useState } from "react";


export default function ControlledCoponent() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    return (
        <form>
            <h3>8 : Controlled Component such as input types</h3>
            <input type="text" placeholder="Enter a name" value={name} onChange={(event) => setName(event.target.value)} />
            <br /><br />
            <input type="password" placeholder="Enter a password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <br /><br />
            <input type="email" placeholder="Enter a email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br /><br />
            <button type="submit">Submit</button>
            <button onClick={() => setName('')}>Clear</button>

            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>
        </form>
    )
}