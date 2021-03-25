import React from 'react';

import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header-component">
            <div className="header__left">
                <h1>The Country.</h1>
            </div>

            <div className="header__right">
                <p>Source: https://restcountries.eu/</p>
                <p>Current version: 2.0.5</p>
            </div>
        </div>
    )
}

export default Header;
