import logo from './logo.svg';
import './App.css';
import MyList from './MyList';
import { useState } from 'react';

function App() {

  var [list, setList] = useState(["One"])

function abc(){
 var val = document.getElementById("item").value
 setList([...list, val]);
 console.log(list,"list")

}
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input id="item" type="text" placeholder='enter text' />
      <button onClick={abc}>Submit</button>
      <MyList list={list}></MyList>
    </div>
  );
}

export default App;
