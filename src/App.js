import React from 'react';
import Header from './components/Header';
import {Popular} from './features/movies';

import './styles/App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="container">
                <Popular/>
            </div>
        </div>
    );
}

export default App;
