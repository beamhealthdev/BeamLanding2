import Style from './Styles/StateTelemedicinePolicies.module.css'

const StateTelemedicinePolicies = () => {

  let toggle = (e) => {
    if(e.target.classList.contains('main')) {
     e.target.classList.remove('main');
     e.target.classList.add('togglePurple');
   } else {
     e.target.classList.remove('togglePurple');
     e.target.classList.add('main');
   }
    e.target.parentNode.lastChild.classList.toggle('toggle')
  }

  return (
    <>
      <div className='container'>
        <div className={"row " + Style.section1}>
          <div className="col-md-6">
            <h1 className='title mt-90'>Know where your state stands on telemedicine.</h1>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-5-1.png"></img>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={'row '+ Style.section2Text}>
          <h1>At Beam, we have all the tools</h1>
          <h1>you need for Patient &</h1>
          <h1>Insurance Telemedicine Billing.</h1>
        </div>
      </div>

      <div className='container'>
        <div className={"row " + Style.section1}>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4-1.png"></img>
          </div>
          <div className="col-md-6">
            <div className={Style.section2TextContainer}>
              <div>
                <h1 className='main pointer' onClick={(e) => {toggle(e)}}>Private Parity Laws +</h1>
                <div className={"toggle " + Style.toggle}>
                  <div className='state-p'><p>Each state has unique telemedicine laws in place for commercial insurance and Medicaid. While some states allow coverage for all telemedicine visits as if they were in-person, other states have criteria that must be satisfied in order to ensure coverage.</p>
                  <p>It’s important to note that not all telemedicine is treated equally—we’ve tailored Beam to achieve the highest rate of reimbursement. Beam’s video chat feature fits the gold standard of reimbursement: we provide live, real-time, synchronous, HIPAA-compliant video capability.</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='main pointer' onClick={(e) => {toggle(e)}}>Medicare +</h1>
                <div className={"toggle " + Style.toggle}>
                  <div className='state-p'><p>EXPANSION OF TELEHEALTH WITH 1135 WAIVER: Under this new waiver, Medicare can pay for office, hospital, and other visits done via telehealth in all 50 states, including visits in which the patient is doing a real-time video appointment from their home starting March 6, 2020. Currently, there is no end date for this waiver. Learn more here.</p>
                  <p>The map below is interactive; please click on any state you would like to know how telemedicine is reimbursed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage}>
        <div className='container'>
          <div className={"row " + Style.section3}>
            <div className='col'>
              <div className={Style.section3container}>
                <h1 className={Style.section3title}>States</h1>
                <p>Please click on the state you are interested in to view that state’s information:</p>
              </div>
              <div style={{ display: 'flex'}}>
              <ul className={Style.list}>
                    <li><a href="https://beam.health/states/alabama/">Alabama</a></li>
                    <li><a href="https://beam.health/states/alaska/">Alaska</a></li>
                    <li><a href="https://beam.health/states/arizona/">Arizona</a></li>
                    <li><a href="https://beam.health/states/arkansas/">Arkansas</a></li>
                    <li><a href="https://beam.health/states/california/">California</a></li>
                    <li><a href="https://beam.health/states/colorado/">Colorado</a></li>
                    <li><a href="https://beam.health/states/conecticut/">Connecticut</a></li>
                    <li><a href="https://beam.health/states/delaware/">Delaware</a></li>
                    <li><a href="https://beam.health/states/florida/">Florida</a></li>
                    <li><a href="https://beam.health/states/georgia/">Georgia</a></li>
                    <li><a href="https://beam.health/states/hawaii/">Hawaii</a></li>
                    <li><a href="https://beam.health/states/idaho/">Idaho</a></li>
                    <li><a href="https://beam.health/states/illinois/">Illinois</a></li>
                    <li><a href="https://beam.health/states/indiana/">Indiana</a></li>
                    <li><a href="https://beam.health/states/iowa/">Iowa</a></li>
                    <li><a href="https://beam.health/states/kansas/">Kansas</a></li>
                    <li><a href="https://beam.health/states/kentucky/">Kentucky</a></li>
                    <li><a href="https://beam.health/states/louisiana/">Louisiana</a></li>
                    <li><a href="https://beam.health/states/maine/">Maine</a></li>
                    <li><a href="https://beam.health/states/maryland/">Maryland</a></li>
                    <li><a href="https://beam.health/states/massachusetts/">Massachusetts</a></li>
                    <li><a href="https://beam.health/states/michigan/">Michigan</a></li>
                    <li><a href="https://beam.health/states/minnesota/">Minnesota</a></li>
                    <li><a href="https://beam.health/states/mississippi/">Mississippi</a></li>
                    <li><a href="https://beam.health/states/missouri/">Missouri</a></li>
                    <li><a href="https://beam.health/states/montana/">Montana</a></li>
                    <li><a href="https://beam.health/states/nebraska/">Nebraska</a></li>
                    <li><a href="https://beam.health/states/nevada/">Nevada</a></li>
                    <li><a href="https://beam.health/states/new-hampshire/">New Hampshire</a></li>
                    <li><a href="https://beam.health/states/new-jersey/">New Jersey</a></li>
                    <li><a href="https://beam.health/states/new-mexico/">New Mexico</a></li>
                    <li><a href="https://beam.health/states/new-york/">New York</a></li>
                    <li><a href="https://beam.health/states/north-carolina/">North Carolina</a></li>
                    <li><a href="https://beam.health/states/north-dakota/">North Dakota</a></li>
                    <li><a href="https://beam.health/states/ohio/">Ohio</a></li>
                    <li><a href="https://beam.health/states/oklahoma/">Oklahoma</a></li>
                    <li><a href="https://beam.health/states/oregon/">Oregon</a></li>
                    <li><a href="https://beam.health/states/pennsylvania/">Pennsylvania</a></li>
                    <li><a href="https://beam.health/states/rhode-island/">Rhode Island</a></li>
                    <li><a href="https://beam.health/states/south-carolina/">South Carolina</a></li>
                    <li><a href="https://beam.health/states/south-dakota/">South Dakota</a></li>
                    <li><a href="https://beam.health/states/tennessee/">Tennessee</a></li>
                    <li><a href="https://beam.health/states/texas/">Texas</a></li>
                    <li><a href="https://beam.health/states/utah/">Utah</a></li>
                    <li><a href="https://beam.health/states/vermont/">Vermont</a></li>
                    <li><a href="https://beam.health/states/virginia/">Virginia</a></li>
                    <li><a href="https://beam.health/states/washington/">Washington</a></li>
                    <li><a href="https://beam.health/states/west-virginia/">West Virginia</a></li>
                    <li><a href="https://beam.health/states/wisconsin/">Wisconsin</a></li>
                    <li><a href="https://beam.health/states/wyoming/">Wyoming</a></li>
                </ul>
              </div>
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

export default StateTelemedicinePolicies;
