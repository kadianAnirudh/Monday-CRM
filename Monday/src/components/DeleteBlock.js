import React from 'react'
import { FaTrash } from 'react-icons/fa';
import axios from 'axios'


const DeleteBlock = ({documentId}) => {

  const deleteTicket = async () => {
const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`) 
const success = response.status == 200
if(success){ window.location.reload() }

}

  return (
    <div className="delete-block">
<FaTrash style={{height:'25px' , cursor: 'pointer'}}

onClick={deleteTicket}

/>
    </div>
  )
}

export default DeleteBlock