import { createContext } from 'react';

// created a value and a function , the value of which can be set into the dashboard and used at the ticket Page 
const categoriesContext = createContext({
    categories : null,
    setCategories : ()=>{}
})

export default categoriesContext