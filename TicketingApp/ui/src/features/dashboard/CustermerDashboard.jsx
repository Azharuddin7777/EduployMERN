import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'

function CustermerDashboard() {
  var navigate = useNavigate();
  return (
    <div>
        <h1>CustomerDashboard</h1>
        <Link to="listTickets">List of Tickets</Link>
        <button onClick={()=>{navigate("addTicket")}}>Raise Ticket</button>
        <Outlet></Outlet>
    </div>
  )
}


export default CustermerDashboard