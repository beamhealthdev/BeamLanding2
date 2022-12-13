import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class About extends React.Component {

  state = {
  }

  render() {
    const meta = {
      title: 'Beam Health - About Us',
      description: 'The team that built Beam',
      canonical: 'http://beam.health/about',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }
    return (
      <div>
        <DocumentMeta {...meta} />
        <div className='about-parent-container'>
          {/* <div className="about-main-container aboutPageAnimation">
            <img src="https://beam-provider-landing.s3.amazonaws.com/group-call-screen.png" className="about-landing-img" />
            <img src="https://beam-provider-landing.s3.amazonaws.com/final/dashboard_marketing_screen_2.png" className="about-landing-img-2" />
            <AnimationOnScroll className="about-landing-top animate__fadeInDown animate__fastest">
              
            </AnimationOnScroll>
          </div> */}
          <div className="about-content">
            <h1>It's time to give virtual healthcare a checkup.</h1>
            <div>Whether you're a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, delivering an experience-driven digital health solution is more important than ever.</div>
            <div>Up until now you've had <strong>two choices</strong> - either try to piece together disparate software platforms into something resembling a complete offering, or build your own solution from scratch.</div>
            <div> Neither option offers the best of all worlds - <strong>a holistic approach to telehealth that is </strong></div>
            <div className="about-points">
              <div><i className="fas fa-check-circle"></i> Simple to use</div>
              <div><i className="fas fa-check-circle"></i> Endlessly customizable</div>
              <div><i className="fas fa-check-circle"></i> Puts your brand front and center</div>
              <div><i className="fas fa-check-circle"></i> Gives patients an enjoyable experience that keeps them coming back.</div>
            </div>
            <div>Beam exists to remove all barriers to effective virtual care with a fast, reliable and easy to implement solution. Our platform is built to help clinics scale, expand patient access, improve health outcomes and reshape healthcare for the benefit of all - providers, patients, employers, and enterprises.</div>
          </div>
          <div className="about-options">
            <a className="cta-button-lg" href='https://beam.health/solutions'>Our Solutions <i className="fas fa-arrow-right"></i></a>
            <a className="cta-button-lg-alt" href='https://beam.health/api'>Beam API <i className="fas fa-arrow-right"></i></a>
          </div>
          {/* <h1 style={{textAlign:'center', fontWeight:600, margin:"60px 0"}}>Our Team</h1>
          <div className="team-container">
            <AnimationOnScroll animateIn='animate__fadeInLeft' className="team-user-container" animateOnce={true}>
              <div>
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/sas.jpeg" />
                </div>
                <div>
                  <h2>Sas Ponnapalli</h2>
                  <h4>CEO / Co-Founder</h4>
                </div>
              </div>
              <div>
                <p>Virtual healthcare isn't a fad for Sas - it's his passion. Sas proposed a telemedicine mobile app as his capstone project way back during his final year at the University of Illinois. From there, Sas went on to become the founding CTO of PlushCare, a vertically integrated telemedicine practice that treats millions of patients in all 50 states. After learning the fundamentals of scaling a singular clinic, Sas decided to co-create Beam and bring virtual care to the masses.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className="team-user-container" animateOnce={true}>
              <div>
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/Drew.jpeg" />
                </div>
                <div>
                  <h2>Andrew Jayakody</h2>
                  <h4>VP of Customer Success</h4>
                </div>
              </div>
              <div>
                <p>Drew spent a decade climbing the ladder of healthcare management at the Mount Sinai Health System in New York City. After managing practices in one of the nation's top health systems (including during the COVID-19 pandemic), Drew brings experience from within the walls of a hospital system to Beam. He leads Beam's account management team and is dedicated to helping our customers create thriving businesses.</p>
              </div>
            </AnimationOnScroll>
          </div> */}
          
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className='demo-container' id="schedule-demo">
              <h1>Book Demo</h1>
              <iframe src="https://meetings.hubspot.com/beam/platform-demo?embed=true" width="100%" style={{height: "756px", border: "none"}}></iframe>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    );
  }
}

export default About;
