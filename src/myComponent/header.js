// header.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import About from '../About';

const Header = () => {

    const [search, setSearch] = useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <header className="header-navigation">
            <h2 className='hero-title'>LEGO Colors</h2>
            <div className="navigation-menu">
                <ul className="navigation-items">
                    <li className='search-input'>
                        <span className='fa fa-search'></span><input type='text' placeholder='Search Color' value={search} onChange={onChange} ></input>
                    </li>
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
