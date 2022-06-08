import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Dropdown} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const Layout = () => {
  let navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const showDropdown1 = (e)=>{
      setShow1(!show1);
  }
  const hideDropdown1 = e => {
      setShow1(false);
  }
  const showDropdown2 = (e)=>{
      setShow2(!show2);
  }
  const hideDropdown2 = e => {
      setShow2(false);
  }
  const showDropdown3 = (e)=>{
      setShow3(!show3);
  }
  const hideDropdown3 = e => {
      setShow3(false);
  }

  let url = window.location.href
  url = url.slice(url.length - 4)

  let listener = null
  const [scrollState, setScrollState] = useState("transparent")

 useEffect(() => {
   listener = document.addEventListener("scroll", e => {
     var scrolled = document.scrollingElement.scrollTop
     if (scrolled >= 60) {
       if (scrollState !== "amir") {
         setScrollState("amir")
       }
     } else {
       if (scrollState !== "transparent") {
         setScrollState("transparent")
       }
     }
   })
   return () => {
     document.removeEventListener("scroll", listener)
   }
 }, [scrollState])

 let solutions = (e) => {
        console.log('here')
   // if(e.target === e.currentTarget) {
   //
   //   navigate("/solutions")
   // }
 }

  return (
    <>
      <Navbar bg="light" expand="lg" className={url === 'home' ? `${scrollState} sticky` : 'sticky'}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")}>
          <img width="231" height="auto" alt="" title=""
          data-src="https://beam.health/wp-content/themes/beam-health/images/logo.png"
          className="logo-sticky ls-is-cached lazyloaded nav-img"
          src={(scrollState === "transparent" && url === 'home')  ? "https://beam.health/wp-content/themes/beam-health/images/logo-white.png" : "https://beam.health/wp-content/themes/beam-health/images/logo.png"}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link className='navbar-about' onClick={() => navigate("/about")}>About Us</Nav.Link>
              <NavDropdown
                title="Solutions +"
               id="collasible-nav-dropdown"
               show={show1}
               onMouseEnter={showDropdown1}
               onMouseLeave={hideDropdown1}
               onClick={(e) => {if(e.target.innerHTML === 'Solutions +'){navigate("/solutions")}}}
               >
                <NavDropdown.Item onClick={() => navigate("/mentalhealth")}>Mental Health</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patientengagement")}>Patient Engagement</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/telehealth-landing-page")}>Telehealth</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/online-payments")}>Online Payments</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patient-intake")}>Patient Intake</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
              title="Who We Help  +"
              id="collasible-nav-dropdown"
              id='who-we-help-navbar'
              show={show2}
              onMouseEnter={showDropdown2}
              onMouseLeave={hideDropdown2}>
                <NavDropdown.Item onClick={() => navigate("/enterprise-page")}>Enterprise Page</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/for-clinics")}>For Clinics</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/affiliate-partnerships-reseller-program")}>Affiliate Partnerships</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/patients")}>Patients</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
              title="Resources  +"
              id="collasible-nav-dropdown"
              className='resources-navbar'
              show={show3}
              onMouseEnter={showDropdown3}
              onMouseLeave={hideDropdown3}>
                {/*<NavDropdown.Item onClick={() => navigate("/blogs")}>Blogs</NavDropdown.Item>*/}
                <NavDropdown.Item onClick={() => navigate("/ehr-integrations")}>EHR Integrations</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/case-studies")}>Case Studies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/state-telemedicine-policies")}>State Telemedicine Policies</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/telemedicine-reibursement")}>Telemedicine Reibursement</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/faq")}>FAQ</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/beam-vs-others")}>Beam Vs Others</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className='callus'>Call us at (929) 226-0624</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;
