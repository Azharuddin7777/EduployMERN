import React from 'react'
import Todo from './Todo'

function MyList(props) {
  
  function deleteList(i)
  {
   console.log("hh",props.list)
  //  var temp = [...props.list,i]
  //  props.list.remove(i)
   //props.e = temp;
   // props.list.splice(i,1);
  }
  return (
    <div style={{border: "1px solid", padding:"5px", margin: "5px"}}>
        {
           props.list.map((e,i) => {
            return  <div  style={{border: "1px solid", padding:"5px", margin: "5px"}} key={i} >
              <Todo e={e} ind={i} del={()=>{deleteList(i)}}></Todo>
            </div>
           })
        }
    </div>
  )
}

export default MyList