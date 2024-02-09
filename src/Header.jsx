import eassa_logo from './assets/EASSA.png';
import border from './assets/border.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="left-side">
          <img className="logo" src={eassa_logo} alt="logo" />
          <p className="eassa-name">EASSA</p>
        </Link>

        <div className="right-side">
          <div
            className="topic"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="/about-us">
              <div className="topic-link">
                <h1 className="right-text">About Us</h1>
                <img className="border" src={border} />
              </div>
            </Link>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/our-team">Our Team</Link>
                <Link to="/constitution">Constitution</Link>
              </div>
            )}
          </div>

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
