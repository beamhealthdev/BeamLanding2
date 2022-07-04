import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class CaseStudiesMain extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="blog-landing-container">
          <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
            <a className="back-container" href="http://localhost:3000/resources">
              <i className="fas fa-arrow-left"></i><span>BACK</span>
            </a>
            <h1>Case Studies</h1>
            <h2>Beam's innovation is customer driven.</h2>
          </AnimationOnScroll>
        </div>
        <div className="case-studies-container">
          <div className="cards-list">
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2020/09/couchlogo-case1n.png" /> </div>
              <div className="card_title">
                <p>Case #1 - <br/>Psychiatry</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2020/11/medx-case2n.png" /> </div>
              <div className="card_title">
                <p>Case #2 - <br/>Wellness / Medical Spa</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2020/11/Urgent-case3n.png" /> </div>
              <div className="card_title">
                <p>Case #3 - <br/>Urgent Care looking to scale</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2020/11/emergicenter-case4n.png" /> </div>
              <div className="card_title">
                <p>Case #4 - <br/>Urgent Care facing COVID-19</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CaseStudiesMain;
