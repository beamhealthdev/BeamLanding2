import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class Resources extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="resources-landing-container">
          <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
            <h1>Resources</h1>
            <h2>Dive deeper and learn about the role Beam plays in reshaping the digital healthcare sphere.</h2>
          </AnimationOnScroll>
        </div>
        <div className="resources-container">
          <AnimationOnScroll className="cards-list animate__fadeInUp animate__fastest">
            <a href='http://localhost:3000/blog' className="card 1">
              <div className="card_image"> <img src="https://cdn.pixabay.com/photo/2016/07/16/22/51/abstract-1522884_1280.jpg" /> </div>
              <div className="card_title">
                <p>Blog</p>
              </div>
            </a>
            <a href='http://localhost:3000/case_studies' className="card 1">
              <div className="card_image"> <img src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg" /> </div>
              <div className="card_title">
                <p>Case Studies</p>
              </div>
            </a>
            <a className="card 1" href="#faq-section">
              <div className="card_image"> <img src="https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_1280.jpg" /> </div>
              <div className="card_title">
                <p>FAQ</p>
              </div>
            </a>
          </AnimationOnScroll>
        </div>
        <div style={{textAlign:'center', paddingTop:'80px'}} id="faq-section">
          <h1 style={{fontWeight:600}}>Frequenty Asked Questions</h1>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">What is Beam?</div>
            <div className="faq-answer">Beam is the first digital operations platform built for doctors. Beam's suite of digital services allows healthcare providers to effortlessly integrate virtual care into their practice.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">How do I sign up for Beam?</div>
            <div className="faq-answer">If you're a healthcare provider, you can get started with Beam by creating a free account in just 90 seconds! 95% of providers are able to set-up a Beam account without any help whatsoever. You can also request a personalized demo today! If you're a patient, you can have Beam sent to your physician by emailing us at info@beamhealthgroup.com. Note that there is no app download requirement for patients!</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">As a provider, why should I use Beam?</div>
            <div className="faq-answer">Beam allows providers the rare opportunity to increase profitability while increasing patient satisfaction. While other platforms offer just telehealth, Beam supplies a HIPAA compliant, HD telehealth platform and empowers providers with a vast array of digital tools that improve practices; inclindg billing, scheduling, marketing, and customer service</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">How much will Beam charge me?</div>
            <div className="faq-answer">Beam offers custom pricing solutions based on each practice's needs. For more information, set up a demo today!</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Will integrating telemedicine into my practice be an intensive process?</div>
            <div className="faq-answer">Not with Beam. Our platform allows providers to set up an account on their own in 90 seconds, giving access to not only telemedicine but an entire digital operations platform designed for doctors. If desired, Beam's team can consult you on how to begin offering telemedicine services.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">What if I am already too busy as it is?</div>
            <div className="faq-answer">Beam doesn't only provide HIPAA compliant, HD telemedicine services, but it offers a suite of digital tools that help providers run their practices more efficiently. Offering services from scheduling to billing to marketing, Beam helps busy practices become better at not only providing care to their patients but improving practice workflows, allowing them to increase the patient workload.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">When would I conduct telemedicine visits?</div>
            <div className="faq-answer">Through the Beam platform you have complete autonomy to decide whether to fully integrate in-person and telemedicine hours, carve out time during normal business hours exclusively for telemedicine or conduct telemedicine exclusively after-hours or on weekends.</div>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className='section-header' id="schedule-demo">Book Demo</div>
          <iframe src="https://meetings.hubspot.com/beam/platform-demo?embed=true" width="100%" style={{height: "756px", border: "none"}}></iframe>
        </AnimationOnScroll>
        <Footer />
      </div>
    );
  }
}

export default Resources;
