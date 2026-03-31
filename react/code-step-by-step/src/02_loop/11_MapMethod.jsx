export default function MapMethod() {

    let userData = [
        {
            "id": 1,
            "name": 'OM',
            "surname": 'Triphati'
        },
        {
            "id": 2,
            "name": 'Ved',
            "surname": 'Shukla'
        },
        {
            "id": 3,
            "name": 'Rudra',
            "surname": 'mishra'
        }
    ]

    return (
        <>
            <table >
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>name</td>
                        <td>surname</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: "1px solid #ccc" }}>{item.id}</td>
                                <td style={{ border: "1px solid #ccc" }}>{item.name}</td>
                                <td style={{ border: "1px solid #ccc" }}>{item.surname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table >
        </>
    )
}