function Props({ name, email, unique, user, user2 }) {
    return (
        <>
            <h3>4 : Props</h3>
            <p>Name : <span>{name}</span></p>
            <p>Email : {email}</p>
            <p>Username : {unique}</p>
            {/* <p>{ user && user?.name}</p> */}
            <p> userData Object: {user.pass}</p>
            <p>userData Object: {user2.pass}</p>
            <hr />
        </>
    )
}

export default Props