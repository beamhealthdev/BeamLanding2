import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class CaseStudy1 extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <Navbar />
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Case Study - Psychiatry</h1>
              <h2>The Couch</h2>
            </AnimationOnScroll>
          </div>
          <div className="case-study-container">
            <BrowserRouter basename="/">
            <Link className="back-button" to='case_studies' onClick={()=> this.props.updateNav('case_studies')}>&lt; Back to Case Studies</Link>
            </BrowserRouter>
            <h4>
              The Couch is a Kentucky based mental health clinic that combines the immediacy of urgent care with the empathy of a world-class mental healthcare center. Serving Northern Kentucky and Southern Indiana, The Couch accounts for the fact that mental health crises don't always wait until the next appointment and in turn has created a new service: walk-in appointments for psychiatry.
            </h4>
            <h6>The Challenge</h6>
            <p>Led by Dr. Ora Frankel, The Couch's care team anticipated the need for virtual care long before the COVID-19 pandemic. Providing urgent care to those in a mental health crisis requires a deft touch and patients in need of immediate care cannot always make it to the office.</p>
            <p>Dr. Frankel was searching for a solution that would meet the clinic's needs without complicating their patient workflows, and overwhelming the staff. Finding a telehealth platform that could mesh seamlessly was a priority so the providers could ensure the virtual care supplied would match the care the patients had grown accustomed to.</p>
            <hr/>
            <h6>Why Beam</h6>
            <p>Dr. Frankel sought out Beam Health for The Couch's telehealth needs. Beam supplied Dr. Frankel and her team with an HD, HIPAA-compliant telehealth platform that was so easy to integrate The Couch's providers required no training. </p>
            <p>Dr. Frankel and the rest of her staff also enjoyed The Beam Widget, also known as The Beam Button. Easy to find on the front page, patients simply clicked on the widget and would be taken to a co-branded website that walked them through the registration process, while also obtaining consent for telehealth.</p>
            <hr/>
            <h6>The Results</h6>
            <p>Dr. Frankel and her team seamlessly implemented telehealth into their practice during COVID19, when mental health needs were at an all-time high. With the help of Beam, patients were able to register for telehealth treatment and the providers at The Couch were able to supply virtual care during a time that would have otherwise been catastrophic.</p>
            <p className="quote">“Beam's platform was intuitive, helping our team and patients to begin using telehealth immediately with absolutely no training.”<br/><strong>Dr. Ora Frankel</strong></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CaseStudy1;