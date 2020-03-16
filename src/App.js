import React from 'react';
import './App.less';
import Hi from "./components/Hi/hi";
import Card from "./components/Card/card";


function App() {
  return (
    <div className="App">
        <header className="app-header">
            <img src="some/path" alt="PRFCT FIT" className="app-logo"/>
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
