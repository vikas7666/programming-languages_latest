import { useState } from 'react';
import ClickEvent from './01_ClickEvent';
import State from './02_State';
import Toggle from './03_Toggle';
import Props from './04_Props'
import Props1 from './05_Props1';
import StudentClick from './06_StudentClick';
import DefaultProp from './07_DefaultProps';
import ControlledCoponent from './08_ControlledComponent';
import Checkboxes from './09_CheckBoxes';
import RadioBox from './10_RadioBox';

function Fundamental() {

    //4  Props Varibale
    let username = 'nseit_vshukla';

    //4  Props object 
    let userData = {
        name: 'vikas',
        pass: 'vikas.shukla966@gmailcom',
        login: 112354,
    }
    let userData2 = {
        name: 'vipul',
        pass: 'vipul.shuklas966@gmailcom',
        login: 112354,
    }
    //5 Props1 Array 
    let studentList1 = ['vikas', 'Ved', 'OM'];

    // State
    const [student, setStudent] = useState("")
    const [input, setInput] = useState()

    // set student name in state
    function handleClick() {
        console.log('called')
        setStudent('vipul')
    }

    return (
        <>
            {/* Fundamental  1 to 10 chapter  */}
            <ClickEvent />
            <State />
            <Toggle />

            {/* 04  */}
            <Props user={userData} user2={userData2} name={'vikas'} age={29} email={'vikas.shukla966@gmail.com'} unique={username} />

            {/* 05  */}
            <Props1 name={studentList1}></Props1>

            {/* 06  */}
            {student && <StudentClick name={student} ></StudentClick>}
            <button onClick={() => handleClick()}>Demo</button>

            {/* 07  here we loading p tag as children*/}
            <DefaultProp color="orange"><p>hello A</p></DefaultProp>
            <DefaultProp><p>hello B</p></DefaultProp>
            <DefaultProp color='blue'><p>hello C</p></DefaultProp>

            {/* 08  */}
            <ControlledCoponent></ControlledCoponent>

            {/* 09  */}
            <Checkboxes></Checkboxes>

            {/* 10  */}
            <RadioBox></RadioBox>

            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <p>{input}</p>
            <button onClick={() => setInput('')}>clear</button>

        </>

    )
}

export default Fundamental