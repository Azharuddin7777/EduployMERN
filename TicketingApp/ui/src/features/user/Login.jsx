import React from 'react'
import {useFormik} from 'formik'
import { useAuthenticateQuery, useLazyAuthenticateQuery } from '../../services/userapi'
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from './loginSlice';
import { useSelector } from 'react-redux';

function Login() {
    useSelector(state=>{console.log(state.loginReducer.isLoggedIn)});
    var navigate = useNavigate();

    var [loginFn] = useLazyAuthenticateQuery()
   var loginForm = useFormik({
    initialValues:{
        username : "",
        password : ""
    },
    onSubmit:(values)=>{
        console.log(values)
        loginFn(values).then((res)=>{
            window.localStorage.setItem("user", JSON.stringify(res.data));
           if(res.data.length === 0)
           {
            alert("check your deatils")
           }
           else
           {
            setLoggedIn(true)
            navigate("/dashboard");
           }
        })
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