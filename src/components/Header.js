import React, {useState} from 'react';

import '../styles/Header.css';

const Header = () => {

    return (
        <div className="header-component">
            <div className="header__left">
                <h1>The Movies.</h1>
            </div>

            <div className="header__right">
                <div className="dropdown">
                    <button>Movies</button>
                    <div className="dropdown__menu">
                        <p>Popular</p>
                        <p>Now Playing</p>
                        <p>Upcoming</p>
                        <p>Top Rated</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button>TV Shows</button>
                    <div className="dropdown__menu">
                        <p>Popular</p>
                        <p>Airing Today</p>
                        <p>On TV</p>
                        <p>Top Rated</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button>People</button>
                    <div className="dropdown__menu">
                        <p>Popular People</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
