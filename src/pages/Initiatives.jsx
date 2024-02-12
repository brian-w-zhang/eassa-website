import dragon_bg from '../landscapes/dragon background.jpg';
import landscape from '../landscapes/bamboo2.jpg';
import line from '../assets/linecool.png';
import { useEffect, useRef } from 'react';

function Initiatives() {
  const initiativeSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const initiativeSection = initiativeSectionRef.current;
      if (isElementInViewport(initiativeSection, 0.7)) {
        initiativeSection.classList.add('animated');
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
        <h1 className="topic-title">Initiatives</h1>
        <p className="landscape-text">
          Arashiyama Bamboo Forest | Kyoto, Japan
        </p>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={initiativeSectionRef}>
          <p className="topic-main-title">Academic Initiatives</p>
          <p className="topic-main-text">
            We&apos;re excited to announce that East Asian Studies at McGill is
            currently working on some groundbreaking academic initiatives that
            will further enhance our students&apos; learning experiences and
            broaden their perspectives on the rich cultures and histories of
            Asia. While details are still being finalized, we can&apos;t wait to
            unveil these initiatives, which will offer unique opportunities for
            interdisciplinary exploration, experiential learning, and
            cross-cultural engagement. Stay tuned for updates as we prepare to
            launch these exciting new endeavors that will undoubtedly enrich our
            academic community and empower our students to become global leaders
            in East Asian studies and beyond.
          </p>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default Initiatives;
