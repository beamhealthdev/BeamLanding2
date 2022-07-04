import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

class Blog extends React.Component {

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
            <h1>Blog</h1>
            <h2>The latest in digital healthcare.</h2>
          </AnimationOnScroll>
        </div>
        <div className="blog-container">
          <div className="cards-list">
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/2-458x301.png" /> </div>
              <div className="card_title">
                <p>5 Reasons Telehealth Improves Holistic Psychiatry</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/1-1-458x301.png" /> </div>
              <div className="card_title">
                <p>Beam's Guide to Dermatology Telemedicine</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/3-1-458x301.png" /> </div>
              <div className="card_title">
                <p>Telehealth CPT Codes<br/> in 2022</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/4-2-458x301.png" /> </div>
              <div className="card_title">
                <p>What is a <br/>Telehealth Attorney?</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/6-2-458x301.png" /> </div>
              <div className="card_title">
                <p>Mental Health Clinicians in Telehealth</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/03/5-2-458x301.png" /> </div>
              <div className="card_title">
                <p>Why Clinics Need Telehealth STD Testing</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/02/6-1-458x301.png" /> </div>
              <div className="card_title">
                <p>How to Provide the Best Dental Telemedicine</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/02/8-1-458x301.png" /> </div>
              <div className="card_title">
                <p>The Best Telehealth Software Features</p>
              </div>
            </div>
            <div className="card 1">
              <div className="card_image"> <img src="https://beam.health/wp-content/uploads/2022/02/9-1-458x301.png" /> </div>
              <div className="card_title">
                <p>The Basics of <br/>Telehealth Neurology</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
