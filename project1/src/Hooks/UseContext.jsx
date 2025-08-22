import React, { createContext, useContext } from "react";
const mycontext=createContext();
const UseContext = () =>{
    let product={
        name:"Watch",
        company:"Titan",
        price:4000
    };
    return(
        <mycontext.Provider value={product}>
        <div>
            <Fun1/>
        </div>
        </mycontext.Provider>
    )
}
function Fun1(){
    return <Fun2/>
}
function Fun2(){
    return <Fun3/>
}
function Fun3(){
    return <Fun4/>
}
function Fun4(){
    let num=useContext(mycontext)
    return <h1> Product Name:{num.name},price:(num.price)</h1>
}
export default UseContext