import React from 'react'
import ManagerDashboard from './ManagerDashboard'
import EmployeeDashboard from './EmployeeDashboard'
import CustermerDashboard from './CustermerDashboard'

function Dashboard() {

   var {user,role} = JSON.parse(window.localStorage.getItem("user"))[0]
  //  console.log(userDetails);
  return (
    <div>
        <h1>Dashboard {role}</h1>
        {
            role === 'manager' && <ManagerDashboard></ManagerDashboard>
        }
        {
            role === 'employee' && <EmployeeDashboard></EmployeeDashboard>
        }
        {
            role === 'customer' && <CustermerDashboard></CustermerDashboard>
        }
        
    </div>
  )
}

export default Dashboard