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
        
            case "name":
            return{
                ...state,
                name : action.payload
            }
            case "email":
            return{
                ...state,
                email:action.payload
            }
            case "gender":
            return{
                ...state,
                gender:action.payload
            }
            case "DOB":
            return{
                ...state,
                DOB:action.payload
            }
            case "phone":
            return{
                ...state,
                phone:action.payload
            }
            case "status":
            return{
                ...state,
                status:action.payload
            }
        default:
            return{
                ...state
            }

    }

}

 export function Regestration() {
    const[data, dispatch]= React.useReducer(reducer, formData)

    return (
        <>
           <form  onSubmit={(e)=>{e.preventDefault()}} method="post" className="regestration-form">
               <input type="text" required name="name" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="Enter your name "  />
               <input type="email" required name="email" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="Enter your email "  />
               <input type="text" required name="gender" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="Enter your gender "  />
               <input type="text" required  name="DOB" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="age: dd/mm/yy"  />
               <input type="phone" required name="phone" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="03XXXXXXXXX"/>
               <input type="text" required name="status" onChange={(e)=>{dispatch({type:e.target.name, payload:e.target.value })}} placeholder="single/married"/>
               <button>submit</button> 
               {console.log(data)}   
            </form> 
        </>
    )
}
