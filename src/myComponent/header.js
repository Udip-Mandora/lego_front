// header.js
import React from 'react';

const Header = () => {
    return (
        <header className="header-navigation">
            <h2>LEGO Colors</h2>
            <div className="navigation-menu">
                <ul className="navigation-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact US</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
