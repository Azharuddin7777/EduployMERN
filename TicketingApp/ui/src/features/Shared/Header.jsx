import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../user/loginSlice";

function Header() {

// useSelector(state=>console.log("mmmmmmm",state))
var isLoggedIn = useSelector(state=>state.loginReducer.isLoggedIn)
var navigate = useNavigate();
var dispatch = useDispatch()

function logout(){
  dispatch(setLoggedIn(false));
  navigate("/login")
}


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ticketing App
          </a>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
           {
            isLoggedIn && <button onClick={()=>{logout()}}>Logout</button>
           }
           {
            !isLoggedIn && <button>Login</button>
           }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
