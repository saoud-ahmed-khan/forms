import React from 'react'
import  "../App.css";
 const formData={
name:"",
email:"",
gender:"",
DOB:"",
phone:"",
status:""

}
export const reducer = (state,action)=>
{
    switch (action.type) {
        case "":
            
            break;
    
        default:
            break;
    }

}

 export function Regestration() {
    const[state, dispatch]= React.useReducer(reducer, formData)

    return (
        <>
           <form className="regestration-form">
               <input type="text" name="name" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="Enter your name "  />
               <input type="email" name="email"  placeholder="Enter your email "  />
               <input type="text" name="gender" placeholder="Enter your gender "  />
               <input type="text" name="DOB" placeholder="age: dd/mm/yy"  />
               <input type="phone" name="phone" placeholder="03XXXXXXXXX"/>
               <input type="text" name="status" placeholder="single/married"/>
               <button>submit</button> 
               {console.log(state)}   
            </form> 
        </>
    )
}
