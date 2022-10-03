import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import DocumentMeta from 'react-document-meta';

class PartnersHealthcareSystems extends React.Component {

  state = {
  }

  render() {
    const meta = {
      title: 'Beam Health - Practices and Healthcare Systems',
      description: 'A digital solution built from the ground up for all your clinical needs.',
      canonical: 'http://beam.health/healthcare_systems',
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
                <h1>Exceptional digital care for practices and <span style={{whiteSpace:'nowrap'}}>healthcare systems</span></h1>
                <h4>Healthcare delivery has radically changed in the last few years. Choose a partner with a proven track record amongst providers and patients - talk to Beam.</h4>
              </div>
            </div>
            <div className="partner-section-2">
              <h2>Improve patient engagement and outcomes with our <span style={{whiteSpace:'nowrap'}}>digital care offering.</span></h2>
              <h4>Building a virtual care solution can be difficult and time consuming. Finding a partner that can adapt to your custom workflows may seem impossible - until now. Beam is the flexible, all-in-one solution <span style={{whiteSpace:'nowrap'}}>you're looking for.</span></h4>
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
            <h1>Schedule a Demo</h1>
            <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersHealthcareSystems;
