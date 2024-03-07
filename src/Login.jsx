
import './login.css';

import Navbar from './Navbar';

function Login() {
  return (
    <>

      <div class="background-image">
        <div class="overlay">  <Navbar /></div>
        <div class="conten">
          <div className="over">  </div>
          <h1 className='h1'>Welcome to Agro Expert</h1>
          <div className="contain">

            <div className="email">
              <label htmlFor="email">email</label>
              <input type="email" name="" id="" placeholder='Enter Email' />
            </div>
            <div className="pass">
              <label htmlFor="password">password</label>
              <input type="password" id="passwordInput" placeholder="Enter password" />
            </div>
            <a href="/log">
            <button id='log-in' type="submit">Log In</button>
            </a>


          </div>
        </div>
      </div>
    </>

  );
}

export default Login;