import React from 'react';
import './home.css';
import NavbarComp from '../../components/Navbar/Navbar';
import ButtonComp from '../../components/button/Button';

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <div className="hero-sec">
        <div className="hero-desc">
          <h5>A Digital Agency</h5>
          <h1>We're A Full-Range Digital Agency.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="btns">
            <ButtonComp />
          </div>
        </div>
        <div className="hero-img">
          <img src="/banner-img1 1.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
