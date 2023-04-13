import { useState } from "react";
import "./styles.css";
import Test1 from "./components/Test1";
import Userdetails from "./components/Userdetails";

export default function App() {

  let [userName,setUserName]=useState('Ramana');
  let [city,setCity]=useState('Hyderabad');
  function changeUserName(){
    setUserName('vedant');
  }

  // function to bring data from child test1
  const getdata=(data)=>{
         console.log("Data receieved from child is: ",data);
  }

  const changecity=()=>{
     setCity('Karimnagar');
  }

  const  usersArray=[
     {username:'Raju',
     salary:20000,
     age:25
     },

     {username:'Ramesh',
     salary:30000,
     age:27
     },
     {username:'Ravi',
     salary:40000,
     age:30
     }

  ]

  let [users,setusers]=useState(usersArray);

  return (
    <div className="App" >
          <h1>React Hierarchy</h1>
          <h2>{city}</h2>
       <Test1 userName={userName} getdata={getdata} city={city} />

       {
          users.map((userobj)=> <Userdetails  user={userobj}  />)
       }
          
          
        
    </div>
  );
}
