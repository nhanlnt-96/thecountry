import React from 'react';
import Header from './components/Header';
import bg from './asset/img/bg.jpg';

import './styles/App.css';
import Country from "./features/Country/Country";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <Country/>
        </div>
    );
}

export default App;
