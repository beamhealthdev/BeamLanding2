import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class Solutions extends React.Component {

  state = {
    selectedFeature: 1,
    featureStep: 1
  }

  render() {
    const meta = {
      title: 'Beam Health - Solutions',
      description: 'A digital solution built from the ground up for all your clinical needs.',
      canonical: 'http://beam.health/solutions',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }
    return (
      <div className="parent-container">
        <DocumentMeta {...meta} />
        <div className="solutions-container">
          <div className="solutions-landing-container">
            <div className="solutionsPageAnimation">
              <h1>Empower your clinic with tools to provide more innovative care</h1>
              <h4>Built from the ground up for all your clinical needs</h4>
            </div>
            <div className="api-solutions-container">
              <div>
                <h4>Welcome to Beam Health</h4>
                <p>Telehealth represents the biggest growth opportunity in healthcare since the establishment of the doctor's office. So why do so many virtual platforms cause additional headaches for providers and patients?</p>
                <p>The complexity and cost of building a comprehensive telehealth tech stack means that most companies struggle to extend their quality real-world care into the virtual space.</p>
                <p>Enter Beam Health. Our clean, pre-built components allow you to get started immediately (at a lower cost) and come with advanced features that can be customized to fit your needs.
                  Whether it's virtual visits, patient intake, payment collection, or scheduling, Beam is ready to help make your platform a digital healthcare powerhouse.
                </p>
                <a className='cta-button' href='https://beam.health/api'>Beam API <i className='fas fa-arrow-right'></i></a>
              </div>
            </div>`
            <div className='solutions-feature-container'>
              <div className='landing-feature-item'>
                <div>
                  <div className='landing-feature-label'>Quality</div>
                  <h1><span>Care</span> without a glitch</h1>
                  <h4>Best-in-class video and audio quality for precise communication during every <span style={{whiteSpace:'nowrap'}}>virtual visit.</span></h4>
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
                  <h4>From private clinics to large enterprises, our platform adapts to your needs - and to <span style={{whiteSpace:'nowrap'}}>your goals.</span></h4>
                </div>
              </div>

              <div className='landing-feature-item'>
                <div>
                  <div className='landing-feature-label'>Flexibility</div>
                  <h1><span>Patient</span> friendly philosophy</h1>
                  <h4>More payment options, simple scheduling and better communication make receiving care <span style={{whiteSpace:'nowrap'}}>a joy.</span></h4>
                </div>
                <div className='solutions-third-feature-img-container'>
                  <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                    <img src='https://beam-provider-landing.s3.amazonaws.com/final/wr_screen_1.png' />
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
            <div style={{textAlign:'center'}}>
              <a className='cta-button-lg' href="#schedule-demo" style={{padding:'14px 30px', marginTop:'20px'}}>Book Demo <i className='fas fa-arrow-right'></i></a>
            </div>
          </div>
          <div className='landing-telehealth-container-solutions'>
            <h1>We've got every part of your clinic covered.</h1>
            <h4>Maximize your capacity for care with dozens of features made to grow with you.</h4>
            <div className='telehealth-features-container'>
              <div className='telehealth-features-content'>
                {this.state.featureStep==1 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Telehealth</h4>
                  {/* <p>Allow multiple participants in a single video session with our group video conferencing. Intuitive features include signal strength monitoring, screen sharing, volume control, and more.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>HIPAA Compliant</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Waiting Room Messaging</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Private Waiting Room</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Chat Translation</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Video Closed Captioning</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Screen Sharing</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Group Calling Options (up to 100 participants)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Low-Bandwidth Support</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Waiting Room Smart Alerts (to provider)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Patient Queue</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>On-Demand Telehealth / Waiting Room</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Waiting Room Passcode</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Check In / Check Out</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
                {this.state.featureStep==2 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Clinical Operations</h4>
                  {/* <p>A virtual waiting room that comes with custom content to educate and promote services to patients as they wait for your providers. Every provider gets a unique waiting room link that can be used anywhere in the world, at any time.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Clinical Documentation (note taking)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Document / File Sharing (in meeting, pre, post)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Triage</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
                {this.state.featureStep==3 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Patient Engagement</h4>
                  {/* <p>Easily share your screen during patient encounters within the Beam dashboard with just one-click.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Automated Reminders</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Custom Patient-facing website</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Widget</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Post-Visit Survey</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Messaging During Appointment</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Interactive Waiting Room Experience</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
                {this.state.featureStep==4 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Practice Management</h4>
                  {/* <p>Keep your focus on the patient. With picture-in-picture,  you can review test results or take notes while staying visually engaged.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Digital Forms</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Patient Intake form builder</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Insurance Capture</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Admin Kiosk</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Analytics Dashboard (Bank Account Integration)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Provider/Operations/Billing roles</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Scheduling (Integrations through Google/Apple Calendar)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Billing / Payment Capture</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Flexible payment collections</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
                {this.state.featureStep==5 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Customizations / Integrations</h4>
                  {/* <p>Interact with patients while they wait in your custom waiting room. Support staff can now triage patients, as well as share and receive documents, prior to the provider entering the digital exam room.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>55+ EHR Integrations</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Customizable colors, look &amp; feel</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>API with webhooks to customize &amp; whitelabel interface</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Practice branding</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
                {this.state.featureStep==6 &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Ease of Use</h4>
                  {/* <p>Construct and complete visit notes during video appointments. Beam's note taking feature comes equipped with SOAP functionality and can easily be integrated to share data with your EHR.</p> */}
                  <div className="bullet-point-container">
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Single Sign On (Apple, Google, EHR)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Phone App (iOS)</span>
                    </div>
                    <div>
                      <i className="fas fa-check-circle"></i>
                      <span>Browser-Based Option</span>
                    </div>
                  </div>
                </AnimationOnScroll>
                }
              </div>
              <div className='telehealth-features-buttons'>
                <div className={this.state.featureStep==1 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:1})}><i className='fas fa-video'></i><span>Telehealth</span></div>
                <div className={this.state.featureStep==2 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:2})}><i className='fas fa-clinic-medical'></i><span>Clinical Operations</span></div>
                <div className={this.state.featureStep==3 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:3})}><i className='fas fa-users'></i><span>Patient Engagement</span></div>
                <div className={this.state.featureStep==4 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:4})}><i className='fas fa-building'></i><span>Practice Management</span></div>
                <div className={this.state.featureStep==5 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:5})}><i className='fas fa-network-wired'></i><span>Customizations / Integrations</span></div>
                <div className={this.state.featureStep==6 ? 'active-th-button' : ''} onClick={() => this.setState({featureStep:6})}><i className='fas fa-mouse-pointer'></i><span>Ease of Use</span></div>
              </div>
            </div>
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
            <h1>Book Demo</h1>
            <iframe src="https://meetings.hubspot.com/beam/platform-demo?embed=true" width="100%" style={{height: "756px", border: "none"}}></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Solutions;
