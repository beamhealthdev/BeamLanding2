import Style from './Styles/Case-Studies.module.css'

const CaseStudies = () => {
  return (
      <div className={Style.background}>
        <div className='container'>
          <div className="row section1">
            <div className="col">
              <h1 className='title big-font black'>Customers</h1>
              <h1 className='title big-font flex'> <p className='black'>drive</p> <p className='blue ml-20'>our</p></h1>
              <h1 className='title big-font mb-30'><p className='blue'>innovation.</p></h1>
            </div>

          </div>

          <div className={'row ' + Style.section2}>
            <div className='col-md-4'>
              <a href="https://beam.health/case-studies/case-4-urgent-care-facing-covid-19/" target="_blank">
              <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/emergicenter-case4n.png'></img>
              <h2 className={Style.img}>Case #4 – Urgent Care facing COVID-19</h2>
              <p className='learn-more'>Lean More ></p>
              </a>
            </div>
            <div className='col-md-4'>
              <a href="https://beam.health/case-studies/case-3-urgent-care-looking-to-scale/" target="_blank">
                <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/Urgent-case3n.png'></img>
                <h2 className={Style.img}>Case #3 – Urgent Care looking to scale</h2>
                <p className='learn-more'>Lean More ></p>
              </a>
            </div>
            <div className='col-md-4'>
              <a href="https://beam.health/case-studies/case-2-wellness-medical-spa/" target="_blank">
                <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/medx-case2n.png'></img>
                <h2 className={Style.img}>Case #2 – Wellness / Medical Spa</h2>
                <p className='learn-more'>Lean More ></p>
              </a>
            </div>
          </div>
          <div className={Style.section4}>
          <div className='col-md-4'>
            <a  href="https://beam.health/case-studies/case-1/" target="_blank">
              <img className={Style.img + ' ' + Style.center} src='https://beam.health/wp-content/uploads/2020/09/couchlogo-case1n.png'></img>
              <h2 className={Style.img + ' ' + Style.center}>Case #4 – Urgent Care facing COVID-19</h2>
              <p className={'learn-more ' + Style.center + ' ' + Style.mb_50}>Lean More ></p>
            </a>
          </div>
          </div>
        </div>
      </div>
  )
};

export default CaseStudies;
