import Style from './Styles/EnterprisePage.module.css'
import { Link } from "react-router-dom";

const EnterprisePage = () => {
  return (
    <>
      <div className='container'>
        <div className={"row " + Style.section1} >
          <div className="col-md-6">
            <h1 className={Style.title}>Engineered To Scale With Practices Of All Sizes</h1>
            <p>Generate more revenue, simplify workflows, and connect with patients using the one and only telehealth platform built for healthcare enterprises.</p>
            <div className={Style.mt}>
              <div className='emailInput'>
                <p className="flex">Email <p className='astrisk'>*</p></p>
                <input type="text" id="fname" name="fname"></input>
                <button className='LearnMoreButton'>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/enterprise-landing-page-header-image.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage}>
        <div className='container'>

          <div className={"row " + Style.section} >
            <div className="col">
              <h1 className='title'>Built to Scale With Any Practice, No Matter the Size</h1>
              <p>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>

          <div className={"row flip " + Style.section2Subsection} >
            <div className="col-md-6 col-sm-12">
              <h1 className='title'>Picture-In-Picture Mode</h1>
              <p>Keep focus on your patients. Pop out of video calls to look up information or take notes while staying visually connected.</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/scheduling-enterprise-landing-768x450.png"></img>
            </div>
          </div>

          <div className={"row flip " + Style.section2Subsection} >
            <div className="col-md-6 col-sm-12">
              <h1 className='title'>Smart Group Therapy Controls</h1>
              <p>Direct the flow of group therapy sessions. Use individual video and audio controls to ensure each patient has their chance to participate.</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/group-video-enterprise-landing-page.png"></img>
            </div>
          </div>

          <div className={"row flip " + Style.section2Subsection} >
            <div className="col-md-6 col-sm-12">
              <h1 className='title'>Maximize Touchpoints</h1>
              <p>Get patients engaged from the start with a custom waiting room. Provide your own content or get help from one of our experts.</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/11/waiting-room-ad-enterprise-landing-page-768x452.png"></img>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div className={Style.section3 + ' ' + 'container'}>
        <p className={Style.title3}>Simplify Practice Management</p>
        <p>Elevate your practice with digital infrastructure designed to support seamless growth.</p>
        <div className='row'>
          <div className="col-md-4  col-sm-12">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/revenue-optimize-300x227.png'></img>
            <div className={Style.iconText}>
              <p className={Style.section3title}>Optimize Your Revenue</p>
              <p className={Style.section3subtitle}>Beam is a platform that’s changing the way providers view virtual care. Connect with patients like never before through:</p>
            </div>
          </div>
          <div className="col-md-4  col-sm-12">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/user-role-icon-300x261.png'></img>
            <div className={Style.iconText}>
              <p className={Style.section3title}>Delegate Intelligently</p>
              <p className={Style.section3subtitle}>Use Beam to share management roles responsibly. Control levels of employee access on our platform for comprehensive security and streamlined operations.</p>
            </div>
          </div>
          <div className="col-md-4  col-sm-12">
            <img className={Style.iconImage} src='https://beam.health/wp-content/uploads/2021/11/file-export-icon-105x105.png'></img>
            <div className={Style.iconText}>
              <p className={Style.section3title}>Share Documents Securely</p>
              <p className={Style.section3subtitle}>Make your patient a partner-in-care. Instantly send test results through our HIPAA-compliant channels.</p>
            </div>
          </div>
        </div>
        <div className={'row ' + Style.button}>
            <Link to='/demo'><button type="button" className="btn btn-secondary homeButton">Learn More</button></Link>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='craft-and-measure'>Craft and Measure the Patient Experience</div>
          <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
        </div>
      </div>
    </>
  )
};

export default EnterprisePage;
