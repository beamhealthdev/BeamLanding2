import './Styles/About.css';
import Scroll from './Component/scrollSlider'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class About extends React.Component {

  state = {
  }

  render() {

      return (
        <div>
          <Navbar />
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>The Need for Virtual Care</h1>
              <h2>Despite digital healthcare offerings growing faster than the rest of the economy, only about <span>15%</span> of healthcare happens virtually today.</h2>
            </AnimationOnScroll>
            <AnimationOnScroll className="solutions-landing-bottom animate__fadeInUp animate__fastest">
              <h4>A convoluted payer framework, a byzantine healthcare system, and a lack of companies that marry clinical expertise with technology are constraining the impact of telehealth.</h4>
              <hr/>
              <h2>There is enormous room for growth and improvement in virtual care.</h2>
              <h4>Beam removes the barriers to telemedicine and helps more doctors scale their clinics, expand patient access to care, improve health outcomes, and reshape healthcare for the benefit of all- providers, patients, employers, and enterprises.</h4>
            </AnimationOnScroll>
          </div>
          <h1 style={{textAlign:'center', fontWeight:600}}>Our Team</h1>
          <div className='team-container'>
            <div class="profile-card">
              <header>
                <img src="https://beam.health/wp-content/uploads/2020/10/Sas-1.jpg" />
                <h1>Sas Ponnapalli</h1>
                <h2>CEO / Co-Founder</h2>
              </header>
              <div class="profile-bio">
                <h6>Healthcare obsessed serial entrepreneur.</h6>
                <p>Virtual healthcare isn't a fad for Sas - it's his passion. Sas proposed a telemedicine mobile app as his capstone project way back during his final year at the University of Illinois. From there, Sas went on to become the founding CTO of PlushCare, a vertically integrated telemedicine practice that treats millions of patients in all 50 states. After learning the fundamentals of scaling a singular clinic, Sas decided to co-create Beam and bring virtual care to the masses.</p>
              </div>
              <div class="profile-social-links">
                <i className='fab fa-linkedin'></i>
              </div>
            </div>
            <div class="profile-card">
              <header>
                <img src="https://beam.health/wp-content/uploads/2020/11/Ranga.jpg" />
                <h1>Ranga Jayawardena</h1>
                <h2>COO / Co-Founder</h2>
              </header>
              <div class="profile-bio">
                <h6>Cross-industry growth expertise.</h6>
                <p>Ranga has a foundation of business experience across several fields. His previous lives include roles as an award-winning National Sales Trainer at Bristol Myers Squibb, Enterprise Procurement Officer for healthcare data, and Ultra-High Net Worth Private Banker at J.P. Morgan. Ranga brings the spirit of a hustler to Beam.</p>
              </div>
              <div class="profile-social-links">
                <i className='fab fa-linkedin'></i>
              </div>
            </div>
            <div class="profile-card">
              <header>
                <img src="https://beam.health/wp-content/uploads/2020/10/Drew-1.jpg" />
                <h1>Andrew Jayakody</h1>
                <h2>VP of Customer Success</h2>
              </header>
              <div class="profile-bio">
                <h6>Health System insider turned entrepreneur.</h6>
                <p>Drew spent a decade climbing the ladder of healthcare management at the Mount Sinai Health System in New York City. After managing practices in one of the nation’s top health systems (including during the COVID-19 pandemic), Drew brings experience from within the walls of a hospital system to Beam. He leads Beam’s account management team and is dedicated to helping our customers create thriving businesses.</p>
              </div>
              <div class="profile-social-links">
                <i className='fab fa-linkedin'></i>
              </div>
            </div>  
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className='section-header' id="schedule-demo">Schedule a Demo</div>
            <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
          </AnimationOnScroll>
          <Footer />
        </div>
      );
  }
}

export default About;
