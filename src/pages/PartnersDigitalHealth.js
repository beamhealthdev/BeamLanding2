import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class PartnersDigitalHealth extends React.Component {

  state = {
  }

  render() {
    const meta = {
      title: 'Beam Health - Digital Health Partners',
      description: 'A digital solution built from the ground up for all your clinical needs.',
      canonical: 'http://beam.health/digital_health',
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
            <div className="partner-section-1">
              <img src="https://cdn.pixabay.com/photo/2017/06/25/10/09/board-2440249_1280.jpg" />
              <div>
                <h1>High Quality Building Blocks for <span style={{whiteSpace:'nowrap'}}>HealthTech Companies</span></h1>
                <h4>HealthTech companies are leading the effort to revolutionize the healthcare industry. Use Beam's flagship technology to build your brand, enhance your offering, and speed up your time to market.</h4>
              </div>
            </div>
            <div className="partner-section-2">
              <h2>Leverage Beam's Tech Stack to deliver an unparalleled digital <span style={{whiteSpace:'nowrap'}}>healthcare experience.</span></h2>
              <h4>With Beam Health's API, you get the exact same API, feature set, and documentation our developers use internally. This means you can jumpstart your development and get your solution to market in weeks, <span style={{whiteSpace:'nowrap'}}>not years.</span></h4>
            </div>
            <div className="partner-section-3">
              <div>
                <i class="fas fa-stethoscope"></i>
                <h2>Telehealth</h2>
                <h4>Unrivaled video and audio clarity, with all the features providers need to have successful virtual consultations <span style={{whiteSpace:'nowrap'}}>with their patients</span></h4>
              </div>
              <div>
                <i class="fas fa-heartbeat"></i>
                <h2>Practice Management</h2>
                <h4>From patient registration, to scheduling, to revenue cycle management, Beam has your workflow covered <span style={{whiteSpace:'nowrap'}}>end-to-end</span></h4>
              </div>
              <div>
                <i class="fas fa-user-md"></i>
                <h2>Patient Engagement</h2>
                <h4>Craft the entire patient experience with custom marketing tools, interactive waiting rooms, and post consult surveys that provide <span style={{whiteSpace:'nowrap'}}>valuable feedback</span></h4>
              </div>
              <div>
                <i class="fas fa-x-ray"></i>
                <h2>Clinical operations</h2>
                <h4>Triage patients, take notes, and share important documents all directly <span style={{whiteSpace:'nowrap'}}>within the platform</span></h4>
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

export default PartnersDigitalHealth;
