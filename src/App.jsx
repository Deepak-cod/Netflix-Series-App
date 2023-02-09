import React from "react";
import {Name,add,sub,mul,div} from "./Calc";


 

function App(){
    return(
        <>
             <ul>
               <h1>{Name}</h1>
               <li>The Sum of two numbers =  {add(450,4)} </li>
               <li> Multiplication of two numbers = {mul(5,3)} </li>
               <li>The Subtraction of two  =  {sub(34,4)} </li>
               <li>Division of two Number =  {div(40,3)} </li>
              </ul>
        </>
    );
}
export default App;
