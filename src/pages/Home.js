import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class Home extends React.Component {

  state = {
  }

  render() {
    return (
      <AnimationOnScroll className="home-container animate__fadeIn">
        <Navbar {...this.props} />
        <AnimationOnScroll className='landing-page-container animate__fadeInRight animate__fastest'>
          <div>
            <img src='https://beam.health/wp-content/uploads/2021/12/group-video-enterprise-landing-page.png' />
          </div>
          <div>
            <h1>Telehealth</h1>
            <h2>Engineered For</h2>
            <h1>Reliability</h1>
            <a className='cta-button-lg' href="#schedule-demo">Schedule a Demo</a>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className='landing-description-container animate__fastest' animateIn='animate__fadeInUp' animateOnce={true} >
          <div>
            <h2>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</h2>
          </div>
          <div>
            <img src='https://beam.health/wp-content/uploads/2021/12/Group-1172.png' />
          </div>
        </AnimationOnScroll>
        <div className='landing-feature-container'>
          <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true} className='feature-card-parent'>
            <div class="card-wrap">
              <div class="card-header one">
                <i className='fas fa-bolt'></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">Customizable Workflows</h1>
                <p class="card-text">No workflow in Beam is set in stone. You can easily craft a better experience from telehealth, to onboarding, to online chat, to payment collection.</p>
                <div class="card-btn one"></div>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header four">
                <i className='fas fa-laptop-medical'></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">HD, HIPPA-Compliant Telehealth</h1>
                <p class="card-text">Reliable video connection that allows patients and providers to connect.</p>
                <div class="card-btn four"></div>
            </div>
            </div>
            <div class="card-wrap">
              <div class="card-header three">
                <i className='fas fa-calendar'></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">Intuitive Scheduling</h1>
                <p class="card-text">No shows cost money. With Beam, you can now send custom reminders to a patient's email before their scheduled appointment.</p>
                <div class="card-btn three"></div>
            </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true} className='landing-brand-container'>
            <div className='section-header'>Featured On</div>
            <div className='brand-logo-container'>
              <img src="https://logodownload.org/wp-content/uploads/2020/06/nbc-logo.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png"  />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/2560px-Business_Insider_Logo.svg.png"  />
              <br/>
              <img src="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Plug_and_Play_Logo_HR.png" />
              <img src="https://beam.health/wp-content/uploads/2020/10/Comcast_Lift_Labs.png" />
            </div>
          </AnimationOnScroll>
          
          
        </div>
        
        <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true} className='landing-demo-container'>
          <div className='section-header' id="schedule-demo">Schedule a Demo</div>
          <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
        </AnimationOnScroll>
        <Footer />
      </AnimationOnScroll>
    );
  }
}

export default Home;
