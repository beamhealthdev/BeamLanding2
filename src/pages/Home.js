import './Styles/Main.css';
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react"

class Home extends React.Component {

  state = {
    custom: true,
    hd: false,
    scale: false,
    intuitive: false
  }

  render() {
    return (
      <div className="background-image home">
        <div className='container home-container'>

          <div className='row'>
            <div className='col'>
              <h1 className='main-header-text'>Telehealth Engineered For Reliability</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <video className='video' autoPlay loop muted src="https://beam.health/wp-content/uploads/2021/11/ezgif.com-gif-maker-1.mp4" playsInline></video>
            </div>
            <div className='col-md-6 col-sm-0'>
              <div className="beam-health-header-text">
                <div>Whether you are a new practice trying to acquire patients or a healthcare enterprise with thousands of clinicians, you need a fail-proof way to see patients remotely.</div>
              </div>
            </div>
          </div>

          <div className='row section2'>

            { this.state.custom &&
              <>
                <div className='col-md-6 col-sm-12'>
                  <div className='section2-text'>
                    <div className='section2-header'>Features Providers and Patients Love</div>
                    <div className='blue-background'>
                      <div>Customizable Patient & Provider Workflows</div>
                      <div>No workflow in Beam is set in stone. You can easily craft a better experience from telehealth, to onboarding, to online chat, to payment collection</div>
                    </div>
                    <div className="pointer" onClick={() => this.setState({custom: false, hd: true, scale: false, intuitive: false})}>HD, HIPPA Compliant Telehealth</div>
                    <div className="pointer" onClick={() => this.setState({custom: false, hd: false, scale: false, intuitive: true})}>Intuitive Scheduling</div>
                    <a href='https://providers.beam.health/revenue-calculator/?utm_source=home+page&utm_medium=home+page+email+-+revenue+calc&utm_campaign=home+page+email+collection+revenue+calc&utm_id=home+page+email+collect+-+revenue+calc' target='_bank'>
                      <button type="button" className="btn btn-secondary homeButton margin-top-home">Learn More</button>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <img className='image section2-image-home' src='https://beam.health/wp-content/uploads/2021/11/Image-124-2.png'></img>
                </div>
              </>
            }
            { this.state.hd &&
              <>
                <div className='col-md-6 col-sm-12'>
                  <div className='section2-text'>
                    <div className='section2-header'>Features Providers and Patients Love</div>
                    <div className="pointer" onClick={() => this.setState({custom: true, hd: false, scale: false, intuitive: false})}>Customizable Patient & Provider Workflows</div>
                    <div className='blue-background'>
                      <div>HD, HIPPA Compliant Telehealth</div>
                      <div>Reliable video connection that allows patients and providers to connect</div>
                    </div>
                    <div className="pointer" onClick={() => this.setState({custom: false, hd: false, scale: false, intuitive: true})}>Intuitive Scheduling</div>
                    <a href='https://providers.beam.health/revenue-calculator/?utm_source=home+page&utm_medium=home+page+email+-+revenue+calc&utm_campaign=home+page+email+collection+revenue+calc&utm_id=home+page+email+collect+-+revenue+calc' target='_bank'>
                      <button type="button" className="btn btn-secondary homeButton margin-top-home">Learn More</button>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <img className='image section2-image-home' src='https://beam.health/wp-content/uploads/2021/11/Image-131.png'></img>
                </div>
              </>
            }
            
            { this.state.intuitive &&
              <>
                <div className='col-md-6 col-sm-12'>
                  <div className='section2-text'>
                    <div className='section2-header'>Features Providers and Patients Love</div>
                    <div className="pointer" onClick={() => this.setState({custom: true, hd: false, scale: false, intuitive: false})}>Customizable Patient & Provider Workflows</div>
                    <div className="pointer" onClick={() => this.setState({custom: false, hd: true, scale: false, intuitive: false})}>HD, HIPPA Compliant Telehealth</div>
                    <div className='blue-background'>
                      <div>Intuitive Scheduling</div>
                      <div>No shows cost money. With Beam, you can now send custom reminders to a patient's email before their scheduled appointment</div>
                    </div>
                    <a href='https://providers.beam.health/revenue-calculator/?utm_source=home+page&utm_medium=home+page+email+-+revenue+calc&utm_campaign=home+page+email+collection+revenue+calc&utm_id=home+page+email+collect+-+revenue+calc' target='_bank'>
                      <button type="button" className="btn btn-secondary homeButton margin-top-home">Learn More</button>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <img className='image section2-image-home' src='https://beam.health/wp-content/uploads/2021/11/Image-132.png'></img>
                </div>
              </>
            }
          </div>
        </div>

          {/* Featured On Section*/}

          <div className='row section3-background'>
            <div className='col-md-6 col-sm-12'>
              <div className='mascot-text'>
                <div>How much more can you make with Beam?</div>
                <div>Find out in 2 minutes how much you lost due to your patient collections process</div>
                <a href='https://providers.beam.health/revenue-calculator/?utm_source=home+page&utm_medium=home+page+email+-+revenue+calc&utm_campaign=home+page+email+collection+revenue+calc&utm_id=home+page+email+collect+-+revenue+calc' target='_bank'>
                  <button type="button" className="btn btn-secondary homeButton">See your savings</button>
                </a>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img className='image' src='https://beam.health/wp-content/uploads/2021/11/mascot_03.png'></img>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='craft-and-measure'>Craft and Measure the Patient Experience</div>
              <iframe src="https://meetings.hubspot.com/drew160/beam-health-demo?embed=true&amp;parentHubspotUtk=653dcb903fc615dc2dcbbcb3f3f109ec&amp;parentPageUrl=https://beam.health/request-a-free-demo/&amp;ab=undefined&amp;abStatus=undefined&amp;contentId=undefined" width="100%" style={{minWidth: "312px", minHeight: '516px', height: "756px", border: "none"}}></iframe>
            </div>
          </div>

      </div>
    );
  }
}

export default Home;
