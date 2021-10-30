import React, { useEffect } from "react";
import './App.css';
import Persons from "../src/UI/Persons";
import Input from "../src/UI/Input";
import { themeSetting } from "../src/store/Store";

function App() {

 const dark = themeSetting(state => state.dark);
 const toggleDark = themeSetting(state => state.toggleDark);

 useEffect(()=>{
   if(dark){
     document.querySelector('body').classList.add('dark');
   }else{
    document.querySelector('body').classList.remove('dark'); 
   }
 },[dark])

  return (
    <div className="App">
      <button onClick={ toggleDark }>toggle theme</button>
      <Input />
      <Persons />
    </div>
  );
}

export default App;
