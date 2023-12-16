import React, {useState} from "react";


 export default function StateHoldObject()
{
    const[Home,setHome]=useState({Doorno:16,HomeName:"ahamed manzil", Address:"marakadai coimbatore"})
    
    const changeDoor=()=>
    {
        setHome((prevState)=>{return{...prevState,Doorno:17}})
    }
    return(
       <div>
        <h1>My Doorno is {Home.Doorno}</h1>
        <h1>MY Manzil name is {Home.HomeName}</h1>
        <h2>The address of my home is {Home.Address}</h2>
        <button onClick={changeDoor}>change addresss</button>
        </div>

    )
}
