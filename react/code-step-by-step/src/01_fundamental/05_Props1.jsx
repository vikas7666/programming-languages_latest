export default function College({ name }) {
    return (
        <>
            <h3>5 : Props1 (Array)</h3>
            <ul>
                <li>{name[0]}</li>
                <li>{name[1]}</li>
                <li>{name[2]}</li>
            </ul>
            <hr />

        </>
    )
}