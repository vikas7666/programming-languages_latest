import { useState } from "react"

export default function Checkboxes() {
    const [skills, setSkill] = useState([]);
    const handleSkills = (event) => {
        // console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkill([...skills,event.target.value])
        }else{
            // It removes the unchecked skill from your skills array.
            setSkill([...skills.filter((item) => item != event.target.value)])
        }
    }


    return (
        <>
            <h3>Select your Skill</h3>
            <input type="checkbox" value="php" id="php" onChange={handleSkills} />
            <label htmlFor="php">PHP</label>
            <br />
            <input type="checkbox" id="js" value="js" onChange={handleSkills} />
            <label htmlFor="js">JS</label>
            <br />
            <input type="checkbox" id="node" value="node" onChange={handleSkills} />
            <label htmlFor="node">Node</label>
            <br />
            <input type="checkbox" id="java" value="java" onChange={handleSkills} />
            <label htmlFor="java">java</label>

            <h1>{skills.toString()}</h1>
        </>
    )
}