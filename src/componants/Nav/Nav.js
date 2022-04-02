import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
   return (
      <div>
        
         <nav className='work1'>
            <div className="logo-container ">
               <h2 className='logo-cont'>Fancy <span className='work3'>Player</span> </h2>
            </div>
            <div className="menu-container">
               <Link to='/home'>Home</Link>
               <Link to='/players'>player data</Link>
               <Link to='/about'>Aout us</Link>
               <Link to='contact'>Contact</Link>
               <Link to='country'>Country</Link>
            </div>
         </nav>
      </div>
   );
};

export default Nav;