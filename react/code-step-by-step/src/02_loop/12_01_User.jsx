const User = ({ data }) => {
    // console.log(`data`,data)
    return (
        <>
            <ul key={data.id}>
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>{data.surname}</li>
            </ul>
        </>
    )
}

export default User