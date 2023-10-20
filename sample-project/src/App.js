import logo from './logo.svg';
import './App.css';
import secondRoom from './secondRoom';
import Third from './Third';
import { useRef, useState } from 'react';
import MyUseEffect from './MyUseEffect';


function App() {
  var [myValue, setMyValue] = useState("")
  var myRef = useRef()
  var childRef = useRef()

  function refOn(e){
    console.log(e.key)
    if (e.key === "Enter"){
      childRef.current.focus();
    }
   // myRef.current.focus();
  }

  function childRefOn(){
    //myRef.current.focus();
    alert("hi")
  }

  return (
    <div className="App">
      <h1>Azhar</h1>
      <input type="text"  ref={myRef} onKeyUp={refOn}/>
      <h1>{myValue}</h1>
      <button onClick={refOn}>My Button</button>
       <Third childOn={childRefOn} name={childRef}></Third>  
       <MyUseEffect></MyUseEffect>     
     </div>
  );
}

export default App;
