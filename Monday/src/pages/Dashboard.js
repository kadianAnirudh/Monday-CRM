import React from 'react'
import TicketCard from '../components/TicketCard'
import axios from 'axios';
import { useState, useEffect , useContext } from 'react';
import categoriesContext from '../context'

const Dashboard = () => {

const[tickets, setTickets] = useState(null)
const { categories, setCategories } = useContext(categoriesContext)


  useEffect(()=>{
    
    const fetchData = async() => {
    const response =  await axios.get('http://localhost:8000/tickets')
    const dataObject = response.data.data

    const arrayOfKeys = Object.keys(dataObject);
    const arrayOfData = Object.keys(dataObject).map((key)=>dataObject[key])


// creates an empty array 
const formattedArray = []

// maps over every avaialble key in the database
arrayOfKeys.forEach((key, index)=> {
  const formattedData = { ...arrayOfData[index] } 
  formattedData['documentId'] = key
  formattedArray.push(formattedData)
})
setTickets(formattedArray)
}
fetchData()
},[])


useEffect(()=>{
setCategories([...new Set(tickets?.map(({category})=> category))])
}, [])


const colors = [
  'rgb(255,179,186)',
  'rgb(255,223,186)',
  'rgb(255,225,186)',
  'rgb(186,255,201)',
  'rgb(186,255,255)',
]

// ...new Set() creates an array of objects that are unique, since the fN is run wrt categories only, an array of categories is created.
const uniqueCategories = [
  // Set creates a group of unique values
  ...new Set(tickets?.map(({category})=>category))
]

// category is the only one chosen here because we need need quarters to appear only once

  return (
    <div className="dashboard">
<h1> My Projects</h1>
    
    <div className="ticket-container">
      {/* If ticket exists, then unique category ( an array of 2 values should be mapped in a way that it created h3 with array object ) */}
{tickets && uniqueCategories?.map((uniqueCategory, categoryIndex)=> (
<div key={categoryIndex}>
<h3> {uniqueCategory}</h3>

{tickets.filter((ticket) => ticket.category === uniqueCategory)
.map((filteredTicket, _index) => (
  <TicketCard 
  id={_index}
  color={colors[categoryIndex] || colors[0]}
  ticket={filteredTicket}
/>
))
}
</div>

))}
    </div>
    </div>
  )
}

export default Dashboard