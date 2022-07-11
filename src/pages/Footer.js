import Style from './Styles/Footer.module.css'
import { Outlet, Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
   <div className='footer-container'>
    <div>
      <div className='questions-copy'>
        <h1>Still have questions?</h1>
        <h4>Reach out to our Customer Success team</h4>
      </div>
    </div>
    <div>
      <div>
        <img src='https://beam.health/wp-content/themes/beam-health/images/logo-white.png' />
      </div>
      <div>
        <div>Explore Beam</div>
        <div>About Us</div>
        <div>Solutions</div>
        <div>Resources</div>
      </div>
      <div>
        <div>Join us on Social Media</div>
        <div>
          <a href="https://www.facebook.com/beamhealthgroup/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/BeamHealth" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/beam.health/" target="_blank">
            <i className="fab fa-instagram-square" style={{fontWeight: 900}}></i>
          </a>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Footer;
