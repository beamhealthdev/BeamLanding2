import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class Solutions extends React.Component {

  state = {
    selectedFeature: 1
  }

  render() {
    return (
      <div>
        <div className="solutions-container">
          <Navbar />
          <div className="solutions-landing-container">
            <h1>A digital health platform designed for innovation</h1>
            <h4>Built from the ground up for all your clinical needs</h4>
            <div className="solutions-landing-item-container">
              <div className="solutions-landing-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-landing-image-1.png" />
                <h2>Raise Telehealth Standards</h2>
                <h4>Choppy video and audio that hinder conversations call for reliable solutions.</h4>
              </div>
              <div className="solutions-landing-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-landing-image-2.png" />
                <h2>Built to Scale</h2>
                <h4>A platform that adapts to your needs - from private clinics to large enterprise.</h4>
              </div>
              <div className="solutions-landing-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-landing-image-3.png" />
                <h2>Patient Friendly Billing</h2>
                <h4>Give your patients more payment options and peace of mind.</h4>
              </div>
            </div>
          </div>
          <div className="grid-feature-container-solutions">
            <h1>Smart Group Sessions</h1>
            <h4>Take full control of a virtual group session - just as you would in person.</h4>
            <div className="grid-feature-item-container">
              <div className="grid-feature-item"></div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/group_video.png" style={{borderRadius:0}} />
                <h2>Connection Quality Assurance</h2>
                <h4>See your patient's internet connection strength in real-time.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/schedule.png" style={{borderRadius:0}} />
                <h2>Picture in <br/>Picture Mode</h2>
                <h4>Keep focus on your patients. Pop out of video calls to look up information or take notes while staying visually connected.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/wr_ad.png" style={{borderRadius:0}} />
                <h2>Maximize <br/>Touchpoints</h2>
                <h4>Get patients engaged from the start with a custom waiting room. Provide your own content or get help from one of our experts.</h4>
              </div>
              <div className="grid-feature-item"></div>
            </div>
            <a href="#schedule-demo" style={{textDecoration:'none'}}>
              <div className="cta-button" href="#schedule-demo">Schedule Demo</div>
            </a>
          </div>
          <div className="accordion-feature-container">
            <h1>Simplify Practice Management</h1>
            <h4>Elevate your practice with digital infrastructure designed to support seamless growth.</h4>
            <div className="accordion-feature-item-container">
              <div>
                <div className="accordion-feature-item">
                  <h2 onClick={() => this.setState({selectedFeature:1})}>Optimize Your Revenue</h2>
                  {this.state.selectedFeature==1 &&
                  <h4>Grow your practice with digital insights from Beam. Unlock new KPIs such as retention rates and new patient transaction values.</h4>
                  }
                </div>
                <div className="accordion-feature-item">
                  <h2 onClick={() => this.setState({selectedFeature:2})}>Delegate Intelligently</h2>
                  {this.state.selectedFeature==2 &&
                  <h4>Use Beam to share management roles responsibly. Control levels of employee access on our platform for comprehensive security and streamlined operations.</h4>
                  }
                </div>
                <div className="accordion-feature-item">
                  <h2 onClick={() => this.setState({selectedFeature:3})}>Connect with your EHR</h2>
                  {this.state.selectedFeature==3 &&
                  <h4>Integrate with your EHR seamlessly and sync your patient data and notes.</h4>
                  }
                </div>
              </div>
              <div>
                <div className="accordion-feature-graphic">
                  <h2>$20,000</h2>
                  <h4>The average loss in revenue per year due to payment collections process. Beam gives that back to you.</h4>
                </div>
              </div>
            </div>
            <a className="cta-button" style={{margin:'auto'}} href="https://providers.beam.health/revenue-calculator/" target="_blank">Calculate Your Savings</a>
          </div>
          <div className="grid-feature-container-solutions">
            <h1>Expedite Administrative Work</h1>
            <h4>Upgrade your patient intake system and collect the info you need before they ever set foot in your office.</h4>
            <div className="grid-feature-item-container">
              <div className="grid-feature-item"></div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-bottom-image-1.png" style={{width:'120px'}} />
                <h2>Collect Intake Data</h2>
                <h4>Provide your patients with a simple intake form so you have all their information before starting.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-bottom-image-2.png" style={{width:'120px'}} />
                <h2>Never lose a payment to collections</h2>
                <h4>Collect and verify payment information before starting.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/solutions-bottom-image-3.png" style={{width:'120px'}} />
                <h2>Flexible Payment Structures</h2>
                <h4>Recurring billing that allows you to set up payment plans, subscriptions, and more.</h4>
              </div>
              <div className="grid-feature-item"></div>
            </div>
          </div>
          <div className='demo-container' style={{marginTop:'60px'}} id="schedule-demo">
            <h1>Schedule a Demo</h1>
            <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Solutions;
