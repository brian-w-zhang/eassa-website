import { useEffect, useRef } from 'react';
import home_video from './assets/lanterns.mp4';
import mcgill from './assets/mcgill.png';
import line from './assets/orange_gradient.png';
import reverse_line from './assets/reverse_gradient.png';
import dragon_bg from './landscapes/dragon background.jpg';

function Home() {
  const aboutSectionRef = useRef(null);
  const landSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutSectionRef.current;
      const landSection = landSectionRef.current;

      if (isElementInViewport(aboutSection, 0.8)) {
        aboutSection.classList.add('animated');
      }

      if (isElementInViewport(landSection, 0.8)) {
        landSection.classList.add('animated');
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
      <div className="main">
        <div className="dragon-bg-container">
          <img className="dragon-background" src={dragon_bg} />
        </div>

        <div className="video-container">
          <div className="overlay"></div>
          <video className="home-video" src={home_video} autoPlay loop muted />
          <div className="home-text">
            <h1 className="eassa-text">East Asian Studies</h1>
            <h1 className="eassa-text">Student Association</h1>
            <img className="mcgill-logo" src={mcgill} alt="mcgill logo" />
          </div>
        </div>

        <div className="border-line-container">
          <img className="border-line" src={line} alt="border line" />
        </div>

        <div className="about-us-home">
          <div className="about-section" ref={aboutSectionRef}>
            <p className="about-description">
              McGill University&apos;s East Asian Studies Student Association is
              an undergraduate departmental association under the Faculty of
              Arts.
            </p>
          </div>

          <div className="land-section" ref={landSectionRef}>
            <p className="land-title">Land Acknowledgement</p>
            <p className="land-text">
              EASSA recognizes that McGill University is situated on the unceded
              territory of the Kanien&apos;keha:ka, and is located on land which
              has long served as a site of meeting and exchange amongst
              Indigenous peoples, including the Haudenosaunee and Anishinabeg
              nations. EASSA stands in solidarity with indigenous students here
              at the university.
            </p>
          </div>
        </div>

        <div className="border-line-container">
          <img className="border-line" src={reverse_line} alt="border line" />
        </div>
      </div>
    </>
  );
}
export default Home;
