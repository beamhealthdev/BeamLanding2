import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class Home extends React.Component {

  state = {
    reviewStep:1,
    telehealthStep:'group',
    reviewMargin:'0px'
  }

  componentDidMount = () => {
  }

  togglePrev = (step) => {
    if(step==1) {
      this.setState({reviewMargin:'-1260px', reviewStep:4})
    }
    else if(step==2) {
      this.setState({reviewMargin:'0px', reviewStep: 1})
    }
    else if(step==3) {
      this.setState({reviewMargin:'-420px', reviewStep: 2})
    }
    else {
      this.setState({reviewMargin:'-840px',reviewStep: 3})
    }
  }

  toggleNext = (step) => {
    if(step==1) {
      this.setState({reviewMargin:'-420px', reviewStep:2})
    }
    else if(step==2) {
      this.setState({reviewMargin:'-840px', reviewStep: 3})
    }
    else if(step==3) {
      this.setState({reviewMargin:'-1260px', reviewStep: 4})
    }
    else {
      this.setState({reviewMargin:'0px',reviewStep: 1})
    }
  }

  render() {
    const meta = {
      title: 'Beam Health',
      description: 'A digital solution built from the ground up for all your clinical needs.',
      canonical: 'http://beam.health/',
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
        <AnimationOnScroll className="home-container animate__fadeIn">
          {/* <Navbar {...this.props} /> */}
          <div className='ColorGradientAnimation'></div>
          <AnimationOnScroll className='landing-page-container animate__fadeIn animate__fastest'>
            <div>
              <h1>The future of healthcare, built <span style={{whiteSpace:'nowrap'}}>your way.</span></h1>
              <h4>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</h4>
              <div>
                <a className='cta-button-lg-alt' href='https://beam.health/solutions'>Our Solutions</a>
                <a className='cta-button-lg' href="#schedule-demo">Book Demo <i className='fas fa-arrow-right'></i></a>
              </div>
            </div>
            <div>
              <img src='https://beam-provider-landing.s3.amazonaws.com/final/dashboard_marketing_screen_2.webp' alt='Marketing Screen of web dashboard' />
              <img src='https://beam-provider-landing.s3.amazonaws.com/beam_login_mobile.png' alt='Login Screen for mobile dashboard' />
            </div>
          </AnimationOnScroll>
          <div className='landing-bottom-container'>
            <div className='brand-logo-container'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Comcast_NBCUniversal_logo.svg" alt='NBC Universal Logo' />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png" alt='The Guardian Logo' />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png" alt='Business Insider Logo' />
              <br/>
              <img src="https://www.freelogovectors.net/svg08/techstars-logo-freelogovectors.net_.svg" alt='Techstars Logo' />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Plug_and_Play_Logo_HR.png" alt='Plug and Play Logo' />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_liftlabs.png" alt='Lift Labs Logo' />
            </div>
          </div>
          <AnimationOnScroll className='landing-api-container' animateIn='animate__fadeIn'>
            <div>
              <i className='fas fa-laptop-code'></i>
              <h1><span>Build</span> a more innovative platform <span style={{whiteSpace:'nowrap'}}>in minutes</span></h1>
              <h4>Our healthcare API includes a full suite of features that can be seamlessly integrated into your existing solution. Built with developers in mind, Beam helps providers of all sizes scale their virtual offerings with customizable telehealth, payment processing and scheduling.</h4>
              <a className='cta-button-white' href='https://beam.health/api'>Beam API <i className='fas fa-arrow-right'></i></a>
            </div>
            <div>
              <img src="https://beam-provider-landing.s3.amazonaws.com/final/laptop-code-block-img.png" alt='Graphic of laptop with code' />
            </div>
          </AnimationOnScroll>
          <div className='review-header-container'>
            <h1>Partners that make us Beam with pride</h1>
            <div className='review-controls'>
              <i className='fas fa-chevron-left' onClick={() => this.togglePrev(this.state.reviewStep)}></i>
              <i className='fas fa-chevron-right' onClick={() => this.toggleNext(this.state.reviewStep)}></i>
            </div>
          </div>
          <div className='review-container' style={{marginLeft:this.state.reviewMargin}}>
            <div className={this.state.reviewStep == 1 ? 'review-item' : 'review-hidden'}>
              <div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Comcast_Logo.svg" className='test_logo' alt='Comcast Logo' />
                  <h6>Beam Health's ease of implementation and interoperability gives healthcare institutions and clinics a clear competitive advantage. Their API allows enterprises to develop custom solutions on top of Beam's suite of tools for both desktop and mobile - a game changer for large enterprises that go the extra mile to meet patient needs.</h6>
                </div>
                <div className='review-attr'>
                  <img src="https://fuse.show/wp-content/uploads/2021/08/Fuse-Stephen-Hoelper-of-Doceree-Square-Pic.png" alt='Person' />
                  <div>
                    <h5>Stephen Hoelper</h5>
                    <h6>VP Total Rewards Innovation &amp; Product</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.reviewStep == 2 ? 'review-item' : 'review-hidden'}>
              <div>
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/serendipitylogo.png" className='test_logo' alt='Serendipity Logo' />
                  <h6>Beam has been a wonderful addition to our EMR, especially with taking copays on the site and not having to worry about collecting them later! Our patients are loving it as well since they don't have to leave home or work.</h6>
                </div>
                <div className='review-attr'>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/Robert+Strayhan.png" alt='Person' />
                  <div>
                    <h5>Dr. Robert Strayhan</h5>
                    <h6>Provider</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.reviewStep == 3 ? 'review-item' : 'review-hidden'}>
              <div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Comcast_NBCUniversal_logo.svg" className='test_logo' alt='NBC Universal Logo' />
                  <h6>Beam Health is building a best in class virtual care and patient operations platform. This team has the expertise, the agility and the tenacity to succeed. As a member of the Comcast NBCUniversal LIFT Labs portfolio, we couldn't be prouder of the progress they continue to make.</h6>
                </div>
                <div className='review-attr'>
                  <img src="https://images.weserv.nl/?url=emamo.com/storage/avatars/86/84/31945_e9a7304f0c1c88b5ce0d0b82e04f8684.jpg&w=400&h=400" alt='Person' />
                  <div>
                    <h5>Luke Butler</h5>
                    <h6>Executive Director Startup Engagement</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.reviewStep == 4 ? 'review-item' : 'review-hidden'}>
              <div>
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/accessadoclogo.png" className='test_logo' alt='Access a Doc Logo' />
                  <h6>Beam's mission to utilize patient/provider feedback allows them to adapt to changing needs and regulations surrounding telemedicine. Thank you for consistently innovating to ensure we can get any practice at the top of their game!</h6>
                </div>
                <div className='review-attr'>
                  <div>
                    <h5>Novia Castro</h5>
                    <h6>Office Manager</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='landing-telehealth-container'>
            <h1><span>Turn</span> every doctor visit into a can't-miss appointment.</h1>
            <h4>With custom digital waiting rooms, group video, note-taking, and more, our feature-rich telehealth solution has everything you need to provide great virtual care to your patients.</h4>
            <div className='telehealth-features-container'>
              <div className='telehealth-features-content'>
                {this.state.telehealthStep=='group' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Group Video</h4>
                  <p>Allow multiple participants in a single video session with our group video conferencing. Intuitive features include signal strength monitoring, screen sharing, volume control, and more.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/group-call-screen.webp" alt='Group call screen' />
                </AnimationOnScroll>
                }
                {this.state.telehealthStep=='customize' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Customizability</h4>
                  <p>A virtual waiting room that comes with custom content to educate and promote services to patients as they wait for your providers. Every provider gets a unique waiting room link that can be used anywhere in the world, at any time.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/wr_ad.webp" alt='Waiting Room with Sponsored Content' />
                </AnimationOnScroll>
                }
                {this.state.telehealthStep=='screen' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Screen Sharing</h4>
                  <p>Share your screen with one click from within the Beam dashboard during patient video calls.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/landing_th_screenshare.webp" alt='Screenshare feature' />
                </AnimationOnScroll>
                }
                {this.state.telehealthStep=='pip' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Picture in Picture</h4>
                  <p>Keep your focus on the patient. With picture-in-picture,  you can review test results or take notes while staying visually engaged.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/landing_th_pip.webp" alt='Picture in Picture feature' />
                </AnimationOnScroll>
                }
                {this.state.telehealthStep=='chat' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Live Chat</h4>
                  <p>Interact with patients while they wait in your custom waiting room. Support staff can now triage patients, as well as share and receive documents, prior to the provider entering the digital exam room.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/landing_th_chat.webp" alt='Chat feature' />
                </AnimationOnScroll>
                }
                {this.state.telehealthStep=='notes' &&
                <AnimationOnScroll animateIn='animate__fadeIn'>
                  <h4>Note Taking</h4>
                  <p>Construct and complete visit notes during video appointments. Beam's note taking feature comes equipped with SOAP functionality and can easily be integrated to share data with your EHR.</p>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/landing_th_notes.webp" alt='Note traking feature' />
                </AnimationOnScroll>
                }
              </div>
              <div className='telehealth-features-buttons'>
                <div className={this.state.telehealthStep=='group' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'group'})}><i className='fas fa-video'></i><span>Group Video</span></div>
                <div className={this.state.telehealthStep=='customize' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'customize'})}><i className='fas fa-cog'></i><span>Customizability</span></div>
                <div className={this.state.telehealthStep=='screen' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'screen'})}><i className='fas fa-display'></i><span>Screen Sharing</span></div>
                <div className={this.state.telehealthStep=='pip' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'pip'})}><i className='fas fa-window-restore'></i><span>Picture in Picture</span></div>
                <div className={this.state.telehealthStep=='chat' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'chat'})}><i className='fas fa-comments'></i><span>Live Chat</span></div>
                <div className={this.state.telehealthStep=='notes' ? 'active-th-button' : ''} onClick={() => this.setState({telehealthStep:'notes'})}><i className='fas fa-clipboard'></i><span>Note Taking</span></div>
              </div>
            </div>
            <a className='cta-button-lg' href="#schedule-demo" style={{marginTop:'60px'}}>Book Demo <i className='fas fa-arrow-right'></i></a>
          </div>
          <div className='landing-feature-container'>
            <div className='landing-feature-item'>
              <div>
                <div className='landing-feature-label'>Scheduling</div>
                <h1><span>Organize</span> your day around <span style={{whiteSpace:'nowrap'}}>your schedule</span></h1>
                <h4>No shows cost money. Beam's scheduling tool makes it easy for providers to set their availability, and for patients to book <span style={{whiteSpace:'nowrap'}}>appointments online.</span></h4>
                <h6><i className='fas fa-check-circle'></i>Integrate with your calendar.</h6>
                <h6><i className='fas fa-check-circle'></i>Send automated text/email reminders.</h6>
                <h6><i className='fas fa-check-circle'></i>Set your own hours.</h6>
              </div>
              <div className='landing-first-feature-img-container'>
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/beam-dashboard-schedule-1.png' alt='Schedule Screen' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInLeft' delay={2} className='slide-in' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/beam-dashboard-schedule-2.png' alt='Schedule Modal graphic' />
                </AnimationOnScroll>
              </div>
            </div>

            <div className='landing-feature-item'>
              <div className='landing-second-feature-img-container'>
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/final/payments_screen_1.png' alt='Payments screen' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInLeft' delay={2} className='slide-in' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/final/payments_screen_2.png' alt='Payment notification graphic' />
                </AnimationOnScroll>
              </div>
              <div>
                <div className='landing-feature-label'>Payments</div>
                <h1><span>Collect</span> consult <span style={{whiteSpace:'nowrap'}}>charges instantly</span></h1>
                <h4>Beam's database securely stores payment information for future transactions, decreasing overdue payments while increasing <span style={{whiteSpace:'nowrap'}}>cash flow.</span></h4>
                <h6><i className='fas fa-check-circle'></i>Accept multiple payment forms.</h6>
                <h6><i className='fas fa-check-circle'></i>Create subscriptions and pay-over-time options.</h6>
                <h6><i className='fas fa-check-circle'></i>Request payment details prior to consults.</h6>
              </div>
            </div>

            <div className='landing-feature-item'>
              <div>
                <div className='landing-feature-label'>Patient Intake</div>
                <h1><span>Build</span> forms tailored to <span style={{whiteSpace:'nowrap'}}>your workflow</span></h1>
                <h4>Patient demographics, medical history, consent forms - collect the information you need when you need it. Simply upload a template or build your own custom intake forms directly within the <span style={{whiteSpace:'nowrap'}}>Beam dashboard.</span></h4>
                <h6><i className='fas fa-check-circle'></i>Integrate with your EHR.</h6>
                <h6><i className='fas fa-check-circle'></i>View aggregated patient response data.</h6>
                <h6><i className='fas fa-check-circle'></i>Customize intake forms based on purpose.</h6>
              </div>
              <div className='landing-third-feature-img-container'>
                <AnimationOnScroll animateIn='animate__slideInRight' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/final/intake_screen_1.png' alt='Intake screen element 1' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInRight' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/final/intake_screen_2.png' alt='Intake screen element 2' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInRight' animateOnce={true}>
                  <img src='https://beam-provider-landing.s3.amazonaws.com/final/intake_screen_3.png' alt='Intake screen element 3' />
                </AnimationOnScroll>
              </div>
            </div>
            
          </div>
          {/* <div className='testimonial-container'>
            <div>
              <i className='fas fa-caret-left' onClick={() => this.setState({testimonialStep:!this.state.testimonialStep})}></i>
            </div>
            <div>
              {this.state.testimonialStep==true && 
              <>
              <div className='quote-container'>
                “Beam's mission to utilize patient and provider feedback allows them to provide a powerhouse full of opportunities. By understanding our needs and consistently innovating, they ensure any practice can be at the top of their game!"
              </div>
              <div className='quote-attr'>
                • Novia Castro - Office Manager at Access-A-Doc
              </div>
              </>
              }
              {this.state.testimonialStep==false && 
              <>
              <div className='quote-container'>
                “Beam has been a wonderful addition to our EMR, especially with taking copays on the site and not having to worry about collecting them later! Our patients are loving it as well since they don't have to leave home or work."
              </div>
              <div className='quote-attr'>
                • Dr. Robert Strayhan - Serendipity Wellness
              </div>
              </>
              }
            </div>
            <div>
              <i className='fas fa-caret-right' onClick={() => this.setState({testimonialStep:!this.state.testimonialStep})}></i>
            </div>
          </div> */}
          <div className='demo-container' id="schedule-demo">
            <h1>Book Demo</h1>
            <iframe src="https://meetings.hubspot.com/beam/platform-demo?embed=true" width="100%" style={{height: "756px", border: "none"}}></iframe>
          </div>
        </AnimationOnScroll>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
