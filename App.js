import React from "react";
import Test from "./Test.js";
import UserDetails from "./UserDetails.js";
import AllUserList from "./AllUserList.js";
import './App.css';

function App() {
  return (
    <div className="App">
         <Test key={1}/>
        
     
        <AllUserList/>
         
         {/* <Test key={2}/>
         <Test key={3}/>
         <Test key={4}/>
         <Test key={5}/>
         <Test key={6}/> */}
    </div>
  );
}



export default App;
