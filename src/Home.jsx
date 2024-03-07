import React from 'react'
import './home.css'
import Navbar from './Navbar.jsx'
const Home = () => {
  return (
    <>


      <div class="back-img">

        <div class="overfull"> <Navbar /></div>

        <div className="cont">
          <h1>Benifits of Organic Farming</h1>
          <p className='organic'>
            <ul>
              <li>1)Prohibits Use of Harmful Pesticides</li>
              <li>2)Maintains a Healthy Soil</li>
              <li>3)Reduces Erosion</li>
              <li>4)Provides Cleaner Water</li>
              <li>5)Limits Non-Renewable Energy Use</li>
              <li>6)Discourages Algae Blooms</li>
              <li>7)Stimulates Biodiversity</li>
            </ul>
          </p>

        </div>

        <div className="foot">&copy;shukla  ji</div>



      </div>
    </>

  );


}

export default Home