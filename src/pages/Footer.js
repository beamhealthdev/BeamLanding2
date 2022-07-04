import Style from './Styles/Footer.module.css'
import { Outlet, Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
   <div className='footer-container'>
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
      <div>Get in Touch</div>
      <div className='cta-button'>Request a Demo</div>
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
  );
}

export default Footer;
