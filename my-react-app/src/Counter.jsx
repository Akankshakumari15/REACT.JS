
import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [state,SetState] = useState(0)
    let [city,SetCity] = useState(0)
    // to ensure that the print function is loaded only once in console
    useEffect(()=>{
        
       // console.log("hello")
    },[state])//dependency

  return (
    <div>
        <h2>{state}</h2>
        <button onClick={()=>SetState(state+1)}>++</button>
        <button onClick={()=>SetState(state-1)}>--</button>
        <button onClick={()=>SetState()}>reset</button>
        <h3>{city}</h3>
        <button onClick={()=>SetCity("BHOPAL")}>change</button>
    </div>
  )
}

// //  create 3 button and increase ,decrease,,reset
// const App = () => {
//  let[state,setState]= useState(0)

// // first way
//  //  function fun1(){
// //   setState(state+1)  
// // }
// // function fun2(){
// //   setState(state-1)  
// // }
// // function fun3(){
// //   setState(0)  
// // }
//   return (
//     <div style={{backgroundColor:state}}>
//      <h1>{state}</h1>
  
//      {/* first way
//       <button onClick={fun1}>increment</button>
//      <button onClick={fun2}>decrement</button>
//      <button onClick={fun3}>reset</button> */}




 
export default Counter


