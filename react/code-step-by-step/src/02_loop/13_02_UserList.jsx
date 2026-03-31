const StudentList = ({ student, index }) => {
    return (
        <>
            <ul key={index}>
                <li>{student.name}</li>
                <li>{student.age}</li>
            </ul>
        </>
    )
}

export default StudentList