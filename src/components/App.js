import React, {Component} from 'react';
import logo from '../logo.svg';
import './scss/App.scss';
import Article from './mainart/mainart';
import Chords from './chords/chords';
import Tuner from './tuner/tuner';
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav id="navmenu">
                <div>
                    <ul>
                        <HashRouter>
                            <li><NavLink to="/">Strona główna</NavLink></li>
                            <li><NavLink to="/chords">Akordy</NavLink></li>
                            <li><NavLink to="/tuner">Stroik</NavLink></li>
                        </HashRouter>
                    </ul>
                </div>
            </nav>

        );
    }
}

class Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="headerLogo">
                        <a className="Logo-link" href="_blank"><img src={logo} className="logo" alt="logo"/>Guitar
                            Progress</a>
                    </div>
                    <Nav/>
                </header>

            </>
        );
    }
}

class Footer extends Component{
    render() {
        return(
            <footer className="container">
                <span>&copy; Copyright Raven 2019</span>
            </footer>
        )
    }
}

const Homepage = () => {
    return (
        <Article imagep="learnguitar.jpg" title="Witamy w GuitarProgress"
                 content="Strona ta poświęcona jest łatwiejszemu wyszukaniu potrzebnych akordów oraz ich wariacji, a także łatwego zapisywania naszych wyników. W przyszłości pojawią się tutaj tutoriale jak nauczyć się grać na gitarze od podstaw."/>
    )
};

const NotFound = () =>{
    return(
    <Article title="404" content="Oops.. Nie wyświetlimy Ci tej strony, gdyż nie istnieje. Skorzystaj z tego co już mamy :)"/>
    )
};

function App() {
    return (
        <>
            <div className="container">
                <Header/>
                <HashRouter>
                    <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/chords' component={Chords}/>
                    <Route path='/tuner' component={Tuner}/>
                    <Route component={NotFound}/>
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        </>
    )
}

export default App;
