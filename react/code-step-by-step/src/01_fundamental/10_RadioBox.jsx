import { useState } from "react"

export default function RadioBox() {
    const [gender, setGender] = useState('female');
    const [city, setCity] = useState();

    const handlegender = (event) => {
        setGender(event.target.value)
    }
    const setCityHandle = (event) => {
        setCity(event.target.value)
    }


    return (
        <>
            <h3>Selected Gender {gender}</h3>
            <input type="radio" value="male" name="fav" id="male" checked={gender === 'male'} onChange={handlegender} />
            <label htmlFor="male">male</label>
            <br />
            <input type="radio" value="female" name="fav" id="female" checked={gender === 'female'} onChange={handlegender} />
            <label htmlFor="female">female</label>
            <br /> <br /><br />

            <select onChange={setCityHandle} defaultValue={"delhi"}>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
            </select>

            <h3>Selected City: {city}</h3>
        </>
    )
}