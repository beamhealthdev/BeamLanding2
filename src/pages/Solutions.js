import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class Solutions extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="solutions-landing-container">
          <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
            <h1>A digital health platform designed for innovation</h1>
            <h2>Built from the ground up for all your clinical needs</h2>
          </AnimationOnScroll>
        </div>
        <div className="solutions-intro-container">
          <AnimationOnScroll className="solutions-intro-item animate__fadeInLeft animate__fastest">
            <div>
              <img src="https://beam-provider-landing.s3.amazonaws.com/quality-icon.png" />
              <h2>Raise Telehealth Standards</h2>
            </div>
            <p>Choppy video and audio that interrupt or kill conversations calls for a solution that is reliable.</p>
          </AnimationOnScroll>
          <AnimationOnScroll className="solutions-intro-item animate__fadeInUp animate__fastest">
            <div>
              <img src="https://beam-provider-landing.s3.amazonaws.com/scalability-icon.png" />
              <h2>Built to Scale</h2>
            </div>
            <p>Beam is a platform that adapts to your needs - whether you're a private clinic or a large enterprise.</p>
          </AnimationOnScroll>
          <AnimationOnScroll className="solutions-intro-item animate__fadeInRight animate__fastest">
            <div>
              <img src="https://beam-provider-landing.s3.amazonaws.com/smartphone-icon.png" />
              <h2>Patient Friendly Billing</h2>
            </div>
            <p>Give your patients more payment options, less hassle, and peace of mind.</p>
          </AnimationOnScroll>
        </div>
        <div className="solutions-feature-container">
          <div className="solutions-feature">
            <div>
              <AnimationOnScroll animateIn="rotate_it_right" animateOnce={true}>
                <img src="https://beam-provider-landing.s3.amazonaws.com/group-call-screen.png" />
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <h2>Smart Group Sessions</h2>
              <h4>Take full control of a virtual group session - just as you would in person.</h4>
              <p>
                <span>Connection Quality Assurance</span><br/>
                See your patient's internet connection strength in real-time.
              </p>
              <p>
                <span>Direct the Flow</span><br/>
                Use individual video and audio controls to ensure each patient has their chance to participate.
              </p>
              <p>
                <span>Picture in Picture Mode</span><br/>
                Keep focus on your patients. Pop out of video calls to look up information or take notes while staying visually connected.
              </p>
              <p>
                <span>Maximize Touchpoints</span><br/>
                Get patients engaged from the start with a custom waiting room. Provide your own content or get help from one of our experts.
              </p>
              <hr/>
              <h4>Ask us about all our telehealth features</h4>
              <a className="cta-button-lg" href="#schedule-demo">Schedule a Demo</a>
            </AnimationOnScroll>
          </div>
          <div className="solutions-feature">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <img src="https://beam.health/wp-content/uploads/2021/11/Image-133.png" />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <h2>Simplify Practice Management</h2>
              <h4>Elevate your practice with digital infrastructure designed to support seamless growth.</h4>
              <p>
                <span>Optimize Your Revenue</span><br/>
                Grow your practice with digital insights from Beam. Unlock new KPIs such as retention rates and new patient transaction values.</p>
              <p>
                <span>Delegate Intelligently</span><br/>
                Use Beam to share management roles responsibly. Control levels of employee access on our platform for comprehensive security and streamlined operations.</p>
              <p>
                <span>Share Documents Securely</span><br/>
                Make your patient a partner-in-care. Instantly send test results through our HIPAA-compliant channels.</p>
              <p>
                <span>Connect with your EHR</span><br/>
                Integrate with your EHR seamlessly and sync your patient data and notes.</p>
              <hr/>
              <h4>Find out how much you can make with Beam</h4>
              <div className="cta-button-lg">See Your Savings</div>
            </AnimationOnScroll>
          </div>
          <div className="solutions-feature">
            <div>
              <AnimationOnScroll animateIn="rotate_it_left" animateOnce={true}>
                <img src="https://beam.health/wp-content/uploads/2021/11/Image-131.png" />
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <h2>Expedite Administrative Work</h2>
              <h4>Upgrade your patient intake system and collect the info you need before they ever set foot in your office.</h4>
              <p>
                <span>Collect Intake Data</span><br/>
                Provide your patients with a simple intake form so you have all their information before starting.</p>
              <p>
                <span>Never lose a payment to collections</span><br/>
                Collect and verify payment information before starting.</p>
              <p>
                <span>Flexible Payment Structures</span><br/>
                Recurring billing that allows you to set up payment plans, subscriptions, and more.</p>
            </AnimationOnScroll>
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

export default Solutions;
