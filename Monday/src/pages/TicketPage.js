import React from 'react';
import { useState , useContext, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesContext from '../context'

const TicketPage = ({editMode}) => {

  const[formData, setFormData] = useState({
    status : 'not started',
    progress : 0,
    // new Date().toISOString can convert data into readable format
    timestamp : new Date().toISOString
  })

const { categories, setCategories } = useContext(categoriesContext); 

  const navigate = useNavigate()

  let { id } = useParams()

  // const editMode = false;

  const handleSubmit = async (e) => {
    // DISALLOWS DEFAULT
    e.preventDefault();

if(editMode) {
  const response = await axios.put(`http://localhost:8000/tickets/${id}`, { 
    data : formData
  })
  const success = response.status === 200
if(success){
  navigate('/')
}
}


// EDIT MODE BEING FALSE, MEANS A NEW ENTRY IS BEING CREATED, THUS DATA RESPONSE WOULD BE SENT
if(!editMode){
  // response is wrt code in server js where url and option is expected
const response = await axios.post('http://localhost:8000/tickets' , {
  formData
})
const success = response.status === 200
if(success){
  navigate('/')
}
}
  }

const fetchData = async () => {
  const response = await axios.get(`http://localhost:8000/tickets/${id}`)
  setFormData(response.data.data)
}

useEffect(() =>{
  if(editMode) fetchData()
},[])

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState)=>({
      ...prevState,
      // adding a new value to the state
      [name]:value
    }))
  }

  // const categories = ['test1', "test2"]


  return (
    <div className="ticket">
<h1> { editMode ? 'Update your Ticket' : 'Create a Ticket' } </h1>
<div className="ticket-container">
  {/* on submit can be used to submit  */}
  {/* forms work on forms + sections + label ( html for wrt ID ) + input ( with id wrf label ) . the input needs to hold a value, wrf State*/}
<form onSubmit={handleSubmit}>
<section>
  <label htmlFor="title"> Title </label>
  <input id="title" type="text" name="title" onChange={handleChange} required={true} value={formData.title} />

  <label htmlFor="Description"> Description </label>
  <input id="description" type="text" name="description" onChange={handleChange} required={true} value={formData.description} />

{/* you can choose from the given categories or you can add a new */}
<label htmlFor="category"> Category </label>
<select
name="category"
value={formData.category}
onChange={handleChange}>
  {categories?.map((category, _index) => (
<option key={_index} value={category}> {category} </option>
  ))}
</select>

  <label htmlFor="new-category"> New Category </label>
  <input id="new-category" type="text" name="category" onChange={handleChange} value={formData.category} />


  <label> Priority </label>
  <div className="multiple-input-container">
    <input 
    id="priority-1"
    name="priority"
    type="radio"
    onChange={handleChange}
    value={1}
    checked={formData.priority == 1}
    />
<label htmlFor="priority-1"> 1 </label>

<input 
    id="priority-2"
    name="priority"
    type="radio"
    onChange={handleChange}
    value={2}
    checked={formData.priority == 2}
    />
<label htmlFor="priority-2"> 2 </label>

<input 
    id="priority-3"
    name="priority"
    type="radio"
    onChange={handleChange}
    value={3}
    checked={formData.priority == 3}
    />
<label htmlFor="priority-3"> 3 </label>

<input 
    id="priority-4"
    name="priority"
    type="radio"
    onChange={handleChange}
    value={4}
    checked={formData.priority == 4}
    />
<label htmlFor="priority-4"> 4 </label>

<input 
    id="priority-5"
    name="priority"
    type="radio"
    onChange={handleChange}
    value={5}
    checked={formData.priority == 5}
    />
<label htmlFor="priority-5"> 5 </label>

{ editMode && 
<>
<input
type="range"
id="progress"
name="progress"
value={formData.progress}
min="0"
max="100"
onChange={handleChange}
/>
<label htmlFor="progress"> Progress {formData.progress} %  </label>


<label>
  Status
</label>

<select
name="status"
value={formData.status}
onChange={handleChange}
>
<option selected={formData.status === 'done'} value={'done'}> Done </option>
<option selected={formData.status === 'work-in-progress'} value={'work-in-progress'}> Work-in-progress </option>
<option selected={formData.status === 'stuck'} value={'stuck'}> Stuck </option>
<option selected={formData.status === 'not-yet-started'} value={'not-yet-started'}> Not yet started  </option>

</select>
</>
}

<input type="submit"/>
  </div>
</section>

<section>
  <label htmlFor="owner"> Owner </label>
  <input id="owner" type="text" name="owner" onChange={handleChange} required={true} value={formData.owner} />

  <label htmlFor="avatar"> Avatar </label>
  <input id="avatar" type="url" name="avatar" onChange={handleChange} required={true} value={formData.avatar} />

<div className="image-preview">
  {formData.avatar && (
    <img src={formData.avatar} alt="preview"/>
  )}
</div>

</section>
</form>
</div>
    </div>
  )
}

export default TicketPage