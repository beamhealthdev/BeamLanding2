import Style from './Styles/FAQ.module.css'

const FAQ = () => {

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
    <div className={Style.backgroundImg}>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Group-1172.png"></img>
          </div>
          <div className="col-md-6">
            <h1 className='title'>You have questions, we have answers</h1>
            <div className='emailInput'>
              <p className="flex">Email <p className='astrisk'>*</p></p>
              <input type="text" id="fname" name="fname"></input>
              <button className={'LearnMoreButton ' + Style.boxshadow}>Learn More</button>
            </div>
          </div>
        </div>
        <div className={"row " + Style.section2}>
          <div className="col">
            <h1 className='title'>Hi, how can we help?</h1>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>What is Beam?</p>
              <div className={"toggle " + Style.toggle}>
                <p><em><span>Beam is the first digital operations platform built for doctors.</span></em></p>
                <p><span>Beam’s suite of digital services allows healthcare providers to effortlessly integrate virtual care into their practice.</span></p>
                <p><u>Beam Health:</u></p>
                <ul>
                  <li><span>Allows providers to video chat with patients on an HD, HIPAA compliant platform</span></li>
                  <li><span>Gives providers free text and email marketing campaigns for existing and new patients</span></li>
                  <li><span>Enables billing through insurance or via cash, through an existing biller, or through Beam</span></li>
                </ul>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>How do I sign up for Beam?</p>
              <div className={"toggle " + Style.toggle}>
              <div >
                <p><span>If you’re a healthcare provider, you can get started with Beam by creating a free account in just 90 seconds! 95% of providers are able to set-up a Beam account without any help whatsoever. You can also request </span><a href="http://www.beam.health/contact/"><span>a personalized demo today</span></a><span>!</span></p>
                <p><span>If you’re a patient, you can have Beam sent to your physician by emailing us at </span><a href="mailto:info@beamhealthgroup.com"><span>info@beamhealthgroup.com</span></a><span>. Note that there is no app download requirement for patients!</span></p>
                </div>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>As a provider, why should I use Beam?</p>
              <div className={"toggle " + Style.toggle}>
              <div><p><span>Beam allows providers the rare opportunity to increase profitability while increasing patient satisfaction. While other platforms offer just telehealth, Beam supplies a HIPAA compliant, HD telehealth platform and empowers providers with a vast array of digital tools that improve practices:</span></p>
                <ul>
                <li aria-level="1"><span>Billing</span></li>
                <li aria-level="1"><span>Scheduling</span></li>
                <li aria-level="1"><span>Marketing&nbsp;</span></li>
                <li aria-level="1"><span>Customer service</span></li>
                </ul>
                </div>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>How much will Beam charge me?</p>
              <div className={"toggle " + Style.toggle}>
                <p><span>Beam offers custom pricing solutions based on each practice’s needs. For more information, set up a demo today!</span></p>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>Will integrating telemedicine into my practice be an intensive process?</p>
              <div className={"toggle " + Style.toggle}>
              <div><p><span>Not with Beam. Our platform allows providers to set up an account on their own in 90 seconds, giving access to not only telemedicine but an entire digital operations platform designed for doctors.</span></p>
                <p><span>If desired, Beam’s team can consult you on how to begin offering telemedicine services.</span></p>
                </div>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>What if I am I’m already too busy as it is?</p>
              <div className={"toggle " + Style.toggle}>
                  <span>Beam doesn’t only provide HIPAA compliant, HD telemedicine services, but it offers a suite of digital tools that help providers run their practices more efficiently. Offering services from scheduling to billing to marketing, Beam helps busy practices become better at not only providing care to their patients but improving practice workflows, allowing them to increase the patient workload. </span>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>When would I conduct telemedicine visits?</p>
              <div className={"toggle " + Style.toggle}>
                <span>Through the Beam platform you have complete autonomy to decide whether to fully integrate in-person and telemedicine hours, carve out time during normal business hours exclusively for telemedicine or conduct telemedicine exclusively after-hours or on weekends.</span>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>Is my information safe on Beam?</p>
              <div className={"toggle " + Style.toggle}>
                <p><span>We take security very seriously at Beam. Our app is HIPAA-compliant and all video chats and patient information are encrypted.</span></p>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>Does insurance cover telemedicine? What will patients pay?</p>
              <div className={"toggle " + Style.toggle}>
                <p className="p2"><span>Most states include coverage for telemedicine from private insurers, Medicare and Medicaid. For more information, </span><a href="https://beam.health/state-telemedicine-policies/"><span>visit our state by state guide</span></a><span> to see where your state stands on covering telemedicine.</span></p>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>Are my patients going to be sold other products when they sign up to Beam?</p>
              <div className={"toggle " + Style.toggle}>
                <p>Absolutely not. We do not advertise or promote sponsored content or products.</p>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>Will my competitors have access to my patients on Beam?</p>
              <div className={"toggle " + Style.toggle}>
                <p>No, providers who use the app have their own digital practice. Your patients can only be accessed by providers/staff that you authorize.</p>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>How much can I earn with Beam?</p>
              <div className={"toggle " + Style.toggle}>
                <span>Medical practices typically see 10-20% of annual revenue loss due to patient leakage or poor customer retention. Beam can help you solve your “leaky bucket” problem and add 7-9% incremental revenue to your business.</span>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>How can I encourage patients to use Beam?</p>
              <div className={"toggle " + Style.toggle}>
              <div><p><span>Beam is more than just a telemedicine platform; we are a digital operations platform built for doctors. Part of that platform includes providing a bevy of marketing tools to Beam customers. These tools include a text and email marketing campaign to new and existing patients to let everyone know that you now have telemedical capabilities. It also includes the Beam Button to install on your homepage which not only informs visitors that you now offer telemedicine but also takes anyone who clicks on the Beam Button to a co-branded website that informs patients how a Beam visit works and registers them to use the platform.</span></p>
              <p><span>Other marketing solutions offered through Beam are:</span></p>
              <ul>
              <li aria-level="1"><span>Sponsored waiting room content</span></li>
              <li aria-level="1"><span>Social media assets</span></li>
              <li aria-level="1"><span>Physical fliers to put in your practice</span></li>
              <li aria-level="1"><span>And more!</span></li>
              </ul>
              </div>
              </div>
            </div>
            <div>
              <p className='main pointer' onClick={(e) => {toggle(e)}}>How does billing work with Beam?</p>
              <div className={"toggle " + Style.toggle}>
                  <div><p><span>Billing for telemedicine is simple and involves only a handful of </span><a href="https://beam.health/telemedicine-cpt-codes/"><span>CPT codes</span></a><span>. Beam enables billing through insurance or via cash, through your existing biller, or through Beam’s built-in invoicing software, which allows providers to bill patients whatever the agreed-upon amount is following a telemedicine visit or even days later.</span></p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FAQ;
