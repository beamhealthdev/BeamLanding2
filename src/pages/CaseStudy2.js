import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class CaseStudy2 extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Case Study - Wellness / Medical Spa</h1>
              <h2>MedX MedSpa</h2>
            </AnimationOnScroll>
          </div>
          <div className="case-study-container">
            <Link className="back-button" to='../case_studies'>&lt; Back to Case Studies</Link>
            <h4>
              Led by Dr. Bart Gershenbaum, MedX MedSpa was created to help men and women overcome the challenges of growing older. Whether it's hair loss, hormone replacement therapy, erectile dysfunction, weight loss therapy, battle with addiction, or basic primary health care, the professionals at MedX Medspa are there to guide their patients through the difficult phases of life with state of the art treatment. 
            </h4>
            <h6>The Challenge</h6>
            <p>MedX MedSpa realized that telemedicine could be a useful tool for them to implement, however, a few challenges came to mind. The first apparent challenge was the fact that the majority of their clientele came from an older generation that may struggle with a virtual service. How do you onboard an entire client base?</p>
            <p>The other challenge was the complexity of MedX MedSpa's fee structure. Clients weren't coming to see a provider for a set co-pay; there were different fees associated with the variety of services offered by MedX MedSpa.</p>
            <hr/>
            <h6>Why Beam</h6>
            <p>MedX MedSpa went out looking for telemedicine and became instantly interested in Beam Health for a specific reason: superior customer support. Beam offers around the clock customer care, not only to the practices that Beam is proud to call clients, but also to the practices' patients who are in need of help using this brand new feature.</p>
            <p>Beam also has an implementation specialist to help instruct practices on the ins and outs of telemedicine. 90% of practices don't require any training to use Beam's telemedicine platform, but then again, most practices don't offer the menu that MedX MedSpa does.</p>
            <hr/>
            <h6>The Results</h6>
            <p>Beam Health's integration specialists saw that MedX MedSpa's telemedicine service would require nuance, and worked diligently to mold the Beam telemedicine platform to their needs. The team at Beam was able to modify the billing page to fit MedX MedSpa's fee structure, allowing the practice to appropriately charge clients after telemedicine visits.</p>
            <p>When patients struggled with the new technology, Beam's customer service was there to help. By being available to answer all concerns promptly, Beam guided patients through the platform and the patients were able to adapt and enjoy the new telemedicine service.</p>
            <p>Dr. Gershenbaum was so impressed with Beam's attention to detail and resolve that he became an early investor in the company.</p>
            <p>Dr. Frankel and her team seamlessly implemented telehealth into their practice during COVID19, when mental health needs were at an all-time high. With the help of Beam, patients were able to register for telehealth treatment and the providers at The Couch were able to supply virtual care during a time that would have otherwise been catastrophic.</p>
            <p className="quote">“What separates Beam from other telemedicine offerings is their attention to detail. They realize that not all practices are the same and strive to make sure that their service fits your unique needs.”<br/><strong>Dr. Bart Gershenbaum</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy2;