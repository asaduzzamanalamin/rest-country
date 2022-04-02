import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import './Country.css';


const Country = () => {
   const [countries , setCountries] = useState([]);
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
   },[])
  
   return (
      <div>
         <h1 className='total-country'><span className='span-total'>Total</span> Country:{countries.length}</h1>
         <div className='countries'>
            {
               countries.map(country=><Count country={country}></Count>)
            }
         </div>
      </div>
   );
};

export default Country;