import React from 'react'
import './crop.css'
import Card from './Card'
import Navbar from './Navbar'
const Crop = () => {


  return (
    <>
<div className="co">
  <Navbar/>
        <div className="top">
          <div className="crop">
            <label htmlFor="">type of crop</label>
            <select name="crop type" id="type">
              <option value="none">none</option>
              <option value="Rabi">Rabi</option>
              <option value="Kharif">Kharif</option>
              <option value="cash crop">Cash Crop</option>
              <option value="food crop">Food Crop</option>
            </select>
          </div>
          <div className="soil">
            <label htmlFor="type of soil">Soil Type</label>
            <select name="" id="soil">
              <option value="none">none</option>
              <option value="alluvial">Alluvial Soil</option>
              <option value="black">Black Soil</option>
              <option value="red">Red Soil</option>
              <option value="mountain">Mountain Soil</option>
            </select>
          </div>

          <button>Get Info</button>
        </div>
      </div>


      <div className="CardContainer">
        <Card />
      </div>
     
    </>
  )
}

export default Crop
