import React from 'react';
import useLocalStorage from 'use-local-storage';

import './index.css'


function App() {

  //
  const [theme, setTheme] = useLocalStorage( 'dark' , 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className='login'>
        <h1> Login</h1>
        <div className='container'>
          <div className='top'>
          <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-apple"></i>
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <i onClick={switchTheme} className='fas fa-toggle-on'></i>
        </div>
      </div>
    </div>
  );
}

export default App;
