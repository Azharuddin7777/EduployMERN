import React, { useEffect } from 'react'
import { useLazyListTicketsQuery, useListTicketsQuery } from '../../services/ticketapi'

function ListTickets() {
   var {isLoading, data} = useListTicketsQuery();
   var [getListTicketsFn] = useLazyListTicketsQuery();

   useEffect(()=>{
    getListTicketsFn();
   },[])
   
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