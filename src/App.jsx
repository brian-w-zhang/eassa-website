import home_video from './assets/lanterns.mp4';
import mcgill from './assets/mcgill.png';

function App() {
  return (
    <>
      <div className="main">
        <header className="header">
          <h1>Header</h1>
        </header>

        <div className="video-container">
          <div className="overlay"></div>

          <video className="home-video" src={home_video} autoPlay loop muted />
          <div className="home-text">
            <h1 className="eassa-text">East Asian Studies</h1>
            <h1 className="eassa-text">Student Association</h1>
            <img className="mcgill-logo" src={mcgill} alt="mcgill logo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
