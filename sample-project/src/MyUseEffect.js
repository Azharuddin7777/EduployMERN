import React, { useEffect, useState } from 'react'

function MyUseEffect() {

  var [counter, setCounter] = useState(0)

  // function add(){
  //   setCounter(counter+1);
  // }

  useEffect(()=>{


    setTimeout(() => {
       setCounter(counter+1);
    }, 1000);

   
  },[])
  return (
    <div>
      <h1>{counter}</h1>
      {/* <button onClick={add}>+</button> */}
    </div>
  )
}

export default MyUseEffect