import React from 'react'
import {useFormik} from 'formik'

function Login() {
   var loginForm = useFormik({
    initialValues:{
        username : "",
        password : ""
    },
    onSubmit:(values)=>{
        alert(JSON.stringify(values))
    }

   })

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
           username :  <input type="text" name="username" onChange={loginForm.handleChange} />
            <br />
           password : <input type="text" name="password" onChange={loginForm.handleChange} />
            <br />
            <button>login</button>

        </form>
    </div>
  )
}

export default Login