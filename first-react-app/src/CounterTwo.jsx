import React, { useState } from 'react'

function CounterTwo(props) {

    var [value, setValue] = useState(props.myValue)

    function inc()
    {
      setValue(value+1)
    }
    function dec()
    {
      setValue(value-1)
    }

  return (
    <div style={{border : "2px solid", margin: "5px", padding:"5px"}}>
        <h1>{value}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default CounterTwo