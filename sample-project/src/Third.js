import React from 'react'
import { useRef, useState } from 'react';

function Third(props) {

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };


  return (
    <div>
      <h1>Child Componennt</h1>
      <input type="text" ref={props.name} />
      <button onClick={props.childOn}>Focus Input</button>
    </div>
  )
}

export default Third