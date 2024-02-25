import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <div className="home__logo">
        <img
          src="./images/logo.png"
          alt=""
        />
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
