import { Link } from "react-router-dom";
import Style from './Styles/PatientIntake.module.css'

const PatientIntake = () => {
  return (
    <>
      <div className={Style.backgroundImage + ' ' + Style.section}>
        <div className='container'>
          <div className="row" >
            <div className="col-md-6">
              <h1 className={Style.title}>Streamline Patient Registration</h1>
              <p>Eliminate clipboards with digital patient intake forms from your homepage</p>
              <div className='emailInput'>
                <p className="flex">Email <p className='astrisk'>*</p></p>
                <input type="text" id="fname" name="fname"></input>
                <button className='LearnMoreButton'>Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/mental-health-header-image.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.section2}>
        <div className="row" >
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/widget-w-red-background.png"></img>
          </div>
          <div className={"col-md-6 " + Style.mobilePadding}>
            <h1 className={Style.title2}>Paperless patient enrollment</h1>
            <p>Upgrade your patient intake system and collect the info you need before they ever set foot in your office:</p>
            <ul className={Style.unorderedList}>
              <li>Contact Info</li>
              <li>Insurance</li>
              <li>Medical History</li>
              <li>Preferred Payment Method</li>
            </ul>
              <Link to='/demo'><button type="button" className="btn btn-secondary homeButton">Learn More</button></Link>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section2}>
        <div className='container'>
          <div className="row flip" >
            <div className="col-md-6">
              <h1 className={Style.title}>Accelerate practice growth</h1>
              <p>Patients appreciate open and convenient access to their provider. Give them what they desire right from your homepage with:</p>
              <ul>
                <li>Live Chat</li>
                <li>Appointment Requests</li>
                <li>Telehealth</li>
                <li>Much More!</li>
              </ul>
                <Link to='/demo'><button type="button" className="btn btn-secondary homeButton">Learn More</button></Link>
            </div>
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Image-140-1024x690.png"></img>
            </div>
          </div>
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

export default PatientIntake;
