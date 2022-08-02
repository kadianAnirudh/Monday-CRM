import React from 'react'
import AvatarDisplay from './AvatarDisplay';
import StatusDisplay from './StatusDisplay';
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay';
import DeleteBlock from './DeleteBlock'
import { Link } from 'react-router-dom';

const TicketCard = ({ticket, color}) => {
  return (
    <div className="ticket-card">
      <Link id="link" to={`/ticket/${ticket.documentId}`}>
    <div className="ticket-color" style={{backgroundColor:`${color}`}}> </div>
      <h3> {ticket.title} </h3>
      {/* props imported as props can be passed as props */}
      <AvatarDisplay ticket={ticket} className="img-container"/>
      <StatusDisplay ticket={ticket}/>
      <PriorityDisplay ticket={ticket}/>
      <ProgressDisplay ticket={ticket}/>
      </Link>
      {/* Delete is not a link, you will not go to a new place */}
      <DeleteBlock documentId={ticket.documentId}/>
    </div>
      
  )
}

export default TicketCard