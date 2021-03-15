import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import '../styles/Header.css';

const Header = () => {

    return (
        <div className="header-component">
            <div className="header__left">
                <h1>The Movies.</h1>
            </div>

            <div className="header__right">
                <div className="dropdown">
                    <button className="dropdown__btn">Movies</button>
                    <div className="dropdown__item">
                        <p>Popular</p>
                        <p>Now Playing</p>
                        <p>Upcoming</p>
                        <p>Top Rated</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropdown__btn">TV Shows</button>
                    <div className="dropdown__item">
                        <p>Popular</p>
                        <p>Airing Today</p>
                        <p>On TV</p>
                        <p>Top Rated</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropdown__btn">People</button>
                    <div className="dropdown__item">
                        <p>Popular People</p>
                    </div>
                </div>

                <button className="dropdown__btn">Sign up</button>
                <button className="dropdown__btn">Log in</button>

                <div className="header__search">
                    <input type="text" placeholder="Search for a movie, tv show, person..." />
                    <button><SearchOutlined /></button>
                </div>

                <div className="header__languages">
                    <h4>EN</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;
