import { SubProfile } from './sub-profile'

// export const Profile = ({ user, children }) => {
export const Profile = () => {
    /*
        React always sends props as ONE object.
        In parent:
            <Profile user={user} />
        React converts it internally to:
            Profile({ user: user })
        So here:
            ({ user })
        means:
            "Take the 'user' property from props"
    */

    /*
        'user' is an OBJECT like this:
        {
            name: "Vikas",
            surname: "Shukla",
            age: 31
        }
        Since it is an object, we use OBJECT DESTRUCTURING:
    */

    // const { name, surname, age } = user;

    /*
        This line:
            const { name, surname, age } = user;
        is the same as writing:
            const name = user.name;
            const surname = user.surname;
            const age = user.age;
        It just makes the code cleaner.
    */

    /*
        Important:
        If user was an ARRAY like:
        const user = ["Vikas", "Shukla", 31]
        Then we would use ARRAY destructuring:
        const [name, surname, age] = user;
    */

    return (
        <div>
            {/* 
                React does NOT need a for loop here.
                Why?
                Because we are NOT iterating.
                We are just rendering individual variables.
                React simply evaluates:
                    {name}
                    {surname}
                    {age}
                and inserts their values into the JSX.
                Curly braces {} in JSX mean:
                    "Evaluate this JavaScript expression"
            */}
            {/* <h2>Profile Compoent loaded</h2>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p> */}
            {/* <SubProfile name={name}></SubProfile> */}
            <SubProfile></SubProfile>
        </div>
    )
}


// When Do We Use a Loop?
// const users = [
//     { name: "Vikas" },
//     { name: "Rahul" }
// ]

// users.map(user => <p>{user.name}</p>)