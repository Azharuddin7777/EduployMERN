import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import CustomerTicketsList from './CustomerTicketsList';

function CustermerDashboard() {
  var navigate = useNavigate();

  return (
    <div>
      <h1>Custormer Dashboard</h1>
      <Link to="listTickets">All Tickets</Link>
       &nbsp;	&nbsp;	&nbsp;
      <button onClick={()=>{
        navigate("addTicket")
      }}>Raise Ticket</button>
      {/* <CustomerTicketsList></CustomerTicketsList> */}
      <Outlet></Outlet>
    </div>
  )
}

export default CustermerDashboard