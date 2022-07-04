import Style from './Styles/Telemedicine.module.css'
import { Link } from "react-router-dom";

const TelemedicineReibursement = () => {
  return (
    <>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
          </div>
          <div className={"col-md-6 " + Style.section1container}>
            <h1 className='title'>Know where your state stands on telemedicine.</h1>
            <p>Recent advances in reimbursement policies have paved the way for you to build a prospering telehealth line of business.</p>
            <p>Fill out the form below to be contacted by one of our Integration Specialists</p>
          </div>
        </div>

        <div className={"row " + Style.section2}>
          <div className="col-md-6 mt-50">
            <p>Telemedicine is an exciting and constantly evolving technology that has been embraced by healthcare professionals all over the world. As its use continues to expand, insurance providers and states across the country are seeing the utility in telemedicine and are encompassing it in their plans.</p>
            <p>In fact, not only have regulatory bodies embraced the use of telemedicine for providers in the states that they are licensed in, but laws are now allowing for virtual care across state boundaries. 12 state boards allow special telemedicine certifications to allow providers to practice medicine across state lines via telemedicine (AL, LA, NV, NJ, NM, OH, OK, OR, PA, TN, TX).</p>
            <p>Below is a guide for what you need to know when seeking reimbursement for telemedicine. Please visit our comprehensive, state by state policy guide to see your state’s telemedicine insurance laws.</p>
            <Link to='/demo'><button type="button" className={"btn btn-secondary homeButton " + Style.blue}>Request a Demo</button></Link>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4-1.png"></img>
          </div>
        </div>
      </div>


{/*
  <div className={Style.backgroundImage}>
    <div className='container'>
      <div className={'row ' + Style.sectionPadding}>
        <div className={'col ' + Style.section2textconatiner}>
          <h1 style={{textAlign: 'center'}}>What You Need to Know</h1>
          <p>Private parity laws</p>
          <p>Medicare</p>
          <p>Medicaid Coverage for Telemedicine</p>
        </div>
      </div>
    </div>
  </div>

  <div className='container'>
    <div className={'row ' + Style.sectionPadding}>
      <div className={'col ' + Style.section3}>
        <h1 style={{textAlign: 'center'}}>Types of Telemedicine</h1>
        <p className={Style.blurb}>There are three types of telemedicine that states recognize for insurance purposes: Live Video, Store-and-Forward, and Remote Patient Monitoring. Each of these services helps different providers in different ways, however, not all types of telemedicine are created equally. You’ll find that on a state by state basis, Live Video telemedicine is considered the gold standard for reimbursement. Live Video is much more prevalent, widely used, and covered by Medicaid and parity laws than both Store-and-Forward and Remote Patient Monitoring. Beam supports Live Video</p>
        <p>Live Video</p>
        <p>Store-and-Forward</p>
        <p>Remote Patient Monitoring</p>
      </div>
    </div>
  </div>
*/}
      {/* Carasoul Component */}
      <div className='row'>
        <div className='col'>
          <div className='craft-and-measure'>Craft and Measure the Patient Experience</div>
          <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
        </div>
      </div>

    </>
  )
};

export default TelemedicineReibursement;
