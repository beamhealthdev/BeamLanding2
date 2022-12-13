import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class API extends React.Component {

  state = {
  }
  
  componentDidMount(){
  }

  render() {
    const meta = {
      title: 'Beam Health API',
      description: 'Healthcare API built with developers in mind. Leverage our telehealth, payment processing, and scheduling features to build or enhance your own solution.',
      canonical: 'http://beam.health/api',
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
        <div className='api-parent-container'>
          <div className="api-main-container">
            <div>
              <h1>Care more completely with Beam Health's <span style={{whiteSpace:'nowrap'}}>powerful API</span></h1>
              <h4>Leverage our advanced suite of telehealth, payment processing and scheduling tools to build or enhance your own solution, without sacrificing your brand.</h4>
              <div style={{marginTop:'20px'}}>
                <a className='cta-button-lg' href="https://docs.beam.health" target="_blank">API Docs</a>
                <a className='cta-button-lg-alt' href='#schedule-demo'>Book Demo</a>
              </div>
            </div>
            <div>
              <img src="https://beam-provider-landing.s3.amazonaws.com/api_desktop.png" />
            </div>
          </div>
          <div className='landing-feature-container'>
            <h2>Access Beam Health's <span style={{whiteSpace:'nowrap'}}>Complete API</span></h2>
            <div className='landing-feature-item splash_2' style={{paddingTop:'30px'}}>
              <div>
                <div className="bullet-point-container">
                  <div>Build a custom solution on top of Beam's telehealth, payment processing, and scheduling feature set</div>
                  <div>Connect Beam with your existing tech stack to improve workflows and client experience</div>
                  <div>All of Beam's world-class features are available via the API for both desktop and mobile solutions</div>
                </div>
                <div className="mobile-only">
                  <img src='https://beam-provider-landing.s3.amazonaws.com/tripe_ui_desktop.png' />
                </div>
                <h2 style={{paddingTop:"100px", paddingBottom:"0px"}}>Everything you need to rapidly build and deploy your <span style={{whiteSpace:'nowrap'}}>custom solution</span></h2>
                <div className="bullet-point-container">
                  <div>API includes full documentation, sample requests and responses</div>
                  <div>Leverage our developer support during your build, including training videos, dedicated Slack channel, and live 1-on-1 support</div>
                  <div>API keys provided same day so you can start building immediately</div>
                </div>
              </div>
              <div className="left-pad">
                <img src='https://beam-provider-landing.s3.amazonaws.com/tripe_ui_desktop.png' />
              </div>
            </div>
            <div className='landing-feature-item'>
              <div className="right-pad">
                <img src='https://beam-provider-landing.s3.amazonaws.com/desktop_ui_sample.png' style={{marginLeft:'-65px'}} />
              </div>
              <div>
                <h2><span>Enterprise Businesses</span><br/>Seamlessly integrate in <span style={{whiteSpace:'nowrap'}}>no time</span></h2>
                <div className="bullet-point-container">
                  <div>A clean out of the box solution that will save you development time</div>
                  <div>Leverage all our features to create a unified client experience</div>
                  <div>No limits on the number of clients or team members that can be added, and no storage limits for your account</div>
                </div>  
              </div>
            </div>
            <div className='landing-feature-item'>
              <div>
                <h2><span>Digital Health Startups</span><br/>A flexible API that centers around customizability</h2>
                <div className="bullet-point-container">
                  <div>With our white labeled Telehealth API functionality, you can start seeing customers right away</div>
                  <div>Say goodbye to emailing paperwork back and forth. Leverage our Intake API to provide patients with a clean onboarding experience</div>
                </div>  
              </div>
              <div className="left-pad">
                <img src='https://beam-provider-landing.s3.amazonaws.com/code_ui_sample.png' />
              </div>
            </div>
          </div>
          <div className="api-bottom-container">With Beam Health's API, you get the exact API, feature set, and documentation our developers use internally to create the industry's leading digital health platform.</div>
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

export default API;
