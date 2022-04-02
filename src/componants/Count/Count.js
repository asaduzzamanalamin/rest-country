import React from 'react';
import { Link } from 'react-router-dom';
import './Count.css';

const Count = (props) => {
   // console.log(props.country);
   const {name , flags} = props.country;
  
   // const {name,flags} = country;
   return (
      <Link to={`/country/${name.common}`} className='link-style'>
      <div className='country-card'>
      
       
      <div>
    
      <h4 className='name'title={name.common}>{  name.common.slice(0,5)}</h4>

      </div>
       <div className='img-div'>
       <img className='img-wo' src={flags.png} alt="" /> 
       </div>


    </div>
      </Link>
   );
};

export default Count;