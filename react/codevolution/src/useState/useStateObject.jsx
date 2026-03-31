import { useState } from "react"

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: 'Bruce wayne',
        age: 30,
        email: "batman@justiceleague.com",
        address: {
            city: "Gotham City",
            country: "USA"
        }
    })
    console.log('component rendering', user)
    const chnageName = () => {
        setUser({
            ...user, // previous old object using spread operator
            name: 'vikas shukla'
        })
    }
    const updateAge = () => {
        setUser({
            ...user,
            age: 35
        })
    }
    const updateMultiple = () => {
        setUser({
            ...user,
            name: 'vipul shukla',
            age: 33,
            email: 'vipul.shukla966@gmai.com'
        })
    }
    const updateAddress = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: 'Mumbai',
            }
        })
    }
    return <div>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.address.country}</p>
        <button onClick={chnageName}>Chage User Name</button>
        <button onClick={updateAge}>Chage User Age</button>
        <button onClick={updateMultiple}>Update Multiple</button>
        <button onClick={updateAddress}>Move to metropolician city</button>
    </div>
}