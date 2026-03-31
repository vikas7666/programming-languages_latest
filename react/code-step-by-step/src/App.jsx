import './App.css';
import Fundamental from './01_fundamental/00_fundamental';
import Loop from './02_loop/00_loop'
import Task from './practise-task/00_Task';
import ClockComponent from './practise-task/01_ClockComponent';
import EffectRoot from './03_Effects/00_EffectRoot';
import StyletRoot from './04_style/00_style';

// import { createElement } from 'react';
function App() {

  /* const user = 'vikas'
  return (
    <>
      <div>{user}</div>
      <p>{10 + 20}</p>
      <button onClick={() => alert('hello')}>click me</button>
    </>

  )
    Without JSX 
  return createElement(
    "div",
    { id: "rootDiv" },
    "Hello Vikas, this is from createElement!"
  ) */

  // App Return 

  return (
    <>
      {/* <Fundamental /> */}
      {/* <Loop /> */}
      {/* <EffectRoot /> */}
      <StyletRoot />

      {/* Task */}
      {/* <ClockComponent /> */}

    </>
  )

}
export default App