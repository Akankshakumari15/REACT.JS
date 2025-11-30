import React, { useReducer } from 'react'

const UseReducer_Colour = () => {
     function reducer(count, action) {
        if (action.type === "pink") {
            return 'pink'
        } else if (action.type === "purple") {
            return 'purple'
            } else if (action.type === "yellow") {
            return 'yellow'
        } else if (action.type === "black") {
            return 'black'
        }
        else {
            return 'red'
        }
    }
    let [color,dispatch]= useReducer(reducer,"white")
  return (
    <div style={{backgroundColor:color}}>
         <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "pink"})}>Pink</button>
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "purple"})}>Purple</button>
          <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "yellow"})}>Yellow</button>
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "black"})}>Black</button>
            <button style={{
            marginLeft: "10px",
            border: "3px solid black",
            color: "black",
            backgroundColor: "gold",
            cursor: "pointer",
            height: "30px",
            width: "75px",
          }} onClick={() => dispatch({type: "red"})}>Red</button>
    </div>
  )
}

export default UseReducer_Colour