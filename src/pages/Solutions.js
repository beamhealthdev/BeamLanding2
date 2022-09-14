import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class Solutions extends React.Component {

  state = {
    selectedFeature: 1
  }

  render() {
    const meta = {
      title: 'Beam Health - Solutions',
      description: 'A digital solution built from the ground up for all your clinical needs.',
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
        <div className="solutions-container">
          <Navbar />
          <div className="solutions-landing-container">
            <div className="solutionsPageAnimation">
              <h1>A digital health platform designed for innovation</h1>
              <h4>Built from the ground up for all your clinical needs</h4>
            </div>
            <div className="api-solutions-container">
              <div>
                <h4>Welcome to Beam Health</h4>
                <p>Building custom digital health solutions are more important than ever before. Delivering a “wow-experience” for patients is vital to growth in the age of consumer driven healthcare. 
                  However, imagine having to build an experience to rival tech giants like Teladoc, Zoom, Stripe, or Zocdoc - platforms that took years to design and develop. 
                  You could try leveraging these and other SaaS platforms, but in doing so you would lose flexibility, interoperability, and most importantly brand recognition. 
                  You could also try building your own solution from scratch - an endeavor that would require a team of designers and engineers working months or even years before a finished product was 
                  ready for launch. An option that would also prove to be immensely expensive.</p>
                <p>This is where we come in. With Beam Health's API, you get the exact same API, feature set, and documentation our developers use internally. 
                  This means you can jumpstart your development and get your solution to market in weeks, not years.</p>
                <p>Our clean, pre-built components allow you to get started immediately and come with advanced features that can be customized to fit your needs. 
                  Whether it's telehealth, patient intake, payment collection, or scheduling, Beam is ready to help make your platform a virtual healthcare powerhouse.
                </p>
                <a className='cta-button' href='https://beam.health/api'>Beam API <i className='fas fa-arrow-right'></i></a>
              </div>
            </div>`
            <div className='solutions-feature-container'>
              <div className='landing-feature-item'>
                <div>
                  <div className='landing-feature-label'>Quality</div>
                  <h1><span>Raise</span> telehealth standards</h1>
                  <h4>Choppy video and audio that hinder conversations call for <span style={{whiteSpace:'nowrap'}}>reliable solutions.</span></h4>
                </div>
                <div className='landing-first-feature-img-container'>
                  <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/group-call-screen.png' />
                  </AnimationOnScroll>
                </div>
              </div>

              <div className='landing-feature-item'>
                <div className='solutions-second-feature-img-container'>
                  <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/patients_marketing_screen_1.png' />
                  </AnimationOnScroll>
                </div>
                <div>
                  <div className='landing-feature-label'>Scalability</div>
                  <h1><span>Built</span> for practices of <span style={{whiteSpace:'nowrap'}}>all sizes</span></h1>
                  <h4>A platform that adapts to your needs - from private clinics to <span style={{whiteSpace:'nowrap'}}>large enterprise.</span></h4>
                </div>
              </div>

              <div className='landing-feature-item'>
                <div>
                  <div className='landing-feature-label'>Flexibility</div>
                  <h1><span>Patient</span> friendly philosophy</h1>
                  <h4>Designed with the patient's core experience in mind, giving them more payment options, easy communication, and <span style={{whiteSpace:'nowrap'}}>peace of mind.</span></h4>
                </div>
                <div className='solutions-third-feature-img-container'>
                  <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/final/wr_screen_1.png' />
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
            <div style={{textAlign:'center'}}>
              <a className='cta-button-lg' href="#schedule-demo" style={{padding:'14px 30px', marginTop:'20px'}}>Book a Demo <i className='fas fa-arrow-right'></i></a>
            </div>
          </div>
          {/* <div className="grid-feature-container-solutions">
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
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/landing_th_pip.png" style={{borderRadius:0}} />
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
          </div> */}
          
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
                  <img src="https://beam-provider-landing.s3.amazonaws.com/landing-blob-solutions.png" />
                </div>
              </div>
            </div>
            <a className="cta-button" style={{padding:'14px 30px', marginTop:'20px'}} href="https://providers.beam.health/revenue-calculator/" target="_blank">Calculate Your Savings</a>
          </div>
          <div className="grid-feature-container-solutions">
            <h1>Expedite Administrative Work</h1>
            <h4>Upgrade your patient intake system and collect the info you need before they ever set foot in your office.</h4>
            <div className="grid-feature-item-container">
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/intake_screen_4.png" />
                <h2>Collect Intake Data</h2>
                <h4>Provide your patients with a simple intake form so you have all their information before starting.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/final/payment_info_screen.png" />
                <h2>Never lose a payment to collections</h2>
                <h4>Collect and verify payment information before starting.</h4>
              </div>
              <div className="grid-feature-item">
                <img src="https://beam-provider-landing.s3.amazonaws.com/invoicing_marketing_screen_1.png" />
                <h2>Flexible Payment Structures</h2>
                <h4>Recurring billing that allows you to set up payment plans, subscriptions, and more.</h4>
              </div>
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
