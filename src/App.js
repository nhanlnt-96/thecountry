import React from 'react';
import Header from './components/Header';
import Country from "./features/Country/Country";
import Sidebar from "./components/Sidebar";

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
                    <Country/>
                </div>
            </div>
        </div>
    );
}

export default App;
