import { useState } from "react";
function UseState(){
    const [count,setcount]=useState(0);
    let [moviename,setmoviename]=useState("Chava");
    return <>
    <h1>{moviename}</h1>
    <button onClick={()=>{setmoviename("BAJI")}}>Click me</button>
    <h1>Count is {count}</h1>
    <button onClick={()=>{setcount(count+1)}}>Add to Cart</button>
    <button onClick={()=>{setcount(count-1)}}>remove from Cart</button>
    </>
}
export default UseState;