 function Task(){
     function clickMe(){
         alert('hello')
     }
     return(
         <><p>Anil Sidhu</p>
        <img src="../assets/react.svg" width={50} height={50} />
         <button onClick={() => alert('Hello')}>click</button>
         <button onClick={clickMe}>click with function</button>
         </>
     )
 }

 export default Task