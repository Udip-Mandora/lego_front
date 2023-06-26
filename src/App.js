import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from './myComponent/layout';
import './style/style.css';
import LegoBrick from './myComponent/LegoBrick';
import { Color } from 'three';
import Pagination from './pagination';

// creating a component which has all the information
const MyComponent = () => {

  // creating state variables
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [colorPerPage, setColorPerPage] = useState(14);

  // using useEffect to fetch data from backend database
  useEffect(() => {
    const fetchData = async () => {
      //craeting a try catch block to fetch data and face error as well
      try {
        // storing data fetched from backend api
        const response = await axios.get('http://localhost/api/colors');
        setData(response.data);
      } catch (error) {
        //if there are any error it will show up in console
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // getting index of last color
  const lastColorIndex = currentPage * colorPerPage;
  // getting index of first color
  const firstColorIndex = lastColorIndex - colorPerPage;
  // getting index of current color
  const currentColors = data.slice(firstColorIndex, lastColorIndex);

  // Render the fetched data
  return (
    <>
      <head>
        <title>BrickMMO Colors</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <main>
        {/* a layout has header and footer made manually and stored in myComponent folder */}
        <Layout>
          <div className='hero-content'>
            <p className='main-title'>Welcome to LEGO Colors. Grab every LEGO Color you want just by requesting for it.<br /> We have bunch of LEGO Colors for you to use.</p>
          </div>

          {/* Creating a 3D LEGO Brick */}
          {/* <h1>my 3d lego</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', border: '1px solid black' }}>
            <LegoBrick style={{ width: '200px', height: '200px', border: '1px solid black' }} />
        </div> */}
          <div className='list-heading'><h3>List of LEGO Colors</h3></div>
          <div className='color-container'>
            {/* mapping through data and fetching what we need using item as an accessing token */}
            {currentColors.map((item) => (
              <div className="color-items">
                <div className='color-shape'>
                  {/* creating a 3D icon to showcase colors */}
                  <p className='brick-icon'><i className="fas fa-cube brick-icon" style={{ color: '#' + item.rgb }}></i></p>
                </div>
                <p key={item.id} color={item.rgb}>{item.name}</p>
                {/* Fetching and displaying every details we need to show */}
                <p>RGB Pattern: #{item.rgb}</p>
                <p>Transparency: {item.transparency}</p>
                <p>Brick Link Id: {item.brickLinkExtId}</p>
                <p>Description: {item.brickLinkExtDesc}</p>
                <p>Lego Id: {item.LegoExtId}</p>
                <p>Description: {item.LegoExtDesc}</p>
              </div>
            ))}
          </div>
          {/* Applying pagination */}
          <Pagination totalColors={data.length} ColorsPerPage={colorPerPage} setCurrentPage={setCurrentPage}></Pagination>
        </Layout>
      </main>

    </>
  );
};

export default MyComponent;
