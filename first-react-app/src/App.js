import './App.css';
import Counter from './Counter.jsx';
import CounterTwo from './CounterTwo';
function App() {
  return (
    <div style={{border : "2px solid", margin: "5px", padding:"5px"}}>
         <h1>Azhar</h1>
         <Counter myValue={5}></Counter>
         <CounterTwo myValue={10}></CounterTwo>
    </div>
  );
}

export default App;
