import eassa_logo from './assets/EASSA.png';
import border from './assets/border.png';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleMouseEnter = () => {
    if (!showDropdown) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (showDropdown && !dropdownRef.current.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <Link to="/about-us" onClick={closeDropdown}>
              <div className="topic-link">
                <h1 className="right-text">About Us</h1>
                <img className="border" src={border} />
              </div>
            </Link>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/our-team" onClick={closeDropdown}>
                  <p className="dropdown-text">Our Team</p>
                </Link>
                <Link to="/constitution" onClick={closeDropdown}>
                  <p className="dropdown-text">Constitution</p>
                </Link>
              </div>
            )}
          </div>

          <Link to="/events">
            <div className="topic">
              <img className="border" src={border} />
              <h1 className="right-text">Events</h1>
            </div>
          </Link>

          <div
            className="topic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <Link to="/academics" onClick={closeDropdown}>
              <div className="topic-link">
                <h1 className="right-text">Academics</h1>
                <img className="border" src={border} />
              </div>
            </Link>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/degree-guide" onClick={closeDropdown}>
                  <p className="dropdown-text">Degree Guide</p>
                </Link>
                <Link to="/initiatives" onClick={closeDropdown}>
                  <p className="dropdown-text">Initiatives</p>
                </Link>
              </div>
            )}
          </div>

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
