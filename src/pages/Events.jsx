import dragon_bg from '../landscapes/dragon background.jpg';
import landscape2 from '../landscapes/landscape 2.jpg';
import line from '../assets/linecool.png';

function Events() {
  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape2} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Events</h1>
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
export default Events;
