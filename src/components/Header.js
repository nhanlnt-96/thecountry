import React from 'react';
import {SearchOutlined} from '@ant-design/icons';

import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header-component">
            <div className="header__left">
                <h1>The Country.</h1>
            </div>

            <div className="header__right">
                <div className="header__search">
                    <input type="text" placeholder="Enter country name..."/>
                    <button><SearchOutlined/></button>
                </div>
                <h3>About</h3>
            </div>
        </div>
    )
}

export default Header;
