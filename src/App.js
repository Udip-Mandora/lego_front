import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from './myComponent/layout';
import './style/style.css';
import LegoBrick from './myComponent/LegoBrick';
import { Color } from 'three';
// import ReactPagiNate from 'react-paginate';
import Pagination from './pagination';
// import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [colorPerPage, setColorPerPage] = useState(14);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/api/colors');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const lastColorIndex = currentPage * colorPerPage;
  const firstColorIndex = lastColorIndex - colorPerPage;
  const currentColors = data.slice(firstColorIndex, lastColorIndex);

  // Render the fetched data
  return (
    <>
      <head>
        <title>BrickMMO Colors</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <main>
        <Layout>
          {/* <div>
            {data.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div> */}
          <div className='hero-content'>
            <p className='main-title'>Welcome to LEGO Colors. Grab every LEGO Color you want just by requesting for it.<br /> We have bunch of LEGO Colors for you to use.</p>
          </div>
          {/* <h1>my 3d lego</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', border: '1px solid black' }}>
            <LegoBrick style={{ width: '200px', height: '200px', border: '1px solid black' }} />
        </div> */}
          <div className='list-heading'><h3>List of LEGO Colors</h3></div>
          <div className='color-container'>
            {currentColors.map((item) => (
              <div className="color-items">
                <div className='color-shape'>
                  <p className='brick-icon'><i className="fas fa-cube brick-icon" style={{ color: '#' + item.rgb }}></i></p>
                </div>
                <p key={item.id} color={item.rgb}>{item.name}</p>
                <p>RGB Pattern: #{item.rgb}</p>
                <p>Transparency: {item.transparency}</p>
                <p>Brick Link Id: {item.brickLinkExtId}</p>
                <p>Description: {item.brickLinkExtDesc}</p>
                <p>Lego Id: {item.LegoExtId}</p>
                <p>Description: {item.LegoExtDesc}</p>
              </div>
            ))}
          </div>
          <Pagination totalColors={data.length} ColorsPerPage={colorPerPage} setCurrentPage={setCurrentPage}></Pagination>
        </Layout>
      </main>

    </>
  );
};

export default MyComponent;
