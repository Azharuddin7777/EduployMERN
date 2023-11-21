import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

var [isLoggedIn, setLoggedIn] = useState(false);
var navigate = useNavigate();


useEffect(()=>{
    if (window.localStorage.getItem('user')) {
        setLoggedIn(true)
    }
    else
    {
        setLoggedIn(false);
        navigate('/login')
    }
},[])

function logout(){
    window.localStorage.removeItem('user');
    setLoggedIn(false)
    navigate('/login')
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ticketing App
          </a>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">


                {isLoggedIn && (<button onClick={()=>{
                    logout()
                }}>
                Logout
              </button>) }
              {!isLoggedIn && (<button class="nav-link" href="#">
                LogIn
              </button>) }
            
              {/* <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
