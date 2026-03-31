import CollegeList from "./13_01_College"
export default function NestedLoop() {

    const collegeData = [
        {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@TextDecoderStream.com"
                },
                {
                    name: "Peter",
                    age: 20,
                    email: "peter@TextDecoderStream.com"
                }
            ]
        },
        {
            name: "IIT Delhi",
            city: "Delhi",
            website: "www.IIT.com",
            student: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@TextDecoderStream.com"
                },
                {
                    name: "Peter",
                    age: 20,
                    email: "peter@TextDecoderStream.com"
                }
            ]
        },
        {
            name: "KCIET Hisar",
            city: "Hisar",
            website: "www.KCIET.com",
            student: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@TextDecoderStream.com"
                },
                {
                    name: "Peter",
                    age: 20,
                    email: "peter@TextDecoderStream.com"
                }
            ]
        }
    ]
    return (
        <>  {
            collegeData.map((college, index) => (
                <div key={index} style={{
                    backgroundColor: "#fff",
                    color: '#000',
                    padding: "10px",
                    marginBottom: "20px",
                    boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
                    width: "500px"
                }}>
                    <CollegeList college={college} />
                </div>

            ))
        }

        </>
    )
}