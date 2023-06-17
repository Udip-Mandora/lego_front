import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from './myComponent/layout';
import './style/style.css';
import LegoBrick from './myComponent/LegoBrick';

const MyComponent = () => {
  const [data, setData] = useState([]);

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

  // Render the fetched data
  return (
    <>
      <main>
        <Layout>
          {/* <div>
            {data.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div> */}
          <div className='hero-content'>
            Welcome to LEGO Colors. Grab every LEGO Color you want just by requesting for it. We have bunch of LEGO Colors for you to use.
          </div>
          <h1>my 3d lego</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', border: '1px solid black' }}>
            <LegoBrick style={{ width: '200px', height: '200px', border: '1px solid black' }} />
          </div>
        </Layout>
      </main>

    </>
  );
};

export default MyComponent;
