import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class CaseStudy4 extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Case Study - Urgent Care facing COVID-19</h1>
              <h2>98point6 Emergicenter</h2>
            </AnimationOnScroll>
          </div>
          <div className="case-study-container">
            <Link className="back-button" to='../case_studies'>&lt; Back to Case Studies</Link>
            <h4>
              Located in Lansing, Michigan, 98point6 Emergicenter offers an alternative option to the long waits at the ER. Staffed by board-certified emergency physicians, 98point6 Emergicenter provides expedited access to medical care when patients are in real need. This care is available 7 days a week, 10am-6pm, except major holidays.
            </h4>
            <h6>The Challenge</h6>
            <p>98point6 Emergicenter was like everyone else in the world: they did not anticipate a global pandemic vastly altering the way society operates. So, when the practice was forced to temporarily close during the COVID19 outbreak, leadership was forced to pivot quickly.</p>
            <hr/>
            <h6>Why Beam</h6>
            <p>Beam offers an HD, HIPAA-approved telemedicine platform that is easy to implement and easy to use. What Beam also offers is compassion and a sense of partnership that is extended to every client. When 98point6 Emergicenter needed help adjusting to “the new normal”, Beam's leadership team kept in close contact. Offering attention and a willingness to collaborate, Beam experimented with different workflows during an insanely busy and hectic time for 98point6 Emergicenter.</p>
            <p>Beam also offers a complimentary text and email campaign that alerts patients about telemedicine, and then educates them how to register and use the new service.</p>
            <hr/>
            <h6>The Results</h6>
            <p>98point6 was able to successfully navigate the COVID19 outbreak. Partnering with Beam allowed the clinic to adjust and see patients using telemedicine during a time when it would have otherwise been impossible.</p>
            <p>Beam's text and email campaign alerted 98point6 patients that, although the physical clinic was closed, care was still available through telemedicine. Utilizing the educational material that was sent out through text and email, patients were able to register on the co-branded website supplied by Beam and began using telemedicine immediately.</p>
            <p className="quote">“Virtual is where it's at, especially during the rise of this contagious disease. We're using Beam to continue to provide care to people and hopefully keep the well away from the sick. A telemedicine visit allows us to know if a patient is sick enough to direct to a hospital. Beam is a great tool to minimize the burden on hospitals.”<br/><strong>Dr. Susan Fedewa, owner of 98point6 Emergicenter</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy4;