import dragon_bg from '../landscapes/dragon background.jpg';
import landscape5 from '../landscapes/landscape 6.jpg';
import toothless from '../assets/toothless.mp4';
import line from '../assets/linecool.png';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

function ContactUs() {
  const vidSectionRef = useRef(null);
  const formSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const vidSection = vidSectionRef.current;
      const formSection = formSectionRef.current;

      if (isElementInViewport(vidSection, 0.7)) {
        vidSection.classList.add('animated');
      }

      if (isElementInViewport(formSection, 0.5)) {
        formSection.classList.add('animated');
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

  const form = useRef();
  const [showErrorTooltip, setShowErrorTooltip] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form.current);

    // Extract values of required fields
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    // Perform validation
    if (!name || !email || !message) {
      setShowErrorTooltip({
        name: !name,
        email: !email,
        message: !message,
      });
      return;
    }

    // If all required fields are filled, send the email
    emailjs
      .sendForm('service_hta2atv', 'template_j2slhct', form.current, {
        publicKey: 'Ix0GS6u7o0JlZRArc',
      })
      .then(
        () => {
          // Clear user inputs after a message is sent
          form.current.reset();
          console.log('SUCCESS!');
          setPopupMessage('☑ Message sent successfully!');
          setShowPopup(true);
          setShowErrorTooltip({ name: false, email: false, message: false });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  // Automatically hide popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 4700);
      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  return (
    <>
      <div className="dragon-bg-container">
        <img className="dragon-background" src={dragon_bg} />
      </div>
      <div className="white-overlay"></div>

      <div className="topic-container">
        <img src={landscape5} className="pages-image" alt="landscape" />
        <div className="topic-overlay"></div>
        <h1 className="topic-title">Contact Us</h1>
        <p className="landscape-text">
          Inje Secret Garden | Gangwon-do, South Korea
        </p>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      <div className="contact-container">
        <div className="contact-video-container" ref={vidSectionRef}>
          <a
            href="https://www.youtube.com/watch?v=-Yd8qfz15DI"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video
              className="contact-video"
              src={toothless}
              autoPlay
              loop
              muted
            ></video>
          </a>
        </div>

        <div className="form-container" ref={formSectionRef}>
          <form ref={form} onSubmit={sendEmail}>
            <p className="contact-text-name">Name</p>
            <input
              type="text"
              name="user_name"
              placeholder="Enter full name..."
              onFocus={() =>
                setShowErrorTooltip({ ...showErrorTooltip, name: false })
              }
            />
            {/* Tooltip for Name */}
            {showErrorTooltip.name && (
              <div className="tooltip">Please fill out this field</div>
            )}
            <p className="contact-text">Email</p>
            <input
              type="email"
              name="user_email"
              placeholder="Enter email..."
              onFocus={() =>
                setShowErrorTooltip({ ...showErrorTooltip, email: false })
              }
            />
            {/* Tooltip for Email */}
            {showErrorTooltip.email && (
              <div className="tooltip">Please fill out this field</div>
            )}

            <p className="contact-text">Message</p>
            <textarea
              name="message"
              className="message-box"
              placeholder="Enter message..."
              onFocus={() =>
                setShowErrorTooltip({ ...showErrorTooltip, message: false })
              }
            />
            {/* Tooltip for Message */}
            {showErrorTooltip.message && (
              <div className="tooltip">Please fill out this field</div>
            )}
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

      <div className="border-line-container">
        <img className="border-line" src={line} alt="border line" />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">{popupMessage}</div>
        </div>
      )}
    </>
  );
}
export default ContactUs;
