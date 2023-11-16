import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'

function CustermerDashboard() {
  var navigate = useNavigate();

  return (
    <div>
      <h1>CustermerDashboard</h1>
      <Link to="listTickets">All Tickets</Link>
       &nbsp;	&nbsp;	&nbsp;
      <button onClick={()=>{
        navigate("addTicket")
      }}>Raise Ticket</button>
      <Outlet></Outlet>
    </div>
  )
}

export default CustermerDashboard