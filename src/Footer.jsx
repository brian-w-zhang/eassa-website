import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import discord from './assets/discord.png';
import dragon_moving from './assets/dragon moving.mp4';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="dragon-vid-container">
          <video
            className="dragon-video"
            src={dragon_moving}
            autoPlay
            loop
            muted
          />
        </div>

        <div className="content-container">
          <div className="footer-info">
            <p className="footer-text">
              East Asian Studies Student Association
            </p>
            <a href="mailto: eassamcgill@gmail.com" className="footer-mail">
              eassamcgill@gmail.com
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/eassa_mcgill/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instagram} className="instagram-icon" />
            </a>
            <a
              href="https://www.facebook.com/eassamcgill/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} className="facebook-icon" />
            </a>
            <img src={discord} className="discord-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
