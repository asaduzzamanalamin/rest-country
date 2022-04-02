
import './App.css';
import Nav from './componants/Nav/Nav';
import Home from './componants/Home/Home'

import { Route, Routes } from 'react-router-dom';
import About from './componants/Aout/About';
import NotFound from './componants/NotFound/NotFound';
import Contact from './componants/Contact/Contact';
import Country from './componants/Country/Country';
import CountryDEtail from './componants/CountryDEtail/CountryDEtail';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path ='/home'element={<Home></Home>}></Route>
       <Route path ='/country' element={<Country></Country>}></Route>
       <Route path='country/:countryName' element={<CountryDEtail></CountryDEtail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
