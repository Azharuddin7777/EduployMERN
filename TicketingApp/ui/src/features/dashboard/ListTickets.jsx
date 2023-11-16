import React from 'react'
import { useListTicketsQuery } from '../../services/ticketapi'

function ListTickets() {
   var {isLoading, data} = useListTicketsQuery();
   
  return (
    <div>
        <h1>ListTickets</h1>
        {
          isLoading && (<h4>..........loading</h4>)
        }
        {
          !isLoading && (
          <ul>
            {
              data.map((tickt)=>{
                return <li>{tickt.issue}</li>
              })
            }
          </ul>
          )
        }
    </div>
  )
}

export default ListTickets