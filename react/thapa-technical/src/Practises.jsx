export const Practises = () =>{
    const student = [11];
    return(
    <>
        {/* <p>{student.length === 0 &&  "No Student Found"}</p> */}
        <p>{!student.length &&  "No Student Found"}</p>
        <p>Number of Student: {student.length}</p>
    </>
    )
};