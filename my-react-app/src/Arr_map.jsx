import React from 'react'

const Arr_map = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
         {   //all dynamic work is to be written in curly braces
                arr.map((a, b, c) => {
                    return (
                        <div>
                            <h1>{a}</h1>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Arr_map