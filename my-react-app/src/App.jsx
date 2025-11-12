////#####
// const App = () => {
//   let count=0
//   function fun1(){
//     count+=1
//     console.log(count);

//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={fun1}>Click</button>
//     </div>
//    )
// }


//#####
// import Counter from './Counter'

// const App = ()=>{
//   return(
//     <Counter/>
//   )
// }



//######
// import Time from './Time'

// const App = () => {
//   return (
//    <Time/>
//   )
// }


//#####
// import Arr_map from './Arr_map'
// const App = () =>{
//   return(
//     <Arr_map/>
//   )
// }


// ####
// import Api_data  from "./Api_data"
// const App= () =>{
//   return(
//     <Api_data/>
//   )
// }



// #####
// import Api_Recipes_Data from "./Api_Recipes_Data"
// const App=()=>{
//   return (
//     <Api_Recipes_Data/>
//   )
// }


// ####
// import ToDoList from "./ToDoList"
// const App=()=>{
//   return(
//     <ToDoList/>
//   )
// }



 // /####
// import React, {useState} from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import { Add_to_cart/} from "./Add_to_cart";
// // http://localhost:5173/
// const App = () => {
//   let [apiData,SetData]=     useState([])
//   let [filteredddData,SetFilteredddData]=     useState([])

//     let [cart,SetCart]=    useState([])
    
//   return (
//     <div>
//       {/* <Home/>
//       <SignUp/>
//       <Login/> */}
//       <Routes>
//         <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         <Route   path='/signup'  element={<SignUp/>} />
//         <Route   path='/login'  element={<Login/>} />
//         <Route   path='/cart'  element={<AddToCart cart={cart}/>} />


//       </Routes>
//     </div>
//   )
// }


//#####
// import React from 'react'
// import Products from './zepto/Products'

// const App= () =>{
//   return(
//     <div>
//       <Products/>
//     </div>
//   )
// }


//########
// import UseReducer from "./UseReducer"

// const App=()=>{
//   return(
//     <div>
//       <UseReducer/>
//     </div>
//   )
// }


// import React from 'react'
// import UseReducer_Colour from './UseReducer_Colour'
//  const App= () => {
//   return (
//     <div>
//       <UseReducer_Colour/>
//     </div>
//   )
// }

// export default App



// ########use context
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Add_to_cart from "./Add_to_cart";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
         <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Add_to_cart />} />
      </Routes>
    </div>
  );
};

export default App;

