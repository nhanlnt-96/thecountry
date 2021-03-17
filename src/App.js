import React from 'react';
import Header from './components/Header';
import Country from "./features/Country/Country";

import './styles/App.css';
import 'antd/dist/antd.css';
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <div className="sidebar">
                <Sidebar/>
            </div>

            <div className="container">
                <Country/>
            </div>
        </div>
    );
}

export default App;
