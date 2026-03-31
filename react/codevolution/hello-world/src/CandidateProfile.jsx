export const CandidateProfile = () => {

    const name = "Peter Parker";
    const role = "Web Develoeper";
    const yearOfExperience = 5;
    const isAvailble = true
    return (
        <>
            <h2>{name}</h2>
            <p>{role} with just a {yearOfExperience} year experinece</p>
            <p>{isAvailble ? "isAvailble" : "false"}</p>
            <p>Email address : {name.toLocaleLowerCase().replace(" ", ".")}@gmail.com</p>
        </>
    )
}