import User from "./12_01_User";

export default function ReuseComponent() {

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
            <p>Sendig data to User</p>
            {
                userData.map((item) => (
                    <User data={item} key={item.id}></User>
                ))

            }

        </>
    )
}