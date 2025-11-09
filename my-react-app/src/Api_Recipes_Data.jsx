import React, { useEffect, useState } from 'react'
import "./App.css"

const Api_Recipes_Data = () => {
    let [ApiData, SetApiData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data.recipes);
                SetApiData(data.recipes)

            })

    }, [])
    function deleted(id){
     let newArrr=ApiData.filter((a,indx)=>{
     return indx!==id
    
     })
     SetApiData(newArrr)
    }
    return (
        <div id='container'>

            {
                ApiData.map((a, index) => {
                    return (<>
                        <div id='card'>

                            <img src={a.image} alt="" />
                            <p>{a.name}</p>
                            <h5>MealType::{a.mealType}</h5>
                            <h4>Rating::{a.rating}</h4>
                            <button id='delete' onClick={() => deleted(index)}>Delete</button>
                        </div>
                    </>
                    )
                })
            }
        </div>
    )
}

export default Api_Recipes_Data