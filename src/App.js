import React from 'react';
import './App.css';

function auth() {
  const user = document.querySelector('.user').value;
const pass = document.querySelector('.pass').value;

if (user === 'Techy Hunt', pass === '123456'){
  window.alert('Success')
}
else{
  window.alert('Something Went Wrong')
}
}

function app() {
  return(
    <body className="light">
      
    
    <div className="form">
      <h2>Login</h2>
      <div className="input">
        <div className="inputbox">
          <label>Username</label>
          <input type="text" className="user" id="user" placeholder="example@xyz.com" />
        </div>
        <div className="inputbox">
          <label>Password</label>
          <input type="password" className="pass" id="pass" placeholder="........" />
        </div>
        <div className="inputBox">
          <input type="submit" value="LOGIN" className="login" />
        </div>
      </div>
      <p>Forget Password?
        <a href="#">Click Here</a>
      </p>
    </div>
    </body>
  )
}

export default app;