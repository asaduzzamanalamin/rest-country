import React from 'react';
import './CountrideteilShow.css';

const CountrideteilShow = (props) => {
   console.log(props.detail);
   const {nativeName , capital , population ,region ,timezones ,borders ,currencies ,languages ,flag} = props.detail;
   return (
      <div>
         <div className='div-work'>
         <img className='img-work' src={flag} alt="" />
         <h1>{nativeName}</h1>
         <h4>Capital:{capital}</h4>
         <h4>Population:{population}</h4>
         <h4>Region:{region}</h4>
         <h4>Language:{languages[0].name}</h4>
         <h4>Currencies:{currencies[0].symbol}</h4>
         <h4>Border:{borders[0]}</h4>
         <h4>Time Zone:{timezones[0]}</h4>
         </div>
      </div>
   );
};

export default CountrideteilShow;