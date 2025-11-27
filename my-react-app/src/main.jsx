


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import {BrowserRouter}  from 'react-router-dom'
// import context from './Context.jsx'
// import { ContextP } from './Context.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>   
//     {/* <context.Provider value={"helloooo"}>
//     <App />
//     </context.Provider> */}
//     <ContextP>
//       <App/>
//     </ContextP>
//     </BrowserRouter>


//   </StrictMode>,
// );

// npm i react-router-dom

//  console.log("hehehehehe");
// fetch("https://jsonplaceholder.typicode.com/todos").
// then((res)=>{
//   return res.json()

// }).then((data)=>{
//   console.log(data);

// })


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextP } from "./Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextP>
        <App />
      </ContextP>
    </BrowserRouter>
  </StrictMode>
);
