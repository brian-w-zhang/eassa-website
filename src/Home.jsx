import home_video from './assets/lanterns.mp4';
import mcgill from './assets/mcgill.png';

function Home() {
  return (
    <>
      <div className="main">
        <div className="video-container">
          <div className="overlay"></div>
          <video className="home-video" src={home_video} autoPlay loop muted />
          <div className="home-text">
            <h1 className="eassa-text">East Asian Studies</h1>
            <h1 className="eassa-text">Student Association</h1>
            <img className="mcgill-logo" src={mcgill} alt="mcgill logo" />
          </div>
        </div>

        <div className="about-us-home">
          <p className="about-title">Who We Are</p>
          <p className="about-description">
            McGill University&apos;s East Asian Studies Student Association
            (EASSA) is an undergraduate departmental association under the
            Faculty of Arts.
          </p>
        </div>

        <div className="land-home">
          <p className="land-title">Land Acknowledgement</p>
          <p className="land-description">
            EASSA recognizes that McGill University is situated on the unceded
            territory of the Kanien&apos;keha:ka, and is located on land which
            has long served as a site of meeting and exchange amongst Indigenous
            peoples, including the Haudenosaunee and Anishinabeg nations. EASSA
            stands in solidarity with indigenous students here at the
            university.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
