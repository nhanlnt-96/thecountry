import React from 'react';

import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header-component">
            <div className="header__left">
                <h1>The Country.</h1>
            </div>

            <div className="header__right">
                <h3>About</h3>
            </div>
        </div>
    )
}

export default Header;
