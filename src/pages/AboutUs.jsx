import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/landscape 1.jpg';

function AboutUs() {
  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="about-us-container">
        <img src={landscape1} className="pages-image" alt="landscape" />
        <h1 className="about-us-title">About Us</h1>
      </div>
    </>
  );
}
export default AboutUs;
