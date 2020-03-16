import React from 'react';
import Hi from "./components/Hi";
import Card from "./components/Card";
import { getCards, getUserData } from './services/mainService';
import logo from './img/Logo.svg';
import './style.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: null,
            userData: null
        }
    }

    async componentDidMount() {
        this.setState({
            cards: await getCards(),
            userData: await getUserData()
        });
    }

    render() {
        const { cards, userData } = this.state;

        return <div className="app">
            <header className="appHeader">
                <img
                    className="appLogo"
                    src={logo}
                    alt="PRFCT FIT"
                />
            </header>
            <main className="appMain">
                <Hi userData={userData}/>
                <Card cards={cards}/>
            </main>
            <footer className="appFooter">
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
    }
}

export default App;
