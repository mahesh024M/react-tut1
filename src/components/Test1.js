import { useState } from "react";


export default function Test1(props){

    console.log("data is ",props);
   
    let[age,setage]=useState(20);

    return(
      <div>
       <h1>Test1 component</h1>
        <h1>Data received from parent is:{props.userName}</h1>
        <button onClick={()=>props.getdata(age)}>submit</button>
      </div>
    );
}