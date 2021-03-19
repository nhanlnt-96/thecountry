import React from 'react';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import CountryDetail from './features/Country/CountryDetail';

import './styles/App.css';
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <div className="container">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="content">
                    <CountryDetail/>
                </div>
            </div>
        </div>
    );
}

export default App;
