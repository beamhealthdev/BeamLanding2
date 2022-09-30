import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";
import DocumentMeta from 'react-document-meta';

class FrequentyAskedQuestions extends React.Component {

  state = {
    expandedFAQ:1
  }

  render() {
    const meta = {
      title: 'Beam Health - FAQ',
      description: 'Get answers to common questions.',
      canonical: 'http://beam.health/faq',
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
        <div className="about-parent-container">
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Frequently Asked Questions</h1>
              <h2>Find the answers you're looking for.</h2>
            </AnimationOnScroll>
          </div>
          <div className="faq-container">
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:1})}>
              <div className="faq-question">
                <div>How do I get started with Beam?</div>
                {this.state.expandedFAQ == 1 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==1 &&
              <div className="faq-answer">Simply <a href="#schedule-demo">Schedule a demo</a> with one of our account managers or send us your info to <a href="mailto:info@beamhealthgroup.com" target="_blank">info@beamhealthgroup.com</a>. Registrations take seconds and we can launch to thousands of providers in a matter of minutes.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:2})}>
              <div className="faq-question">
                <div>Can I bill Insurance through Beam Health?</div>
                {this.state.expandedFAQ == 2 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==2 &&
              <div className="faq-answer">Yes! Our customer success team can help you earn the most out of your telehealth consults by filing &amp; checking claims on your behalf or working with your biller to ensure your revenue cycles are uninterrupted.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:3})}>
              <div className="faq-question">
                <div>How is Beam different from most other telehealth companies?</div>
                {this.state.expandedFAQ == 3 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==3 &&
              <div className="faq-answer">At Beam - we act as an extension of our clients' team - which means we treat their wins as our own. This is why we have a 93 net promoter score with our customers and also why most of our customers choose to stay with us long term. Many other software companies will just give away their software and leave implementation and integration up to the client. As Healthcare entrepreneurs - we know how hard this is for tech companies - let alone clinicians who frankly have better things to focus their time and attention on.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:4})}>
              <div className="faq-question">
                <div>Are there discounts for nonprofits, solo practitioners, or researchers?</div>
                {this.state.expandedFAQ == 4 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==4 &&
              <div className="faq-answer">Yes - we love helping those looking to get started &amp; non-profits who are in business to help others! Contact us and tell us how you're looking to get started.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:5})}>
              <div className="faq-question">
                <div>What do you mean by patient operations platform?</div>
                {this.state.expandedFAQ == 5 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==5 &&
              <div className="faq-answer">We believe the pandemic has created a shift in the way patient care is done. Beforehand, all you needed was video chat software to see patients remotely. In 2022, the increase in telemedicine usage combined with the shift to remote workforces has created a need in the market for operations software that extend beyond the video chat. Specifically, this means a waiting room for patients, custom interfaces for practice administrators, billers, providers, and business operators.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:6})}>
              <div className="faq-question">
                <div>Do you provide an EHR?</div>
                {this.state.expandedFAQ == 6 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==6 &&
              <div className="faq-answer">We focus on providing the best telehealth and patient operations platform - though we can integrate our services with hundreds of EHRs. We recommend finding a good EHR company (we're happy to recommend you one if needed)!</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:7})}>
              <div className="faq-question">
                <div>Am I locked down to a contract?</div>
                {this.state.expandedFAQ == 7 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==7 &&
              <div className="faq-answer">Not at all - we want happy customers who like working with us.</div>
              }
            </div>
            <div className="faq-item" onClick={() => this.setState({expandedFAQ:8})}>
              <div className="faq-question">
                <div>How long does it take to get a whitelabel version of the product branded?</div>
                {this.state.expandedFAQ == 8 ? <i className="fas fa-minus" onClick={() => this.setState({expandedFAQ:0})}></i> : <i className="fas fa-plus"></i>}
              </div>
              {this.state.expandedFAQ==8 &&
              <div className="faq-answer">We can do it in under 24 hours! All we need is your logo and color choices.</div>
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
      </div>
    );
  }
}

export default FrequentyAskedQuestions;
