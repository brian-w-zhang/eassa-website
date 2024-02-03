import dragon_bg from '../landscapes/dragon background.jpg';
import landscape5 from '../landscapes/landscape 3.jpg';
import line from '../assets/linecool.png';

function Archives() {
  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape5} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Archives</h1>
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
export default Archives;
