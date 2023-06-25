// header.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import About from '../About';
import MyComponent from '../App';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './script';


const Header = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/api/colors');
                setData(response.data);
            }
            catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // console.log(data);
    const [value, setValue] = useState('');
    // console.log(value);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log('search', searchTerm);
    }


    return (
        <header className="header-navigation">
            <h2 className='hero-title'>BrickMMO Colors</h2>
            <div className="navigation-menu">
                <ul className="navigation-items">
                    <li className='search-input'>
                        <form>
                            <input id="color-input" type='text' value={value} onChange={onChange} placeholder='Search Color' />
                            <button onClick={() => onSearch(value)}><span className='fa fa-search'></span></button>
                        </form>
                        <div className='dropdown' id="dropdown">
                            {data.filter((item) => {
                                const searchTerm = value.toLocaleLowerCase();
                                const name = item.name.toLocaleLowerCase();

                                return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                            }).slice(0, 10).map((item) => <div key={item.id} onClick={() => onSearch(item.name)} className='dropdown-row' id="dropdown-row"><icon id="dropdown-icon" className="fas fa-cube brick-icon" style={{ color: '#' + item.rgb }}></icon>
                                {item.name}</div>)}
                        </div>
                    </li>
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact US</a></li>
                    <li><a href="#">Login</a></li> */}
                </ul>
            </div>

        </header>
    );
};

export default Header;
