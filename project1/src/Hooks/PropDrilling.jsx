import React from "react";
const PropDrilling = () =>{
    let number=100;
    return(
        <div>
            <Fun1 num={number}/>
        </div>
    )
}
function Fun1(props){
    return <Fun2 num={props.num}/>
}
function Fun2(props){
    return <Fun3 num={props.num}/>
}
function Fun3(props){
    return <Fun4 num={props.num}/>
}
function Fun4(props){
    return <h1>value:{props.num}</h1>
}
export default PropDrilling