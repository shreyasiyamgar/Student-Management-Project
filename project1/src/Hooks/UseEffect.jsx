import React,{useEffect,useState} from "react";

    const UseEffect = () =>{
        let bookname="Harry potter"
        let fixedprice=100;
        let [qantity,setqantity]=useState(1);
        let [price,setprice]=useState(100);
        useEffect(()=>{
            setprice(qantity*fixedprice)
        },[qantity,fixedprice]);
        return(
            <>
            <div className="head">
                <h1>Book name:{bookname}</h1>
                <h1>Quantity:{qantity}</h1>
                <h1>price:{price}</h1>
                <button className="h-8 w-30 bg-white " onClick={()=>{setqantity(qantity+1)}}>+</button>
                <button onClick={()=>{setqantity(qantity-1)}}>-</button>
    
            </div>
            <div className="head">
                <h1>Book name:{bookname}</h1>
                <h1>Quantity:{qantity}</h1>
                <h1>price:{price}</h1>
                <button className="h-8 w-30 bg-white " onClick={()=>{setqantity(qantity+1)}}>+</button>
                <button onClick={()=>{setqantity(qantity-1)}}>-</button>
    
            </div>
            </>
        )
    }
    export default UseEffect;

