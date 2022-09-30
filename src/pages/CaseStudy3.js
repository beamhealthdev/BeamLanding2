import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class CaseStudy3 extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Case Study - Urgent Care looking to scale</h1>
              <h2>UrgentCare 24/7</h2>
            </AnimationOnScroll>
          </div>
          <div className="case-study-container">
            <Link className="back-button" to='../case_studies'>&lt; Back to Case Studies</Link>
            <h4></h4>
            <h6>The Challenge</h6>
            <p>I'm always looking for ways to acquire more patients AND improve patient satisfaction. As the Chief Operating Officer of Urgent Care 24/7, a multi-office walk-in clinic in Georgia, I constantly seek out innovative tools that align with our practice's workflows, culture, and goals.</p>
            <p>There's never a shortage of software companies that are targeting medical practices, but finding one that isn't painful to implement and that actually helps us treat more patients is a rarity.</p>
            <p>This is certainly true when it comes to telemedicine; it's a hot space right now, and there are plenty of software companies with HIPAA-compliant video functionality, but choosing one that actually served our practice instead of generating more work for our staff wasn't easy.</p>
            <hr/>
            <h6>Why We Chose Beam</h6>
            <p>Six months after we launched the first telehealth software that we purchased, we had yet to see a return on the money and time we invested. I was starting to lose hope that our telemedicine experiment would be successful.</p>
            <p>Then I heard about Beam, and their value proposition just made sense. Beam only charges $10 per consult; so there's no monetary risk or confusion about calculating ROI.</p>
            <p>More importantly, their app is so easy to use that I didn't have to worry about training our providers on how to do telehealth visits. Unlike other solutions, Beam's workflow for patients is extremely straightforward and simple. After the patient schedules an appointment, the provider simply starts a video consult via the Beam Health app, which sends the patient a text message with a secure link to the video chat; no patient app download is required.</p>
            <p>We were able to have 3x as many video visits with Beam than with our previous provider at a fraction of the cost. Beam has grown our footprint in Georgia, allowing us to serve patients who don't live close to our offices. Also, Beam's integration with our EHR further lessens the burden on our staff.</p>
            <hr/>
            <h6>Final Thoughts</h6>
            <p>When I consider the intense competition between urgent care facilities in densely populated areas today, I look at Beam as a competitive advantage that enables our providers to deliver quality care more efficiently and conveniently to more patients.</p>
            <p>Furthermore, being a customer at Beam feels like being a partner in something big. I love having a direct line of communication with Beam's leadership team, three ambitious entrepreneurs with a great track record and a deep appreciation for their early customers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy3;