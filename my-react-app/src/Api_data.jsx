import React, { useEffect,useState } from 'react'
//to connect css file to the project
import './App.css'
const Api_data = () => {
    let [ApiData,SetApiData] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log(data);
        SetApiData(data)
        
      })

    },[])//empty dependency
  return (
    <div>
        {
            ApiData.map((a,b,c)=>{
                return(<>
                    <div>
                        <h1 id='one'>{a.id}</h1>
                        <h3>{a.title}</h3>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Api_data