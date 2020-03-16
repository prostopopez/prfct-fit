import React from 'react';
import './App.css';

import Hi from "./components/Hi/hi";
import Card from "./components/Card/card";
import logo from '../src/img/Logo.svg';


function App() {
  return (
    <div className="App" data-theme="Template_1">
        <header className="app-header">
            <img
                className="app-logo"
                src={logo}
                alt="PRFCT FIT"
            />
        </header>
        <Hi/>
        <Card/>
        <footer className="app-footer">
            <p>This email was sent to you as a registered member of prfcfit.com.
                To update your emails preferences <a href="#">click here</a>.
            </p>
            <p>Use of the service and website is subject to our <a href="#">Terms
                of Use</a> and <a href="#">Privacy Statement</a>
            </p>
            <small>&copy; {new Date().getFullYear()} PRFCT FIT. All rights reserved.</small>
        </footer>
    </div>
  );
}

export default App;
