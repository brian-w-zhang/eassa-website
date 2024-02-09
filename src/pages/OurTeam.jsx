import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/landscape 1.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function OurTeam() {
  const teamSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const teamSection = teamSectionRef.current;
      if (isElementInViewport(teamSection, 0.7)) {
        teamSection.classList.add('animated');
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
        <img src={landscape1} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Our Team</h1>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={teamSectionRef}>
          <p className="topic-main-title">Who We Are</p>
          <p className="topic-main-text">
            We&apos;re a team of undergraduate East Asian Studies students who
            work together on various projects with the goal of bringing together
            and promoting the EAS department. We strive to provide EAS students
            with the opportunities they deserve, share information from outside
            the McGill bubble to expand horizons, and create a welcoming and
            inspiring environment for the EAS student body to thrive. We&apos;re
            always welcoming of feedback on our work, and wish for people to
            feel welcome with being active within the department!
          </p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default OurTeam;