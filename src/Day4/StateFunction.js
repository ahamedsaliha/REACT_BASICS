import {useState} from "react";
function StateFunction()
{
    const [carName,setcarName]=useState("Thar");
    const changeCarName=()=>setcarName("BMW")
    
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1);

    const decreCount=()=>setCount(count-1);

    
     return(
    
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={changeCarName}>click me</button>
           <h1>Count {count}</h1>
           <button onClick={changeCount}>increment</button>
           <button onClick={decreCount}>Decrement</button>
       

        </div>
     )
}
export default StateFunction;