import Style from './Styles/Affiliate.module.css'

const AffiliatePartnershipsResellerProgram = () => {
  return (
    <>
      <div className={Style.section}>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4.png"></img>
            </div>
            <div className={"col-md-6 " + Style.Stylesection1textcontainer}>
              <h1 className={Style.title}>Let’s grow the footprint of digital healthcare together.</h1>
              <p>Our partners bring more medical providers OR more patients to Beam, combining the power of their network with our technology to move healthcare forward.</p>
              <p>Fill out the form below to be contacted by one of our Business Development Representatives</p>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section2}>
        <div className='container'>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Who partners with Beam?</p>
            <p  className={Style.textsubtitle}>Companies that have either a network of affiliated providers or patients interested in virtual care make great partners with Beam.</p>
            <p  className={Style.textsubtitle2}>Working with Beam is the fastest way to bring a powerful suite of digital healthcare operations to your network. Whether you work with health clinics that are considering supplementing their businesses with a virtual offering, or if you have a consumer product with customers seeking virtual care providers, Beam can bring value to your operation.</p>
          </div>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Why partner with Beam?</p>
            <p  className={Style.textsubtitle}>The Beam Partner Program is designed to help you empower your customer base to go virtual without a long implementation cycle.</p>
            <p  className={Style.textsubtitle2}>Educating providers or patients about how to use telemedicine can be complex and time-consuming. Beam’s easy to use platform with our rapid-deployment guarantee can bring the tools you need to thrive in the digital age of healthcare. With 95% of doctors using Beam not requiring training or user manuals and account creation in 90 seconds, Beam empowers providers sooner, not later.</p>
          </div>
          <div className={Style.textContainer}>
            <p className={Style.textTitle}>Program Details</p>
            <p  className={Style.textsubtitle}>Join the Beam Partner Program</p>
            <p  className={Style.textsubtitle2}>Whether you’re enabling providers or empowering patients, we’re thrilled to see what we can accomplish together. Beam partnerships can include software licensing, reseller agreements, or revenue sharing. We endeavor to launch partnerships quickly and evaluate progress as we scale together.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default AffiliatePartnershipsResellerProgram;
