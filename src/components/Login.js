import React from 'react'
import {Helmet} from "react-helmet"

import Navbar from './Navbar'
import "./Login.css"
function Login() {
  return (
    

      <div className='body'>

      <Navbar/>
      <div class="main" id="main">
      <input type="checkbox" id="chk" aria-hidden="true"/>

          <div class="signup">
          
              <form>
                  <label for="chk" aria-hidden="true">Sign up</label>
                  <input type="text" name="txt" placeholder="User name" required=""/>
                  <input type="email" name="email" placeholder="Email" required=""/>
                  <input type="phone" name="phone" placeholder="Phone" required=""/>
                  <input type="password" name="pswd" placeholder="Password" required=""/>
                  <input type="password" name="pswdd" placeholder="Confirm Password" required=""/>

                  
                  <button>Sign up</button>
              </form>
          </div>

          <div class="login">
              <form>
                  <label for="chk" aria-hidden="true">Login</label>
                  <input type="email" name="email" placeholder="Email" required=""/>
                  <input type="password" name="pswd" placeholder="Password" required=""/>
                  <button>Login</button>
              </form>
          </div>
  </div>

</div>

  )
}

export default Login