import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/china 3.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';
import serena from '../profiles/serena cropped.png';
import rose from '../profiles/rose profile.jpg';
import stella from '../profiles/stella profile.jpeg';
import kit from '../profiles/kit cropped.png';
import carolyn from '../profiles/carolyn profile.png';
import kimberly from '../profiles/kimberly profile.jpg';
import lucy from '../profiles/lucy profile.jpeg';

// const teamMembers = [
//   { name: 'Serena Zhang', photo: serena, position: 'President' },
//   {
//     name: "Rose Ly O'Brien",
//     photo: rose,
//     position: 'VP Academic',
//   },
//   {
//     name: 'Stella Conway',
//     photo: stella,
//     position: 'Vp Internal',
//   },
//   { name: 'Kit Large', photo: kit, position: 'VP Events' },
//   {
//     name: 'Carolyn Liu',
//     photo: carolyn,
//     position: 'VP External',
//   },
//   {
//     name: 'Kimberly Yang',
//     photo: kimberly,
//     position: 'VP Communications',
//   },
//   {
//     name: 'Lucy Kaskie',
//     photo: lucy,
//     position: 'VP Finance',
//   },
// ];

function OurTeam() {
  const firstTeamSectionRef = useRef(null);
  const secondTeamSectionRef = useRef(null);
  const thirdTeamSectionRef = useRef(null);
  const fourthTeamSectionRef = useRef(null);
  const fifthTeamSectionRef = useRef(null);
  const sixthTeamSectionRef = useRef(null);
  const seventhTeamSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const firstTeamSection = firstTeamSectionRef.current;
      const secondTeamSection = secondTeamSectionRef.current;
      const thirdTeamSection = thirdTeamSectionRef.current;
      const fourthTeamSection = fourthTeamSectionRef.current;
      const fifthTeamSection = fifthTeamSectionRef.current;
      const sixthTeamSection = sixthTeamSectionRef.current;
      const seventhTeamSection = seventhTeamSectionRef.current;
      if (isElementInViewport(firstTeamSection, 0.8)) {
        firstTeamSection.classList.add('animated');
      }
      if (isElementInViewport(secondTeamSection, 0.7)) {
        secondTeamSection.classList.add('animated');
      }
      if (isElementInViewport(thirdTeamSection, 0.6)) {
        thirdTeamSection.classList.add('animated');
      }
      if (isElementInViewport(fourthTeamSection, 0.5)) {
        fourthTeamSection.classList.add('animated');
      }
      if (isElementInViewport(fifthTeamSection, 0.8)) {
        fifthTeamSection.classList.add('animated');
      }
      if (isElementInViewport(sixthTeamSection, 0.65)) {
        sixthTeamSection.classList.add('animated');
      }
      if (isElementInViewport(seventhTeamSection, 0.5)) {
        seventhTeamSection.classList.add('animated');
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
        <p className="landscape-text">Wulingyuan | Hunan, China</p>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="team-grid-container1">
        <div className="team-container1" ref={fifthTeamSectionRef}>
          <div className="team-image-container">
            <img src={serena} className="team-image" alt="old-site" />
          </div>
          <p className="team-text">Serena Zhang</p>
          <p className="position">President</p>
        </div>

        <div className="team-container3" ref={sixthTeamSectionRef}>
          <div className="team-image-container">
            <img src={rose} className="team-image" alt="older-site" />
          </div>
          <p className="team-text">Rose Ly O&apos;Brien</p>
          <p className="position">VP Academic</p>
        </div>

        <div className="team-container2" ref={seventhTeamSectionRef}>
          <div className="team-image-container">
            <img src={kimberly} className="team-image" alt="older-site" />
          </div>
          <p className="team-text">Kimberly Yang</p>
          <p className="position">VP Communications</p>
        </div>
      </div>

      <div className="team-grid-container2">
        <div className="team-container1" ref={firstTeamSectionRef}>
          <div className="team-image-container">
            <img src={kit} className="team-image" alt="old-site" />
          </div>
          <p className="team-text">Kit Large</p>
          <p className="position">VP Events</p>
        </div>

        <div className="team-container3" ref={secondTeamSectionRef}>
          <div className="team-image-container">
            <img src={stella} className="team-image" alt="older-site" />
          </div>
          <p className="team-text">Stella Conway</p>
          <p className="position">VP Internal</p>
        </div>

        <div className="team-container3" ref={thirdTeamSectionRef}>
          <div className="team-image-container">
            <img src={carolyn} className="team-image" alt="older-site" />
          </div>
          <p className="team-text">Carolyn Liu</p>
          <p className="position">VP External</p>
        </div>

        <div className="team-container2" ref={fourthTeamSectionRef}>
          <div className="team-image-container">
            <img src={lucy} className="team-image" alt="older-site" />
          </div>
          <p className="team-text">Lucy Kaskie</p>
          <p className="position">VP Finance</p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default OurTeam;
