import React, { useState } from 'react'

const App = () => {
  let [input, SetInput] = useState("")
  let [data, SetData] = useState([])

  function fun1(e) {
    SetInput(e.target.value)
  }

  function done() {
    if (input.trim() !== "") {
      SetData([...data, input])
      SetInput("") // optional: clear input after adding
    }
  }

  function deleted(id) {
    let newArrr = data.filter((a, indx) => indx !== id)
    SetData(newArrr)
  }

  return (
    <div style={{backgroundColor: 'gold',border: '8px solid black', width: ' 400px',height:'700px', display: 'flex',justifyContent:'center'}}>
    <div >
      <h1 style={{display:'flex',justifyContent:'center'}}> <b> <i> To-Do List </i></b></h1>
      <input
        onChange={fun1}
        value={input}
        type="text"
        style={{
          border: '4px solid',
          borderRadius: '5px',
          padding: '5px'
        }}
        placeholder='Enter task here'
      />
      <span> </span>
      <button
        onClick={done}
        style={{
          width: '100px',
          height: '35px',
          border: '4px solid',
          borderRadius: '5px',
          padding: '5px',
          margin: '10px'
        }}
      >
        Click
      </button>

      {
        data.map((a, b) => (
          <div key={b}>
            <h2>{a}</h2>
            <button
              id='delete'
              onClick={() => deleted(b)}
              style={{
                width: '100px',
                height: '35px',
                border: '4px solid',
                borderRadius: '5px',
                padding: '5px'
              }}
            >
              Delete
            </button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default App