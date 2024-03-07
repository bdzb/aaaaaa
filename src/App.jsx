import React from 'react';
import './App.css';
import Crop from './Crop.jsx'
import Login from "./Login.jsx"
import Home from './Home.jsx'
import Sign from './Sign.jsx'
import Info from './Info.jsx'
import Weather from './Weather.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Govt from './Govt.jsx';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path='/log' element={<Home />} />
          <Route path='/signin' element={<Home />} />
          <Route path='/govt'  element={<Govt/>}/>                  
          <Route path='/info' element={<Info/>}/>



          </Routes>
      </BrowserRouter>


      {/* <Home/>
       <Weather />
      <Login />
      <Sign />  
      */}
    </>)
}

export default App;
