import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useContext} from 'react';
// since dashboard is a page export and not an element / object export, it is imported as whole
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';
import Navbar from './components/Navbar'
import categoriesContext from './context';



function App() {

const [ categories, setCategories ] = useState(null);
const value = {categories, setCategories}

  return (
    <div className="app">
      <categoriesContext.Provider value={value}>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/tickets' element={<TicketPage/>}/>
  {/* if edit mode is true, that means ticket is followed by ID, which means that ticket is being clicked and would be edited.  */}
  <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
</Routes>
</BrowserRouter>
</categoriesContext.Provider>
    </div>
  );
}

export default App;
