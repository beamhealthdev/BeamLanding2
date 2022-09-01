import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {BrowserRouter, Link} from "react-router-dom";
import 'animate.css';

class Home extends React.Component {

  state = {
    testimonialStep:1
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <div>
        <AnimationOnScroll className="home-container animate__fadeIn">
          <Navbar {...this.props} />
          <div className='ColorGradientAnimation'></div>
          <AnimationOnScroll className='landing-page-container animate__fadeIn animate__fastest'>
            <div>
              <h1>Telehealth Engineered For Reliability</h1>
              <h4>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</h4>
              <a className='cta-button-lg-alt' href='https://beam.health/solutions'>Learn More</a>
              <a className='cta-button-lg' href="#schedule-demo">Schedule Demo</a>
            </div>
            <div>
              <img src='https://beam-provider-landing.s3.amazonaws.com/beam_dashboard_desktop.png' />
              <img src='https://beam-provider-landing.s3.amazonaws.com/beam_login_mobile.png' />
            </div>
          </AnimationOnScroll>
          <div className='landing-bottom-container'>
            <div className='brand-logo-container'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Comcast_NBCUniversal_logo.svg" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png"  />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png"  />
              <br/>
              <img src="https://www.freelogovectors.net/svg08/techstars-logo-freelogovectors.net_.svg" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Plug_and_Play_Logo_HR.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_liftlabs.png" />
            </div>
          </div>
          <div className='landing-feature-container'>
            <div className='landing-feature-item'>
              <div className='modular-img-container'>
                <div>
                  <AnimationOnScroll animateIn='animate__fadeIn animate__rotate1' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/landing_module_img_3.png' />
                  </AnimationOnScroll>
                </div>
                <div>
                  <AnimationOnScroll animateIn='animate__fadeIn animate__rotate2' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/landing_module_img_1.png' />
                  </AnimationOnScroll>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/landing_module_img_2.png' />
                </div>
              </div>
              <div>
                <h1>Customizable Workflows</h1>
                <h4>No workflow in Beam is set in stone. You can easily craft a better experience from telehealth, to onboarding, to online chat, to payment collection.</h4>
              </div>
            </div>
            <div className='landing-feature-item'>
              <div>
                <h1>Powerful, all-in-one telehealth solution</h1>
                <h4>With custom digital waiting rooms, group video, note-taking, and more, our feature-rich telehealth has everything you need to provide great care to your patients.</h4>
              </div>
              <AnimationOnScroll animateIn='animate__fadeIn' className='landing-second-feature-img-container' animateOnce={true}>
                <img src='https://beam-provider-landing.s3.amazonaws.com/group-call-screen.png' />
              </AnimationOnScroll>
            </div>
            <div className='landing-feature-item'>
              <div className='landing-third-feature-img-container'>
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/beam-dashboard-schedule-1.png' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInLeft' delay={2} className='slide-in' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/beam-dashboard-schedule-2.png' />
                </AnimationOnScroll>
              </div>
              <div>
                <h1>Intuitive Scheduling</h1>
                <h4>No shows cost money. With Beam, you can now send custom reminders to a patient's email before their scheduled appointment.</h4>
              </div>
            </div>
          </div>
          <div className='testimonial-container'>
            <div>
              <i className='fas fa-caret-left' onClick={() => this.setState({testimonialStep:!this.state.testimonialStep})}></i>
            </div>
            <div>
              {this.state.testimonialStep==true && 
              <>
              <div className='quote-container'>
                “Beam's mission to utilize patient and provider feedback allows them to provide a powerhouse full of opportunities. By understanding our needs and consistently innovating, they ensure any practice can be at the top of their game!"
              </div>
              <div className='quote-attr'>
                • Novia Castro - Office Manager at Access-A-Doc
              </div>
              </>
              }
              {this.state.testimonialStep==false && 
              <>
              <div className='quote-container'>
                “Beam has been a wonderful addition to our EMR, especially with taking copays on the site and not having to worry about collecting  them later! Our patients are loving it as well since they don't have to leave home or work."
              </div>
              <div className='quote-attr'>
                • Dr. Robert Strayhan - Serendipity Wellness
              </div>
              </>
              }
            </div>
            <div>
              <i className='fas fa-caret-right' onClick={() => this.setState({testimonialStep:!this.state.testimonialStep})}></i>
            </div>
          </div>
          <div className='demo-container' id="schedule-demo">
            <h1>Schedule a Demo</h1>
            <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{height: "756px", border: "none"}}></iframe>
          </div>
        </AnimationOnScroll>
        <Footer />
      </div>
    );
  }
}

export default Home;
