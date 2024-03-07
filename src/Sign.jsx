import './sign.css';
import Navbar from './Navbar';
function Sign() 
{
  return (
    <>

      <div class="background-image">
        <div class="overlay"><Navbar/></div>
        <div class="content">
          <div className="over">  </div>
          <h1>Welcome to Agro Expert</h1>
          <div className="container">

            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="" placeholder='Enter Email' />
            </div>
            <div className="pass">
              <label htmlFor="password">Password</label>
              <input type="password" id="passwordInput" placeholder="Enter password" />
            </div>
            <div className="phone">
              <label htmlFor="">Phone Number</label>
              <input type="number" className="pho" placeholder='Enter phone number' />
            </div>
            <div className="pass">
              <label htmlFor="location">Location</label>
              <input type="Location" id="" placeholder="Enter location" />
            </div>
<a href="/signin">
            <button id='sign-up' type="submit">Sign Up</button>

            </a>



          </div>
        </div>
      </div>

      

    </>)
}





export default Sign;