export const UserInfo = ({ name, age, city, email }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age : {age}</p>
            <p>city : {city}</p>
            <p>email : {email}</p>
        </div>
    )
}