import React from 'react';
import Logo from '../images/monday-200x200-1.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { AiFillPlusCircle, AiFillHome } from 'react-icons/ai';

const Navbar = () => {
// the func to be used for navigation is usenavigate
  const navigate = useNavigate()

  return (
    <nav>
      {/* LOGO HERE */}
      <div className="navbar">

<div className="logo-container">
  <img className="nav-logo" src={Logo} onClick={() =>navigate('/')}/>
</div>

<div className="controls-container">
  {/* <div className="icon" onClick={() =>navigate('/ticket')}>  ➕ </div>
   */}
   <AiFillPlusCircle className="icon" onClick={() =>navigate('/tickets')}/>
   <AiFillHome className="icon2" onClick={() =>navigate('/')}/>
</div>

</div>
    </nav>
  )
}

export default Navbar