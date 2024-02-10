import dragon_bg from '../landscapes/dragon background.jpg';
import landscape1 from '../landscapes/landscape 1.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function Events() {
  const eventSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const eventSection = eventSectionRef.current;
      if (isElementInViewport(eventSection, 0.7)) {
        eventSection.classList.add('animated');
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
        <h1 className="topic-title">Events</h1>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={eventSectionRef}>
          <p className="topic-main-title">Upcoming Events</p>
          <p className="topic-main-text">
            Stay tuned for exciting events hosted by the East Asian Studies
            Student Association at McGill University! We&apos;re currently
            finalizing details, so please check back soon for more information.
            In the meantime, follow us on Instagram{' '}
            <span className="insta">
              {' '}
              <a
                className="insta-link"
                href="https://www.instagram.com/eassa_mcgill/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @eassa_mcgill
              </a>
            </span>{' '}
            for the latest updates and glimpses into our activities. Thank you
            for your patience, and we look forward to welcoming you to our
            future events!
          </p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default Events;
