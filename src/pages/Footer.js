import {BrowserRouter, Link} from "react-router-dom";

function Footer() {
  return (
   <div className='footer-container'>
    <div>
      <div className='questions-copy'>
        <h1>Still have questions?</h1>
        <h4>Reach out to our Customer Success team</h4>
        <div>
          <a className='cta-button-lg-alt' href='#schedule-demo' style={{padding:'10px 20px'}}>Schedule Demo</a>
          <div className='call-copy'>Call us at (929) 226-0624</div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam_logo_white.png' />
      </div>
      <div className='links-container'>
        <div>Explore Beam</div>
        <Link to='about'>About Us</Link>
        <Link to='api'>API</Link>
        <Link to='solutions'>Solutions</Link>
        <Link to='case_studies'>Case Studies</Link>
        <Link to='faq'>Frequenty Asked Questions</Link>
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
