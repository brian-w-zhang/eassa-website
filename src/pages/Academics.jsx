import dragon_bg from '../landscapes/dragon background.jpg';
import landscape4 from '../landscapes/landscape 4.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function Academics() {
  const academicSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const academicSection = academicSectionRef.current;
      if (isElementInViewport(academicSection, 0.7)) {
        academicSection.classList.add('animated');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (element, threshold = 1) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top < windowHeight * threshold &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape4} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Academics</h1>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={academicSectionRef}>
          <p className="topic-main-text">
            Academics are the core of our association so we are dedicating a
            section of our website to keep you in the loop in terms of classes
            and academic initiatives. Here we provide details on current
            academic programs we run, as well as a comprehensive breakdown of
            the different degree offerings of our department.
          </p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default Academics;
