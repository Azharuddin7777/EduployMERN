import React from 'react'

function Todo(props) {

    console.log("rendering", props.e)

 
  return (
    <div>
         <button>Edit</button>
        <button onClick={()=>{props.del(props.i)}}>Delete</button>
        <h1>{props.e}</h1>
    </div>
  )
}

export default React.memo(Todo);