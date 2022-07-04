import Style from './Styles/BeamVsOthers.module.css';
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class BeamVsOthers extends React.Component {

    state = {
      modal: false,
    }

    setModal = (e) => {
      if(e.target === e.currentTarget) {
          this.setState({modal: false})
      }
    }

render () {
  return (
    <>
      <div className={Style.section}>
        <div className={Style.ml}>
          <div className={"row " + Style.orange}>
            <div className={"col-md-6 " + ' ' + Style.section1_padding}>
              <h1 className={Style.title}>Stop patient leakage with Beam</h1>
              <p className={Style.subtext}>We’ve spoken with thousands of healthcare providers and we keep hearing the same things.</p>
              {/*<p className={Style.quote}>"</p>
              <Carousel responsive={responsive}>
                <div className={Style.textcenter}>"Our providers have no idea how to use the product. It took us weeks to train our staff."</div>
                <div>"Our providers have no idea how to use the product. It took us weeks to train our staff."</div>
                <div>"Our providers have no idea how to use the product. It took us weeks to train our staff."</div>
                <div>"Our providers have no idea how to use the product. It took us weeks to train our staff."</div>
              </Carousel>*/}
            </div>
            <div className={"col-md-6 "}>
              <img className='image1' src="https://beam.health/wp-content/uploads/2020/10/Mask-Group-55.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className='triangleTop'></div>

      <div className={Style.section2container}>
        <div className={Style.section2}>
          <div className='container'>
            <div className="row">
              <div>
                <h1 className={Style.Section2title}>Beam is Simple</h1>
                <p className={Style.Section2text}>Boost Your Business. We built Beam to save the private practice. We believe that the world would fundamentally be worse off if innovation in healthcare continues to be concentrated in telemedicine companies and large health systems. We built Beam for the private practice. Incumbent digital health solutions only focus on bare-bones video conferencing. Older platforms suffer from poor customer service and scalability issues. Beam offers more; more features, more custom branding, more marketing tools and better customer service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='triangleBottom'></div>

      <div className={Style.section3}>
        <div className='container'>
          <div className="row beamhealth-image-container-beamvsus">
            <div className='col-md-4'>
            </div>
            <div className={'col-md-4 ' + Style.backgroundcolorblue + ' ' + Style.section2_img}>
              <img alt="beamhealth" loading="lazy" data-src="https://beam.health/wp-content/uploads/2020/11/logo-white.png" className=" ls-is-cached lazyloaded" src="https://beam.health/wp-content/uploads/2020/11/logo-white.png"></img>
              <div onClick={(e) => this.setState({modal: true})} className={Style.seeAllFeatures}>See All Features +</div>
            </div>
            <div className={'col-md-4 ' + Style.section2_img + ' ' + Style.section2_img_border}>
              <img className={Style.img2} alt="doxy" loading="lazy" data-val="" data-src="https://beam.health/wp-content/uploads/2020/11/doxy-1.png" className=" ls-is-cached lazyloaded" src="https://beam.health/wp-content/uploads/2020/11/doxy-1.png"></img>
            </div>
          </div>
        </div>
      </div>

      {
        this.state.modal &&
        <div className={'overlay ' + Style.ml15} onClick={(e) => this.setModal(e)}>
          <div className='modal-container'>
            <div className='close' onClick={(e) => this.setModal(e)}></div>
            <div className={Style.modalContainer}>
              <p>Patient Referral Network</p>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span>Access to a growing network of new patients</span>
              </div>
              <p>Provder Implementation</p>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Demo Length: 5min</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Provider Training: Not Required</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Implementation Time 24 hours</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Payouts via Stripe</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Dedicated Support Team</span>
              </div>
              <p>EHR Integration</p>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Custom EHR Integrations</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Single-Sign-On available</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Appointment history & length of visit data</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Billing data</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Scheduling data</span>
              </div>
              <p>Enhanced Web Presence</p>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Free Patient Faceing Text & Email</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Custom Patient Landing Page</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Custom Website Widget</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Free Branding on Provider App</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Dedicated Phone Number for All Providers</span>
              </div>
              <p>Patient Experience</p>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>App/Software Download Requirement: Not required</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>How long does it take for a patient to register: 25 sec</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Patient Pre-registration</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Co-Branded Patient Registration Website</span>
              </div>
              <div className={Style.flex}>
                <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
                <span className={Style.Mt}>Dedicated Patient Support Phone Number</span>
              </div>
            </div>
          </div>
        </div>
      }

      <div className={Style.section4}>
        <div className="row">
          <div className={'col ' + Style.border_gray + ' ' + Style.border_gray_nobottom}>
              <div className={Style.header}>Patient Referral Network</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Access to a growing network of new patients</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.section4}>
        <div className="row">
          <div className={'col ' + Style.border_gray + ' ' + Style.border_gray_nobottom}>
              <div className={Style.header}>Provider Implementation</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Demo Length</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>5 Minutes</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>20 Minutes</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Provider Training</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Not Required</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Implementation Time</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>24 Hours</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>2-3 Weeks</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Implementation Time</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>24 Hours</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>2-3 Weeks</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Payouts via Stripe</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
              <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Dedicated Support Team</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
              <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
              <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
      </div>


      <div className={Style.section4}>
        <div className="row">
          <div className={'col ' + Style.border_gray + ' ' + Style.border_gray_nobottom}>
              <div className={Style.header}>EHR Integration</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Custom EHR Integrations</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Single-Sign-On available</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Appointment history & length of visit data</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Billing data</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Scheduling data</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.section4}>
        <div className="row">
          <div className={'col ' + Style.border_gray + ' ' + Style.border_gray_nobottom}>
              <div className={Style.header}>Enhanced Web Presence</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Free Patient Facing Text & Email Marketing</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Custom Patient Landing Page</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Custom Website Widget</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Free Branding on Provider App</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Dedicated phone Number for All Providers</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.section4}>
        <div className="row">
          <div className={'col ' + Style.border_gray + ' ' + Style.border_gray_nobottom}>
              <div className={Style.header}>Patient Experience</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>App/Software Download Requirement</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Not Required</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Required</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>How long does it take for a patient to register?</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>25 sec</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>5 Min</div>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Patient Pre-registration</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Co Branded Patient Registration Website</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
        <div className="row">
          <div className={'col-4 ' + Style.border_gray}>
            <div className={Style.content}>Dedicated Patient Support Phone Number</div>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>
          </div>
          <div className={'col-4 ' + Style.border_gray}>
            <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
          </div>
        </div>
      </div>
    </>
  )
}

};

export default BeamVsOthers;


//   <img data-src="https://beam.health/wp-content/themes/beam-health/images/yes.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/yes.png"></img>

//   <img data-src="https://beam.health/wp-content/themes/beam-health/images/no.png" className={Style.content + " ls-is-cached lazyloaded"} src="https://beam.health/wp-content/themes/beam-health/images/no.png"></img>
