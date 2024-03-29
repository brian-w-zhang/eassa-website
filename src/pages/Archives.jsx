import dragon_bg from '../landscapes/dragon background.jpg';
import landscape5 from '../landscapes/landscape 3.jpg';
import line from '../assets/linecool.png';
import old_site from '../assets/eassa-old-site.png';
import older_site from '../assets/eassa-older-site-crop.png';
import { useEffect, useRef } from 'react';

function Archives() {
  const firstArchiveSectionRef = useRef(null);
  const secondArchiveSectionRef = useRef(null);
  const textSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const firstArchiveSection = firstArchiveSectionRef.current;
      const secondArchiveSection = secondArchiveSectionRef.current;
      const textSection = textSectionRef.current;

      if (isElementInViewport(textSection, 0.7)) {
        textSection.classList.add('animated');
      }
      if (isElementInViewport(firstArchiveSection, 0.7)) {
        firstArchiveSection.classList.add('animated');
      }
      if (isElementInViewport(secondArchiveSection, 0.5)) {
        secondArchiveSection.classList.add('animated');
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
        <img src={landscape5} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Archives</h1>
        <p className="landscape-text">Wollyubong | Yeongdong, South Korea</p>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="topic-main-container">
        <div className="topic-main-text-section" ref={textSectionRef}>
          <p className="topic-main-title">Our History</p>
          <p className="topic-main-text">
            Explore the EASSA Archive, featuring our past websites: one from
            2008-2014 and another from 2014-2024. Witness the evolution of our
            online presence over the years, from simple layouts to advanced
            multimedia. Look through our digital history and see how we&apos;ve
            grown and adapted over time.
          </p>
        </div>
      </div>

      <div className="archive-grid-container">
        <a
          href="https://eassamcgill.wixsite.com/home"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="archive-site-container1" ref={firstArchiveSectionRef}>
            <div className="site-image-container">
              <img src={old_site} className="site-image" alt="old-site" />
            </div>
            <p className="archive-text">Old Website: 2014-2024</p>
          </div>
        </a>

        <a
          href="https://eassamcgill.wordpress.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div
            className="archive-site-container2"
            ref={secondArchiveSectionRef}
          >
            <div className="site-image-container">
              <img src={older_site} className="site-image" alt="older-site" />
            </div>
            <p className="archive-text">Older Website: 2008-2014</p>
          </div>
        </a>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>
    </>
  );
}
export default Archives;
