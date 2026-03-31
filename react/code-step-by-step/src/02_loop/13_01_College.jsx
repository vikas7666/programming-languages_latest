import StudentList from "./13_02_UserList"

const CollegeList = ({ college }) => {
    console.log('college', college)
    return (
        <>
            <div>
                <h3>{college.name}</h3>
                <ul>
                    <li>{college.website}</li>
                    <li>{college.website}</li>
                    <h3>Student</h3>
                    <li>
                        {
                            college.student.map((student, index) => (
                                <div>
                                    <StudentList student={student} index={index} />
                                </div>
                            ))
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CollegeList