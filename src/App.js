import './App.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
export default function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=> {
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
       <Navbar title="text" mode={mode} togglemode={togglemode}/>
        {/*<Navbar />*/}
        <div className ="container my-3">   {/* my -3  is the y axis margin */}
          <Textform heading="Enter the text" mode={mode}/>
          {/*<About/>*/}
        </div> 
      
        
    </>
  );
}
