import React from 'react';
import './App.css';

import Hi from "./components/Hi/hi";
import Card from "./components/Card/card";
import logo from '../src/img/Logo.svg';


function App() {
  return (
    <div className="App">
        <header className="app-header" data-theme="Template_1">
            <img
                className="app-logo"
                src={logo}
                alt="PRFCT FIT"
            />
        </header>
        <main className="app-main" data-theme="Template_1">
            <Hi/>
            <Card/>
        </main>
        <footer className="app-footer" data-theme="Template_5">
            <hr className="divider"/>
            <p className="footerText">
                <span>
                    This email was sent to you as a registered member of prfcfit.com.
                    To update your emails preferences <a href="#">click here</a>.
                </span>
                <span>
                    Use of the service and website is subject to our <a href="#">Terms
                    of Use</a> and <a href="#">Privacy Statement</a>
                </span>
                <br/>
                <span>&copy; {new Date().getFullYear()} PRFCT FIT. All rights reserved.</span>
            </p>
        </footer>
    </div>
  );
}

export default App;
