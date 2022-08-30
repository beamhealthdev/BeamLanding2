import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class API extends React.Component {

  state = {
  }

  render() {

      return (
        <div>
          <div className='api-parent-container'>
            <Navbar />
            <div className="api-main-container">
              <div>
                <h1>A lightweight API to kickstart your <span style={{whiteSpace:'nowrap'}}>Clinical Platform</span></h1>
                <h4>Healthcare API built with developers in mind. Leverage our telehealth, payment processing, and scheduling features to build or enhance your own solution.</h4>
                <a className='cta-button-lg' href="https://docs.beam.health" target="_blank">View Documentation</a>
              </div>
              <div>
                <img src="https://beam-provider-landing.s3.amazonaws.com/api_marketing_screen_1.png" />
              </div>
            </div>
            <div className='landing-feature-container'>
              <div className='landing-feature-item'>
                <div>
                  <h2>Access Beam Health's <span style={{whiteSpace:'nowrap'}}>Complete API</span></h2>
                  <ul>
                    <li>Build a custom solution on top of Beam's telehealth, payment process, and scheduling feature set</li>
                    <li>Connect Beam with your existing tech stack to improve workflows and client experience</li>
                    <li>All of Beam's world-class features are available via the API for both desktop and mobile solutions</li>
                  </ul>  
                </div>
                <div className="left-pad">
                  <img src='https://beam-provider-landing.s3.amazonaws.com/dashboard_marketing_screen_1.png' />
                </div>
              </div>
              <div className='landing-feature-item'>
                <div className="right-pad">
                  <img src='https://beam-provider-landing.s3.amazonaws.com/api_marketing_screen_2.png' />
                </div>
                <div>
                  <h2>Everything you need to rapidly build and deploy your <span style={{whiteSpace:'nowrap'}}>custom solution</span></h2>
                  <ul>
                    <li>API includes full documentation, sample requests and responses</li>
                    <li>Leverage our developer support during your build, including training videos, dedicated Slack channel, and live 1-on-1 support</li>
                    <li>API keys provided same day so you can start building immediately</li>
                  </ul>  
                </div>
              </div>
              <div className='landing-feature-item'>
                <div>
                  <h2>Enterprise Businesses: Seamlessly integrate in <span style={{whiteSpace:'nowrap'}}>no time</span></h2>
                  <ul>
                    <li>A clean out of the box solution that will save you development time</li>
                    <li>Leverage all our features to create a unified client experience</li>
                    <li>No limits on the number of clients or team members that can be added, and no storage limits for your account</li>
                  </ul>  
                </div>
                <div className="left-pad">
                  <img src='https://beam-provider-landing.s3.amazonaws.com/invoicing_marketing_screen_1.png' />
                </div>
              </div>
              <div className='landing-feature-item'>
                <div className="right-pad">
                  <img src='https://beam-provider-landing.s3.amazonaws.com/patients_marketing_screen_1.png' />
                </div>
                <div>
                  <h2>Digital Health Startups: A flexible API that centers around customizability</h2>
                  <ul>
                    <li>With our white labeled Telehealth API functionality, you can start seeing customers right away</li>
                    <li>Say goodbye to emailing paperwork back and forth. Leverage our Intake API to provide patients with a clean onboarding experience</li>
                  </ul>  
                </div>
              </div>
            </div>
            <div className="api-bottom-container">With Beam Health's API, you get the exact API, feature set, and documentation our developers use internally.</div>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <div className='demo-container' id="schedule-demo">
                <h1>Schedule a Demo</h1>
                <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
              </div>
            </AnimationOnScroll>
          </div>
          <Footer />
        </div>
      );
  }
}

export default API;
