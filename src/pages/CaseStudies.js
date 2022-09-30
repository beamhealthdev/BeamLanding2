import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";
import DocumentMeta from 'react-document-meta';

class CaseStudies extends React.Component {

  state = {
  }

  render() {
    const meta = {
      title: 'Beam Health - Case Studies',
      description: 'Learn how our customers gained momentum with Beam.',
      canonical: 'http://beam.health/case_studies',
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
              <h1>Case Studies</h1>
              <h2>Learn how Beam has helped customers.</h2>
            </AnimationOnScroll>
          </div>
          <div className="case-studies-container">
              <Link to='case_study_1' className="case-study-item">
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/couch_logo.png" />
                </div>
                <div>
                  <h4>CASE #1 - Psychiatry</h4>
                  <h4>The Couch</h4>
                  <h4>The Couch is a Kentucky based mental health clinic that combines the immediacy of urgent care with the empathy of a world-class mental healthcare center.</h4>
                </div>
              </Link>
              <Link to='case_study_2' className="case-study-item">
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/medx_logo.png" />
                </div>
                <div>
                  <h4>CASE #2 - Wellness / Medical Spa</h4>
                  <h4>MedX MedSpa</h4>
                  <h4>Led by Dr. Bart Gershenbaum, MedX MedSpa was created to help men and women overcome the challenges of growing older.</h4>
                </div>
              </Link>
              <Link to='case_study_3' className="case-study-item">
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/uc247_logo.png" />
                </div>
                <div>
                  <h4>CASE #3 - Urgent Care looking to scale</h4>
                  <h4>UrgentCare 24/7</h4>
                  <h4>Urgent Care 24/7 is a multi-office walk-in clinic in Georgia that constantly seeks out innovative tools that align with their workflows, culture, and goals.</h4>
                </div>
              </Link>
              <Link to='case_study_4' className="case-study-item">
                <div>
                  <img src="https://beam-provider-landing.s3.amazonaws.com/final/986emergicenter_logo.png" />
                </div>
                <div>
                  <h4>CASE #4 - Urgent Care facing COVID-19</h4>
                  <h4>98point6 Emergicenter</h4>
                  <h4>98point6 Emergicenter was like everyone else in the world: they didn't anticipate a pandemic vastly altering the way society operates. So, when they were forced to temporarily close during the COVID19 outbreak, leadership was able to pivot quickly.</h4>
                </div>
              </Link>
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

export default CaseStudies;
