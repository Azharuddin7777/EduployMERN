import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice';

function Counter() {

   var {value} =  useSelector((state)=>{ return state.counter});
   var dispatch = useDispatch();

  return (
    <div className='my-box'>
        <h1>Count : {value}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}> Decrement</button>
    </div>
  )
}

export default Counter