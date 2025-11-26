import React, { useState } from 'react'

const Time = () => {
    let [Time, setCount] = useState()
    // let data=new Date().toLocaleTimeString()
    // console.log(data);

    setInterval(() => {
        setCount(new Date().toLocaleTimeString())
    })

    return (
        <div>
            <h1>{Time}</h1>
            <button onClick={fun}>click</button>
            <button onClick={fun}>stop</button>
        </div>
    )
}

export default Time




// colour changing continuos
// const App = () => {
//  let[state,setState]= useState("pink")
//  function fun1(){
//   if(state=="pink"){
//   setState("green")
//  }
//  else{
//     setState("pink")
//  }
// }
//   return (
//     <div style={{backgroundColor:state}}>
//      <h1>{state}</h1>
//      <button onClick={fun1}>click</button>
//     </div>
//   )
// }

