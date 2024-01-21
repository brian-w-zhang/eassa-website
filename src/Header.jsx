import eassa_logo from './assets/EASSA.png';
import border from './assets/border.png';

function Header() {
  return (
    <>
      <header className="header">
        <div className="left-side">
          <img className="logo" src={eassa_logo} alt="logo" />
          <h1 className="eassa-name">EASSA</h1>
        </div>

        <div className="right-side">
          <div className="topic">
            <img className="border" src={border} />
            <h1 className="right-text">About Us</h1>
          </div>
          <div className="topic">
            <img className="border" src={border} />
            <h1 className="right-text">Events</h1>
          </div>
          <div className="topic">
            <img className="border" src={border} />
            <h1 className="right-text">Academics</h1>
          </div>
          <div className="topic">
            <img className="border" src={border} />
            <h1 className="right-text">Archives</h1>
          </div>
          <div className="topic">
            <img className="border" src={border} />
            <h1 className="right-text">Contact Us</h1>
          </div>
        </div>

        {/* <div className="right-side">
          
          <p className="right-section">Events</p>
          <p className="right-section">Academics</p>
          <p className="right-section">Archives</p>
          <p className="right-section">Contact Us</p>
        </div> */}
      </header>
    </>
  );
}
export default Header;
