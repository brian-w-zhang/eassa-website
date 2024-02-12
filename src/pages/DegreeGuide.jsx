import dragon_bg from '../landscapes/dragon background.jpg';
import landscape from '../landscapes/fushimi.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function DegreeGuide() {
  const guideSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const guideSection = guideSectionRef.current;
      if (isElementInViewport(guideSection, 0.7)) {
        guideSection.classList.add('animated');
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
        <img src={landscape} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Degree Guide</h1>
        <p className="landscape-text">Fushimi Inari Shrine | Kyoto, Japan</p>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={guideSectionRef}>
          <p className="topic-main-title">Honours East Asian Studies</p>
          <p className="topic-main-text">
            Introducing our comprehensive Degree Guide for East Asian Studies at
            McGill! This invaluable resource provides essential information for
            students interested in pursuing a minor, major, or graduate degree
            in East Asian Studies. Inside, you`&apos;ll find detailed
            descriptions of program requirements, course offerings, plus
            opportunities for experiential learning, studying abroad, and
            research.
            <br></br>
            <br></br>
            Stay tuned for updates as we continue to enhance the Degree Guide
            with additional resources, including career pathways, alumni
            testimonials, and profiles of recent research projects. Whether
            you`&apos;re just beginning your academic journey or seeking to
            further your expertise in East Asian cultures and languages, our
            Degree Guide is your roadmap to success. Watch this space for more
            updates coming soon!
          </p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default DegreeGuide;
