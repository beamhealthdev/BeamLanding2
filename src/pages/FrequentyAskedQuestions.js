import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class FrequentyAskedQuestions extends React.Component {

  state = {
    expandedFAQ:1
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <Navbar />
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Frequently Asked Questions</h1>
              <h2>Find the answers you're looking for.</h2>
            </AnimationOnScroll>
          </div>
          <div className="faq-container">
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:1})}>
              <div className="faq-question">
                <div>What is Beam?</div>
                {this.state.expandedFAQ == 1 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==1 &&
              <div className="faq-answer">Beam is the first digital operations platform built for doctors. Beam's suite of digital services allows healthcare providers to effortlessly integrate virtual care into their practice.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:2})}>
              <div className="faq-question">
                <div>How do I sign up for Beam?</div>
                {this.state.expandedFAQ == 2 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==2 &&
              <div className="faq-answer">If you're a healthcare provider, you can get started with Beam by creating a free account in just 90 seconds! 95% of providers are able to set-up a Beam account without any help whatsoever. You can also request a personalized demo today! If you're a patient, you can have Beam sent to your physician by emailing us at info@beamhealthgroup.com. Note that there is no app download requirement for patients!</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:3})}>
              <div className="faq-question">
                <div>As a provider, why should I use Beam?</div>
                {this.state.expandedFAQ == 3 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==3 &&
              <div className="faq-answer">Beam allows providers the rare opportunity to increase profitability while increasing patient satisfaction. While other platforms offer just telehealth, Beam supplies a HIPAA compliant, HD telehealth platform and empowers providers with a vast array of digital tools that improve practices; inclindg billing, scheduling, marketing, and customer service.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:4})}>
              <div className="faq-question">
                <div>How much will Beam charge me?</div>
                {this.state.expandedFAQ == 4 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==4 &&
              <div className="faq-answer">Beam offers custom pricing solutions based on each practice's needs. For more information, set up a demo today!</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:5})}>
              <div className="faq-question">
                <div>Will integrating telemedicine into my practice be an intensive process?</div>
                {this.state.expandedFAQ == 5 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==5 &&
              <div className="faq-answer">Not with Beam. Our platform allows providers to set up an account on their own in 90 seconds, giving access to not only telemedicine but an entire digital operations platform designed for doctors. If desired, Beam's team can consult you on how to begin offering telemedicine services.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:6})}>
              <div className="faq-question">
                <div>What if I am already too busy as it is?</div>
                {this.state.expandedFAQ == 6 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==6 &&
              <div className="faq-answer">Beam doesn't only provide HIPAA compliant, HD telemedicine services, but it offers a suite of digital tools that help providers run their practices more efficiently. Offering services from scheduling to billing to marketing, Beam helps busy practices become better at not only providing care to their patients but improving practice workflows, allowing them to increase the patient workload.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:7})}>
              <div className="faq-question">
                <div>When would I conduct telemedicine visits?</div>
                {this.state.expandedFAQ == 7 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==7 &&
              <div className="faq-answer">Through the Beam platform you have complete autonomy to decide whether to fully integrate in-person and telemedicine hours, carve out time during normal business hours exclusively for telemedicine or conduct telemedicine exclusively after-hours or on weekends.</div>
              }
            </div>
          </div>
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

export default FrequentyAskedQuestions;
