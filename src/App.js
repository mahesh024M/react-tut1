import { useState } from "react";
import "./styles.css";
import Test1 from "./components/Test1";

export default function App() {

  let [userName,setUserName]=useState('Ramana');

  function changeUserName(){
    setUserName('vedant');
  }

  return (
    <div className="App" >
          <h1>React Hierarchy</h1>
           <Test1 userName={userName}/>
    </div>
  );
}
