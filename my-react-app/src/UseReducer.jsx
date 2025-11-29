//we us useReducer function when we have many functions in a same code 

import React, { useReducer } from 'react'

const UseReducer = () => {
    function reducer(count, action) {
        if (action.type === "inc") {
            return count + 1
        } else if (action.type === "dec") {
            return count - 1
        } else if (action.type === "reset") {
            return 0
        }
        else {
            return count
        }
    }

    let [count, dispatch] = useReducer(reducer, 0)  //function and initial count
    return (
       
        <div style={{display: 'flex',justifyContent:'center',marginTop:'300px'}}>
          <h2>{count}</h2>   
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "dec"})}>--</button>
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "reset"})}>reset</button>
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "inc"})} > ++</button>
           
        </div >
    )
}

export default UseReducer