import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {BrowserRouter, Link} from "react-router-dom";
import 'animate.css';

class Home extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <AnimationOnScroll className="home-container animate__fadeIn">
          <Navbar {...this.props} />
          <AnimationOnScroll className='landing-page-container animate__fadeIn animate__fastest'>
            <div>
              <h1>Telehealth Engineered For Reliability</h1>
              <h4>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</h4>
              <a className='cta-button-lg-alt'>Learn More</a>
              <a className='cta-button-lg' href="#schedule-demo">Schedule a Demo</a>
            </div>
            <div>
              <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam-landing-image.png' />
            </div>
          </AnimationOnScroll>
          <div className='landing-feature-container'>
            <div className='landing-feature-item'>
              <div className='center'>
                <img src='https://beam-provider-landing.s3.amazonaws.com/final/landing-image-1.png' />
              </div>
              <div>
                <h1>Customizable Workflows</h1>
                <h4>No workflow in Beam is set in stone. You can easily craft a better experience from telehealth, to onboarding, to online chat, to payment collection.</h4>
              </div>
            </div>
            <div className='landing-feature-item'>
              <div>
                <h1>HD, HIPAA-Compliant Telehealth</h1>
                <h4>Reliable video connection that allows patients and providers to connect.</h4>
              </div>
              <div className='center'>
                <img src='https://beam-provider-landing.s3.amazonaws.com/final/landing-image-2.png' />
              </div>
            </div>
            <div className='landing-feature-item'>
              <div className='center'>
                <img src='https://beam-provider-landing.s3.amazonaws.com/final/landing-image-3.png' />
              </div>
              <div>
                <h1>Intuitive Scheduling</h1>
                <h4>No shows cost money. With Beam, you can now send custom reminders to a patient's email before their scheduled appointment.</h4>
              </div>
            </div>
          </div>
          <div className='landing-bottom-container'>
            <div className='quote-container'>
              “Beam's mission to utilize patient and provider feedback allows them to provide a powerhouse full of opportunities. By understanding our needs and consistently innovating, they ensure any practice can be at the top of their game!"
            </div>
            <div className='brand-logo-container'>
              <img src="https://logodownload.org/wp-content/uploads/2020/06/nbc-logo.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png"  />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png"  />
              <br/>
              <img src="https://www.freelogovectors.net/svg08/techstars-logo-freelogovectors.net_.svg" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Plug_and_Play_Logo_HR.png" />
              <img src="https://beam.health/wp-content/uploads/2020/10/Comcast_Lift_Labs.png" />
            </div>
            <div className='demo-container' id="schedule-demo">
              <h1>Schedule a Demo</h1>
              <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{height: "756px", border: "none"}}></iframe>
            </div>
          </div>
        </AnimationOnScroll>
        <Footer />
      </div>
    );
  }
}

export default Home;
