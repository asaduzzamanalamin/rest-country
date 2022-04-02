import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountrideteilShow from '../CountrideteilShow/CountrideteilShow';
import './CountryDEtail.css';

const CountryDEtail = () => {
   const {countryName} = useParams();
   // console.log(countryName);
   const [detail , setDetail] = useState([]);
   useEffect(()=>{
      const url = `https://restcountries.com/v2/name/${countryName}`
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => setDetail(data))
   },[countryName])
   return (
      <div>
         <h1 className='c-detail'> <span className='s-detail'>Country</span> Detailes</h1>
         <div>
            {/* <img src={detail.flags.svg} alt="" /> */}
           {
              detail.map(det=><CountrideteilShow detail = {det}></CountrideteilShow>)
           }
         </div>
      </div>
   );
};

export default CountryDEtail;