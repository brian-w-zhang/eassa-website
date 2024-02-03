import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/landscape 1.jpg';
import line from '../assets/linecool.png';

function AboutUs() {
  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape1} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">About Us</h1>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="page-content"></div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default AboutUs;
