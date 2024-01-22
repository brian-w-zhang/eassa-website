import eassa_logo from './assets/EASSA.png';
import border from './assets/border.png';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="left-side">
          <img className="logo" src={eassa_logo} alt="logo" />
          <p className="eassa-name">EASSA</p>
        </Link>

        <div className="right-side">
          <Link to="/about-us">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">About Us</h1>
            </div>
          </Link>

          <Link to="/events">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">Events</h1>
            </div>
          </Link>

          <Link to="/academics">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">Academics</h1>
            </div>
          </Link>

          <Link to="/archives">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">Archives</h1>
            </div>
          </Link>

          <Link to="/contact-us">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">Contact Us</h1>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
